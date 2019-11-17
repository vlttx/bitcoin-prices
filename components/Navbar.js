import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
      <style jsx>
        {`
          ul {
            background: #333;
            color: #fff;
            list-style: none;
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
          }
          ul li {
            font-size: 18px;
            margin-right: 20px;
          }
          a {
            color: #fff;
            text-decoration: none;
          }
        `}
      </style>
    </div>
  );
};

export default Navbar;
