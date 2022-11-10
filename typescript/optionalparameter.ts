function display_details(id:number,name:string,mail_id?:string)
{
    console.log("Id -",id);
    console.log("Name -",name);

    if(mail_id!=undefined)
    {
        console.log("Mail id -",mail_id);
    }
}

display_details(1,"Aangi");
//display_details(2,"zeel","zeel@gmail.com");