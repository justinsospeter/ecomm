import React from "react";
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

function Cart() {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/794062/pexels-photo-794062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/794063/pexels-photo-794063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Long sleeve grafic shirt",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia mollitia, repellat, sunt eligendi fugit magni soluta cupiditate repudiandae aperiam esse dolores assumenda sapiente eaque minima provident facilis iste sed aut in nulla aliquam! Corrupti earum similique molestiae, voluptatum aperiam ea dignissimos alias obcaecati! Ad officia doloremque sunt quos harum illo esse nisi corrupti quibusdam pariatur rerum natus totam libero minima facere optio quidem accusantium eligendi voluptas, laudantium, numquam porro. Et molestias debitis unde totam corporis aspernatur sit id, animi culpa itaque reprehenderit veritatis repudiandae fugit doloribus nisi aut natus libero amet sunt est nemo saepe, magnam vel blanditiis! Enim vel a tempora incidunt itaque temporibus, ex praesentium? Quaerat consequatur provident soluta ipsam dolores dolore, porro quae adipisci rem aliquid tempora ex reiciendis iusto commodi impedit ipsum quis voluptate, deleniti laudantium fugiat at rerum ea cum. Dolor ipsum ad, cupiditate tenetur ullam reprehenderit nisi aspernatur aliquam odit voluptas consequatur. Repellat corporis excepturi sed provident vero perspiciatis enim voluptatibus id quam adipisci dolorem accusantium asperiores odio minima magni in beatae rerum dolor, et temporibus nemo qui! Et aut id, expedita quae perspiciatis animi, fugiat minima tenetur magnam, architecto libero in eaque? Debitis aut veritatis ut animi obcaecati. Totam cumque quae minus perferendis.",
      isNew: true,
      price: 19,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/914668/pexels-photo-914668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Coat",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia mollitia, repellat, sunt eligendi fugit magni soluta cupiditate repudiandae aperiam esse dolores assumenda sapiente eaque minima provident facilis iste sed aut in nulla aliquam! Corrupti earum similique molestiae, voluptatum aperiam ea dignissimos alias obcaecati! Ad officia doloremque sunt quos harum illo esse nisi corrupti quibusdam pariatur rerum natus totam libero minima facere optio quidem accusantium eligendi voluptas, laudantium, numquam porro. Et molestias debitis unde totam corporis aspernatur sit id, animi culpa itaque reprehenderit veritatis repudiandae fugit doloribus nisi aut natus libero amet sunt est nemo saepe, magnam vel blanditiis! Enim vel a tempora incidunt itaque temporibus, ex praesentium? Quaerat consequatur provident soluta ipsam dolores dolore, porro quae adipisci rem aliquid tempora ex reiciendis iusto commodi impedit ipsum quis voluptate, deleniti laudantium fugiat at rerum ea cum. Dolor ipsum ad, cupiditate tenetur ullam reprehenderit nisi aspernatur aliquam odit voluptas consequatur. Repellat corporis excepturi sed provident vero perspiciatis enim voluptatibus id quam adipisci dolorem accusantium asperiores odio minima magni in beatae rerum dolor, et temporibus nemo qui! Et aut id, expedita quae perspiciatis animi, fugiat minima tenetur magnam, architecto libero in eaque? Debitis aut veritatis ut animi obcaecati. Totam cumque quae minus perferendis.",
      isNew: false,
      price: 19,
    },
  ];
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc.substring(0, 100)}</p>
            <div className="price">1 x ${item.price}</div>
          </div>
          <DeleteOutlinedIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$88</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  );
}

export default Cart;
