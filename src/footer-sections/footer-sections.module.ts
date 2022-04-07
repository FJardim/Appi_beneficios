import { Module } from '@nestjs/common';
import { FooterSection } from './entities/footer-sections.entity';
import { FooterSectionsService } from './footer-sections.service';
import { FooterSectionsController } from './footer-sections.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([FooterSection])], 
    providers: [FooterSectionsService],
    controllers: [FooterSectionsController],
})
export class FooterSectionsModule {}

