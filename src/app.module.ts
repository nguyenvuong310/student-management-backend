import { Module } from '@nestjs/common';
import { StudentsModule } from './modules/students/students.module';

import { PrometheusModule } from '@willsoto/nestjs-prometheus';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { join } from 'path';

import { readFileSync } from 'fs';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    AuthModule,
    StudentsModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrometheusModule.register({
      path: '/metrics', // default là /metrics
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        entities: [join(__dirname, '**', '*.entity.{ts,js}')],
        synchronize: false,
        migrationsRun: true,
        migrations: ['dist/database/migrations/*.js'],
        cli: {
          migrationsDir: 'src/database/migrations',
        },

        ssl:
          configService.get<string>('NODE_ENV') === 'production'
            ? { ca: readFileSync(__dirname + '/assets/ca.pem') }
            : false,
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
