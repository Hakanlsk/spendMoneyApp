import { moneyFormat } from "../helpers";
function Header({total, money}) {
    return (  
        <>
            
                {total > 0 && money - total !== 0 && (
                    <div className="header">Harcayacak <span>{moneyFormat(money - total)}$</span> paranız kaldı!</div>
                )}
                {total === 0 && (
                    <div className="header">Harcamak için <span>{moneyFormat(money)}$</span> paranız var!</div>
                )}
                {money - total === 0 &&(
                    <div className="header">Paranız bitti!</div>
                )}
                <style jsx>{`
                .header {
                    position: sticky;
                    top:0;
                    background: linear-gradient(to bottom, #20b820, #14be2a);
                    height: 60px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: #fff;
                    font-size: 24px;
                    letter-spacing: 1px;
                }
                .header span {
                    margin: 0 10px;
                    font-weight: bold;
                }
                `}</style>
        </>
    );
}

export default Header;