import Swal from "sweetalert2";
export default function bottomSheet(item) {
  Swal.fire({
    position: "bottom",
    html: `<div style="min-height:180px">
    <div style="text-align: center; margin-bottom: 15px">
       <h2 style="color:#32ad35">+${item.amount.toLocaleString("en-PH", {
         style: "currency",
         currency: "PHP",
       })}</h2>
       <h6>${item.date}</h6>
    </div>
    <hr style=" border: 1px solid #d8d8d8;"/>
    <div  style="display: flex; justify-content: space-between; margin: 20px 0px;">
       <h5 style="color: #8a8a8a; font-weight:600">Description:</h5>
       <h5>${item.description}</h5>
    </div>
     <div  style="display: flex; justify-content: space-between; margin: 20px 0px;">
       <h5 style="color: #8a8a8a; font-weight:600">Category:</h5>
       <h5>${item.category}</h5>
    </div>
    <div style="display: flex; justify-content: space-between; margin: 20px 0px;">
       <h5 style="color: #8a8a8a; font-weight:600">Debit:</h5>
       <h5>${item.disbursement}</h5>
    </div>
    </div>`,
    showConfirmButton: false,
  });
}
