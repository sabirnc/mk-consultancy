import { useState } from "react"
import "../css/services.css"

export const Service = ({name}) => {
    const [isTruncate , setIsTruncate] = useState(false)

    const toggleReadMore = () => {
        setIsTruncate( prev => !prev )
    }

    return (
        <div className="service">
          <div className="head-top">
            <div className="service-icon-container">
              <span class="material-symbols-outlined icon">payments</span>
          </div>
            <h3 className="service-head">{name}</h3>
          </div>
          <div className="service-text-container">    
                {
                    isTruncate ? (
                        <p className="service-text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
                        quas nostrum optio provident similique. Eius illo possimus cum est
                        earum error rem perspiciatis, quibusdam a ut doloremque ad sed
                        fuga quia quo quisquam officiis voluptatem eligendi corporis
                        rerum, tenetur natus id! Itaque molestiae atque quasi sit culpa?
                        Culpa quod obcaecati odio reprehenderit consectetur unde modi
                        atque consequuntur in quidem delectus nesciunt esse perspiciatis,
                        ipsam minus vitae cumque molestiae. Et perferendis soluta velit
                        nihil veritatis, reprehenderit eos dolorum illo in deleniti. Nemo,
                        officiis autem repellendus quis tenetur eligendi inventore, sed
                        aspernatur ea sit placeat pariatur cupiditate, excepturi assumenda
                        rerum cumque quia?
                        <p className="read-more" onClick={() => toggleReadMore()}>show less</p>
                    </p>
                
                    ) : (
                        <p className="service-text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
                        quas nostrum optio provident similique. Eius illo possimus cum est
                        earum error rem perspiciatis, quibusdam a ut doloremque ad sed
                        fuga quia quo quisquam officiis voluptatem eligendi corporis
                        <p className="read-more" onClick={() => toggleReadMore()}>Read more</p>
                    </p>
                    )
                }
          </div>
        </div>
    )
}