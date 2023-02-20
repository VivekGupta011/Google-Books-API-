import React,{ useState } from "react";
import Modal from "./Modal";
import {Footer} from './Footer';
const Card = ({ book }) => {

    const [show,setShow]=useState(false);
    const [bookItem,setItem]=useState();
    console.log(book)
    return (
        <>
       
            {
                book.map((item) => {
                    let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    console.log("thumb:"+thumbnail)
                    let amount=item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
                    console.log("amount:"+amount)
                    if(thumbnail!= undefined && amount !=undefined)
                    {
                        return (
                            
                            <>  
                            <div className="card" onClick={()=>{setShow(true);setItem(item)}}>
                                <img src={thumbnail} alt="" />
                                <div className="bottom">
                                    <h3 className="title">{item.volumeInfo.title}</h3>
                                    <p className="amount">&#8377;{amount}</p>
                                </div>
                            </div>
                              <Modal show={show} item={bookItem} onClose={()=>setShow(false)}/>
                            </>
                        )
                    }
                    
                })
            }
           

        </>
    )
}
export default Card;