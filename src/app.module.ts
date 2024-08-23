import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AreaShipmentEntity } from './module/area-shipment/area-shipment.entity';
import { AreaShipmentModule } from './module/area-shipment/area-shipment.module';
import { CategoryKikkakeModule } from './module/categories-kikkake/categories-kikkake.module';
import { CateogoryKikkakeEntity } from './module/categories-kikkake/categories-kikkake.entity';
import { CategoryCustomerModule } from './module/category-customer/category-customer.module';
import { CategoryCustomerEntity } from './module/category-customer/category-customer.entity';
import { MasterCustomerModule } from './module/master-customers/master-customers.module';
import { MasterCustomerEntity } from './module/master-customers/master-customers.entity';
import { ChangeTypesModule } from './module/change-types/change-types.module';
import { ChangeTypesEntity } from './module/change-types/change-types.entity';
import { CompanyInfosModule } from './module/company-infos/company-infos.module';
import { CompanyInfosEntity } from './module/company-infos/company-infos.entity';
import { SalesEntity } from './module/sale/sale.entity';
import { SaleModule } from './module/sale/sale.module';
import { CustomersEntity } from './module/customers/customers.entity';
import { CustomerModule } from './module/customers/customers.module';
import { MemberModule } from './module/member/member.module';
import { MemberEntity } from './module/member/member.entity';
import { FlyerModule } from './module/flyer/flyer.module';
import { FlyerEntity } from './module/flyer/flyer.entity';
import { HolidayModule } from './module/holiday/holiday.module';
import { holidayEntity } from './module/holiday/holiday.entity';
import { PaymentHistoryModule } from './module/payment-history/payment-history.module';
import { PaymentHistoryEntity } from './module/payment-history/payment-history.entity';
import { PaymentMethodModule } from './module/payment-method/payment-method.module';
import { PaymentMethodEntity } from './module/payment-method/payment-method.entity';
import { PaymentPlanHistoryModule } from './module/payment-plan-history/payment-plan-history.module';
import { PaymentPlanHistoryEntity } from './module/payment-plan-history/payment-plan-history.entity';
import { ReceivedTransactionModule } from './module/received-transaction/received-transaction.module';
import { ReceivedTransactionEntity } from './module/received-transaction/received-transaction.entity';
import { PaymentPlanModule } from './module/payment-plan/payment-plan.module';
import { PaymentPlanEntity } from './module/payment-plan/payment-plan.entity';
import { PaymentModule } from './module/payment/payment.module';
import { PaymentEntity } from './module/payment/payment.entity';
import { ProductCategoryModule } from './module/product-category/product-category.module';
import { ProductCategoryEntity } from './module/product-category/product-category.entity';
import { ProductModule } from './module/product/product.module';
import { ProductEntity } from './module/product/product.entity';
import { SaleProductModule } from './module/sale-product/sale-product.module';
import { SaleProductEntity } from './module/sale-product/sale-product.entity';
import { ProductSetModule } from './module/product-set/product-set.module';
import { ProductSetEntity } from './module/product-set/product-set.entity';
import { ProductTypeModule } from './module/product-type/product-type.module';
import { ProductTypeEntity } from './module/product-type/product-type.entity';
import { ProductKikkakeModule } from './module/product-kikkake/product-kikkake.module';
import { ProductKikkakeEntity } from './module/product-kikkake/product-kikkake.entity';
import { SetProductModule } from './module/set-product/set-product.module';
import { SetProductEntity } from './module/set-product/set-product.entity';
import { ShipmentModule } from './module/shipment/shipment.module';
import { ShipmentEntity } from './module/shipment/shipment.entity';
import { ShippingCompanyModule } from './module/shipping-company/shipping-company.module';
import { ShippingCompanyEntity } from './module/shipping-company/shipping-company.entity';
import { MigrationModule } from './module/migration/migration.module';
import { MigrationEntity } from './module/migration/migration.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import configuration from './config/configuration';
import { AuthModule } from './module/auth/auth.module';

const commonEntities = [
  AreaShipmentEntity,
  CateogoryKikkakeEntity,
  CategoryCustomerEntity,
  MasterCustomerEntity,
  ChangeTypesEntity,
  CompanyInfosEntity,
  SalesEntity,
  CustomersEntity,
  MemberEntity,
  FlyerEntity,
  holidayEntity,
  PaymentHistoryEntity,
  PaymentMethodEntity,
  PaymentPlanHistoryEntity,
  ReceivedTransactionEntity,
  PaymentPlanEntity,
  PaymentEntity,
  ProductCategoryEntity,
  ProductEntity,
  SaleProductEntity,
  ProductSetEntity,
  ProductTypeEntity,
  ProductKikkakeEntity,
  SetProductEntity,
  ShipmentEntity,
  ShippingCompanyEntity,
  MigrationEntity
];

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('database.host'),
        port: configService.get<number>('database.port'),
        username: configService.get<string>('database.username'),
        password: configService.get<string>('database.password'),
        database: configService.get<string>('database.database'),
        // host: "seikatsudo_db",
        // port: 3307,
        // username:"testuser",
        // password: "testuser",
        // database: "seikatsudo",
        entities: commonEntities,
        synchronize: true,
      }),
    }),
    AreaShipmentModule,
    CategoryKikkakeModule,
    CategoryCustomerModule,
    MasterCustomerModule,
    ChangeTypesModule,
    CompanyInfosModule,
    SaleModule,
    CustomerModule,
    MemberModule,
    FlyerModule,
    HolidayModule,
    PaymentHistoryModule,
    PaymentMethodModule,
    PaymentPlanHistoryModule,
    ReceivedTransactionModule,
    PaymentPlanModule,
    PaymentModule,
    ProductCategoryModule,
    ProductModule,
    SaleProductModule,
    ProductSetModule,
    ProductTypeModule,
    ProductKikkakeModule,
    SetProductModule,
    ShipmentModule,
    ShippingCompanyModule,
    MigrationModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
  constructor(private dataSource: DataSource) { }
}
