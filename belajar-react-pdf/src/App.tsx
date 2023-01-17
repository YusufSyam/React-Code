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
      {/* <PDFBlankoNilaiSurat
        department="Sistem Informasi"
        letterDate={new Date()}
        mainMentorNim={"H071191044"}
        name={"Muh. Yusuf Syam"}
        nim={"H071191044"}
        proposalTitle={"CARA BERTERNAK LELE"}
        score={89}
        season={"2022/2023"}
        sideMentorNim={"1341193921900182"}
        whatSeason={"Akhir"}
      /> */}
      {/* <PDFSKIzinUjianSidang
        name={"Muh. Yusuf Syam"}
        nim={"H071191044"}
        department="Farmasi"
        faculty={"Farmasi"}
        checkList={[
          true,
          false,
          true,
          false,
          true,
          false,
          true,
          false,
          true,
          false,
          true,
          false,
          true,
          false,
          true,
          false,
          true,
          false,
          true
        ]}
        firstViceDean={"Abdul Rahim, S.Si, M.Si, Ph.D, Apt. Devon"}
        firstViceDeanNip={"8281970019283100"}
      /> */}
      {/* <PDFBebasLab
        name={"Muh. Yusuf Syam"}
        nim={"H071191044"}
        faculty={"Farmasi"}
        labHead={"Abdul Rahim, S.Si, M.Si, Ph.D, Apt. Devon"}
        labHeadNip={"8281970019283100"}
        letterDate={new Date()}
        letterNumber={"19/J/J04.01/PP.12/2022"}
      /> */}
      {/* <PDFSKPembimbing /> */}
      {/* <PDFSKPenguji /> */}
      {/* <PDFSuratKesediaan /> */}
      {/* <PDFBeritaAcaraKeteranganSeminar /> */}
      {/* <PDFUndanganSeminar /> */}
    </>
  );
}

export default App;
