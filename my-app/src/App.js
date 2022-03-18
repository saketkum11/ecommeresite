import "./App.css";
import logo from "./logo.png";

function App() {
  return (
    <div className="App">
       <nav class=" bg-green-7 text-color-0 pd-5 position-fixed t-0">
            <div class="wt-80  m-auto  flex items-center">
                <div class="text-xm">
                    <a href="/index.html" class="text-dec text-color-0 text-m">Farmgistic</a>
                </div>
                <div class="flex items-center justify-even m-lf">
                    <input type="search" placeholder="search"
                        class="pd-y-3 pd-x-5 rounded-L border-none text-center outline-none"/>
                    <i class="fa-solid fa-magnifying-glass bg-black-0 text-color-9 rounded-L pd-3 text-xm"></i>
                </div>
                <div class="m-lf">


                    <ul class="style-none flex items-center">
                        <li class="pd-x-4 flex  items-center position-rel justify-center">
                            <a href="/component/wishlist/wishlist.html" target="_blank" class="text-dec text-color-0 ">
                                <i class="fa-solid  fa-heart text-color-0"></i>
                            </a>

                            <span
                                class=" text-s position-ab p-t-n-2 flex items-center justify-center bg-red-7 wt-fixed-5 h-fixed-5 rounded-full p-r-0">0</span>
                        </li>

                        <li class=" pd-x-4 flex  items-center position-rel justify-center">
                            <a href="/component/cart/cart.html" target="_blank" class="text-dec text-color-0 ">
                                <i class="fa-solid fa-cart-shopping"></i>
                            </a>
                            <span
                                class=" text-s position-ab p-t-n-2 flex items-center justify-center bg-red-7 wt-fixed-5 h-fixed-5 rounded-full p-r-0">0</span>


                        </li>
                        <li class="pd-x-4">
                            <small>cart</small>
                        </li>

                    </ul>

                </div>
            </div>

        </nav>
    </div>
  );
}

export default App;
