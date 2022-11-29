let a=[5,7,6,9,8,10];
let bag="";
let count=0;
for(i=1;i<a.length;i++){
  if(a[i]>a[i-1]&&a[i]>a[i+1]){
    count++;
  }
}console.log(count);