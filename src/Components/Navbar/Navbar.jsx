import '../Navbar/Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <img src="https://images.unsplash.com/photo-1610385983592-bd3cb040d9f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGlhcnl8ZW58MHx8MHx8fDA%3D" alt="Places-Diary" />
      <ul>
        <li>
          <a href="https://devkartik.me">My Portfolio</a>
        </li>
        <li>
          <a href="https://github.com/kartik1112/places-diary">Project Code</a>
        </li>
        <li>
          <a href="https://linkedin.com/in/kartikbuttan">LinkedIn</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
