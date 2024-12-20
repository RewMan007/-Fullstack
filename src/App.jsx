
import Navbar from "./components/navbar";
import Form from "./components/Form";

export default function App() {
  return (
    <div className="">
      {/* <Navbar /> */}
      {/* ทำคอนเทรนเนอร์ ขนาดเล็ก padding x2 ใหญ่มาหน่อย px-auto   */}
      <section className="container px-2 sm:px-auto">
        {/* ทำคอนเทรนเนอร์ ขนาดเล็ก padding x2 ใหญ่มาหน่อย px-auto   */}
      <div className="text-center mb-16 place-content-center mt-5"> {/* วงตรงกลาง */}
        <h2 className="text-4xl font-bold mb-4">ช่วยด้วยครับ</h2> {/* จัดอักษร   */}
        <p className="flex place-content-center "> {/* flex วางไส้ตรงกลาง   */}
          ทำไม่ทันครับ ช่วยด้วย
        </p>        
        <p className="flex place-content-center"> {/* flex วางไส้ตรงกลาง   */}
          <Form />
        </p>
      </div>
    </section>

    </div>
  );
}
