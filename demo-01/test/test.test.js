/**
 * Created by SimGenius on 2017/7/26.
 */
import chai from 'chai'
import Person from "../model/person";

let expect = chai.expect;

describe('person description',()=>{
    it('sim @ 5',()=>{
        expect(new Person('sim',5).age).to.be.equals(5);
    })
})