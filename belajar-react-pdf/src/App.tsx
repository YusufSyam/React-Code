import "./App.css";
import PDFBebasLab from "./components/PDFBebasLab";
import PDFBeritaAcaraKeteranganSeminar from "./components/PDFBeritaAcaraKeteranganSeminar";
import PDFBlankoNilaiSurat from "./components/PDFBlankoNilaiSurat";
import PDFSKIzinUjianSidang from "./components/PDFSKIzinUjianSidang";
import PDFSKPembimbing from "./components/PDFSKPembimbing";
import PDFSKPenguji from "./components/PDFSKPenguji";
import PDFSuratKesediaan from "./components/PDFSuratKesediaan";
import PDFUndanganSeminar from "./components/PDFUndanganSeminar";

function App() {
  return (
    <>
      {/* <PDFBlankoNilaiSurat /> */}
      {/* <PDFSKIzinUjianSidang /> */}
      {/* <PDFBebasLab /> */}
      {/* <PDFSKPembimbing /> */}
      {/* <PDFSKPenguji /> */}
      {/* <PDFSuratKesediaan /> */}
      <PDFBeritaAcaraKeteranganSeminar />
      {/* <PDFUndanganSeminar /> */}
    </>
  );
}

export default App;
