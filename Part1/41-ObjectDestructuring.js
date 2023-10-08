// object destructuring

const brand = {
  brandName : "Louis Vittuon",
  brandCompany : "Victory to Heaven"
}

// const brandName = brand.brandName;
// const brandCompany = brand.brandCompany;

console.log(brandName);
console.log(brandCompany);

console.log("----------------");

//suppose we want to write variable name like below we did but there is a short cut so we will apply the concept object destructruring 
const var1 = brand.brandName;
const var2 = brand.brandCompany;

console.log(var1,var2)

console.log("----------------");

//i want to change name 
const brandName = brand.brandName;
const brandCompany = brand.brandCompany;

//brandName = ""

// const band = {
//   bandName: "led zepplin",
//   famousSong: "stairway to heaven",
//   year: 1968,
//   anotherFamousSong: "kashmir",
// };

// let { bandName, famousSong, ...restProps } = band;
// console.log(bandName);
// console.log(restProps);
