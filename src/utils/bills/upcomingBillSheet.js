import Swal from "sweetalert2";
export default function bottomSheet(item) {
  Swal.fire({
    position: "bottom",
    html: `<div style="min-height:180px">
    <div style="text-align: center; margin-bottom: 15px">
    <img src="${item.meta}"alt="logo" >
       <h4>${item.name}</h4>
    </div>
    <hr style=" border: 1px solid #d8d8d8;"/>
    <div  style="display: flex; justify-content: space-between; margin: 20px 0px;">
           <h5 style="color: #8a8a8a; font-weight:600">Due:</h5>
           <h5>${item.due}</h5>
        </div>
         <div  style="display: flex; justify-content: space-between; margin: 20px 0px;">
           <h5 style="color: #8a8a8a; font-weight:600">Payable:</h5>
           <h5>${item.amount.toLocaleString("en-PH", {
             style: "currency",
             currency: "PHP",
           })}</h5>
        </div>
        <div style="display: flex; justify-content: space-between; margin: 20px 0px;">
           <h5 style="color: #8a8a8a; font-weight:600">Payment Mode:</h5>
           <h5>${item.paymentMode}</h5>
        </div>
        </div>`,
    showConfirmButton: false,
  });
}
