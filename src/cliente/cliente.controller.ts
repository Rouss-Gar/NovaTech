import { Controller, Get } from '@nestjs/common';

@Controller('cliente')
export class ClienteController {
    @Get()
    HolaRinconnica(){
        return '¡Hola, Rincon Nica!'
    }
}
