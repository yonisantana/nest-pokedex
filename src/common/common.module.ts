import { Module } from '@nestjs/common';
import { AxiosAdapter } from './adapters/axios.adapter';

@Module({
    providers: [AxiosAdapter],
    exports: [AxiosAdapter] // pueda usarse en otro modulos
})
export class CommonModule { }
