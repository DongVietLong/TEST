import './App.css'

function Group ({src}){
    return (
        <div className="Group">
            <h4 className="title">Lorem ipsum dolor sit amet</h4>
            <div className="block_group">
                <img src={src} alt="" className="img" />
                <p className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at 
                </p>
            </div>
            <div className="content_footer">
                <p className="footer">
                ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.
                </p>
            </div>
        </div>
    )
}
export default Group