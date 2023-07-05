import people from "../service/people"
import '../App.css';

const SideNav = (props: any) => {
    
    return <>
    <nav className="sideNav">
        <div className="inlineCenter">GreatSword - 1</div>
        {
            people().map( (item:any) => {
                return<> 
                <div className="inlineCenter">
                    <img className="profilePic" src={item.profilePic} alt="" />
                    {item.name}
                </div>
                </>
            })
        }
    </nav>
    </>    
}

export default SideNav