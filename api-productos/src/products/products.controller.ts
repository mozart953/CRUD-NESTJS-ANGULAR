import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';

import {CreateProductDTO} from '../dto/product.dto';

import {ProductsService} from '../products/products.service';


@Controller('products')
export class ProductsController {

    constructor(private productService:ProductsService){}

    @Post('/create')
    async createPost(@Res() res, @Body() createProductDTO:CreateProductDTO){
        //console.log(createProductDTO);
        const product = await this.productService.createProduct(createProductDTO);

        return res.status(HttpStatus.OK).json({
            message:'Producto creado exitosamente',
            product: product
        });

    }


    @Get('/')
    async getProducts(@Res() res){
        const obtainProducts = await this.productService.getProducts();
        // return obtainProducts;

        return res.status(HttpStatus.OK).json(
            {
                information:obtainProducts
            }
        );

    }

    @Get('/:productID')
    async getProduct(@Res() res,@Param('productID') productID:string){
        
        const obtainProduct = await this.productService.getProduct(productID);

        if(!obtainProduct) throw new NotFoundException('El producto no existe');

        
        return res.status(HttpStatus.OK).json(
            {
                respueta: 'Producto actualizado correctamente'
            }
        );

    }

    @Put('/update')
    async updateProduct(@Res() res,@Query('productID') productID ,@Body() createProductDTO:CreateProductDTO){
        const updateProduct = await this.productService.updateProduct(productID, createProductDTO);


        if(!updateProduct) throw new NotFoundException('El producto no existe');

        return res.status(HttpStatus.OK).json(

            {
               
                respuesta: 'Producto actualizado correctamente'
            }

           
        )
           
    }


    @Delete('/delete')
    async deleteProduct(@Res() res, @Query('productID') productID){
        const deleteProduct = await this.productService.deleteProduct(productID);
        
        if(!deleteProduct) throw new NotFoundException('El producto no existe');
        return res.status(HttpStatus.OK).json({
            respuesta: 'Producto eliminado correctamente'
        })

    }


}
