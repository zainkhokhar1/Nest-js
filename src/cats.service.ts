import { Injectable } from "@nestjs/common";
import { CreateCatDTO } from "./cat.dto";

@Injectable()
export class CatService{
    private readonly cats: CreateCatDTO[] = [];

    create(cat:CreateCatDTO){
        this.cats.push(cat)
    }

    getAll(): CreateCatDTO[]{
        return this.cats;
    }

}