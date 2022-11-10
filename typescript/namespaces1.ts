///<reference path="./namespaces2.ts"/>
namespace users{
   export class person extends customer{
        getName(){
            return this.name
        }
    }
}
let u1=new users.person();
u1.setName("aangishah")
console.log(u1.getName());
