
import '../Home/Home.css'
import '../Home/Moneydetails.css'
export const Moneydetails = () => {

    return(
        <div className='moneydetails'>
            <div className='moneyBox0'>
            <div>Logo</div>
            <div>Bank</div>
            <div>Account no.</div>
            <div>IFSC Code</div>
            <div>Amount</div>
            <div>Loan</div>
            </div>
            <div className='moneyBox1'>
            <div className='logo'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/SBI-logo.svg/1200px-SBI-logo.svg.png" alt="sbi" width='20px' height='20px' /></div>
            <div className='bank'>SBI</div>
            <div className='accno'>10774938</div>
            <div className='code'>SBIN0000152</div>
            <div className='amount'>₹ 45000</div>
            <div className='loan'>0</div>
            </div>
        </div>
    )
    }