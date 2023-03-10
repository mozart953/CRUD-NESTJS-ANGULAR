import { Controller, Get, Post, Put, Delete, Res, HttpStatus } from '@nestjs/common';

@Controller('products')
export class ProductsController {

    @Post('/create')
    createPost(@Res() res){
        return res.status(HttpStatus.OK).json({
            message:'received'
        });

    }


}
