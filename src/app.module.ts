import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminModule } from './Admin/adminmodule.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/usermodule.module';

@Module({
  imports: [UserModule,AdminModule, TypeOrmModule.forRoot(
    {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'MyAdminDB',
    autoLoadEntities: true,
    synchronize: true,
    }
  ),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}




// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// <<<<<<< HEAD
// import { UserModule } from './user/usermodule.module';

// @Module({
//   imports: [UserModule],
// =======

// import { AdminModule } from './admin/adminmodule.module';
// //import { ExampleModule } from './Example/admin.module';

// @Module({
//   imports: [AdminModule],
// >>>>>>> 568d600f6dbe0da1872fac5af3b6bf964b668da9
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}
