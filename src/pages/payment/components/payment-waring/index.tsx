import { formatVND } from "utils/format";
import './style.scss'
interface PaymentWaringProps{
  newNamePackage: string;
  pricePackage:number;
  oldNamePackage: string;
  
};
const PaymentWaring = ({newNamePackage , pricePackage, oldNamePackage}: PaymentWaringProps) => {
  return (
    <div className="PaymentWaring">
      <IconWaring/>
      <div className="PaymentWaring-content">
        <p>Quý khách đang yêu cầu chuyển đổi sang gói cước {newNamePackage} với giá {formatVND(pricePackage)}.</p>
        <span>Gói {oldNamePackage} sẽ bị hủy, lưu lương DATA còn lại của gói {oldNamePackage} sẽ KHÔNG được bảo lưu.</span>
      </div>
    </div>
  )
}

export default PaymentWaring

const IconWaring = () => {
  return (
    <svg width="28" height="32" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"23%"}}>
      <path d="M8 17.1666C4.048 17.1666 0.833328 13.952 0.833328 9.99998C0.833328 6.04798 4.048 2.83331 8 2.83331C11.952 2.83331 15.1667 6.04798 15.1667 9.99998C15.1667 13.952 11.952 17.1666 8 17.1666ZM8 3.83331C4.59933 3.83331 1.83333 6.59931 1.83333 9.99998C1.83333 13.4006 4.59933 16.1666 8 16.1666C11.4007 16.1666 14.1667 13.4006 14.1667 9.99998C14.1667 6.59931 11.4007 3.83331 8 3.83331ZM8.5 13V9.95262C8.5 9.67662 8.276 9.45262 8 9.45262C7.724 9.45262 7.5 9.67662 7.5 9.95262V13C7.5 13.276 7.724 13.5 8 13.5C8.276 13.5 8.5 13.276 8.5 13ZM8.68001 7.66665C8.68001 7.29865 8.38201 6.99998 8.01334 6.99998H8.00667C7.63867 6.99998 7.34326 7.29865 7.34326 7.66665C7.34326 8.03465 7.64534 8.33331 8.01334 8.33331C8.38134 8.33331 8.68001 8.03465 8.68001 7.66665Z" fill="#E66C00" />
    </svg>

  )
}