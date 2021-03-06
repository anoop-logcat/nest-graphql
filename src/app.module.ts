import { UserModule } from './user/user.module';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      subscriptions: {
        'graphql-ws': true,
      },
      autoSchemaFile: true,
    }),
    UserModule,
  ],
})
export class AppModule {}
