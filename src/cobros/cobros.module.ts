import { Module } from '@nestjs/common';
import { CobrosService } from './cobros.service';
import { CobrosController } from './cobros.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cobro } from '../entities/cobro.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Cobro])],
    controllers: [CobrosController],
    providers: [CobrosService]
})
export class CobrosModule { }