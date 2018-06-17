import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
@Component({
  selector: 'app-flag',
  templateUrl: './flag.component.html',
  styleUrls: ['./flag.component.css']
})
export class FlagComponent implements OnInit {
 countries;
  constructor(public allcountry:CountryService )
   {
    }
    countryCode;
    countryCode1;
    countryCode2;
    countryCode3;
    countryName;
    name;
    countryName1;
    countryName2;
    countryName3;
    cname;
countryarr=[];
arrayname;
newcountrycode;
newcountryname;
select;
status=false;

next()
{
  
  this.countries=this.allcountry.getClass();
      
let randomCountry=Math.round(Math.random()*this.countries.length);
let randomCountry1=Math.round(Math.random()*this.countries.length);
let randomCountry2=Math.round(Math.random()*this.countries.length);
let randomCountry3=Math.round(Math.random()*this.countries.length);

this.countryCode=this.countries[randomCountry]['alpha-2'];
this.countryCode1=this.countries[randomCountry1]['alpha-2'];
this.countryCode2=this.countries[randomCountry2]['alpha-2'];
this.countryCode3=this.countries[randomCountry3]['alpha-2'];

this.countryName=this.countries[randomCountry].name;
this.countryName1=this.countries[randomCountry1].name;
this.countryName2=this.countries[randomCountry2].name;
this.countryName3=this.countries[randomCountry3].name;
this.countryarr=[{"name":this.countryName,"alpha-2":this.countryCode},{"name":this.countryName1,"alpha-2":this.countryCode1},{"name":this.countryName2,"alpha-2":this.countryCode2},{"name":this.countryName3,"alpha-2":this.countryCode3}];
let randomarray=Math.round(Math.random()*this.countryarr.length);
this.newcountrycode=this.countryarr[randomarray]['alpha-2'];
this.newcountryname=this.countryarr[randomarray].name;

console.log(this.newcountrycode);
}
  ngOnInit() {
  }
  count=0;

check(index)
{
  if(this.countryarr[index].name==this.newcountryname)
  {

 this.count++;

}
  else{
    this.count--;
  }
  this.next();
}

}
