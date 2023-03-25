import { Modal } from "@mantine/core";
import { useState } from "react";
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
  const [opened, setOpened] = useState(true);
  return (
    <>
      <PDFBlankoNilaiSurat
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
      />
      <PDFSKIzinUjianSidang
      letterDate={new Date()}
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
      />
      <PDFBebasLab
        name={"Muh. Yusuf Syam"}
        nim={"H071191044"}
        faculty={"Farmasi"}
        labHead={"Abdul Rahim, S.Si, M.Si, Ph.D, Apt. Devon"}
        labHeadNip={"8281970019283100"}
        letterDate={new Date()}
        letterNumber={"19/J/J04.01/PP.12/2022"}
      />
      <PDFSKPembimbing
        name={"Muh. Yusuf Syam"}
        nim={"H071191044"}
        dean={"Abdul Rahim, S.Si, M.Si, Ph.D, Apt. Devon"}
        deanNip={"8281970019283100"}
        letterDate={new Date()}
        letterNumber={"19/J/J04.01/PP.12/2022"}
        department={"Matematika"}
        mainMentor={"A"}
        sideMentor={"A"}
        studyProgram={"Ilmu Komputer"}
      />
      <PDFSKPenguji
        name={"Muh. Yusuf Syam"}
        nim={"H071191044"}
        dean={"Abdul Rahim, S.Si, M.Si, Ph.D, Apt. Devon"}
        deanNip={"8281970019283100"}
        letterDate={new Date()}
        letterNumber={"19/J/J04.01/PP.12/2022"}
        department={"Matematika"}
        chairman={"A"}
        secretary={"A"}
        studyProgram={"Ilmu Komputer"}
        member={['a', 'b', 'c']}
      />
      <PDFSuratKesediaan
        name={"Muh. Yusuf Syam"}
        nim={"H071191044"}
        letterDate={new Date()}
        seminarDate={new Date()}
        seminarTimeStart={new Date()} 
        seminarTimeEnd={new Date()}
        proposalTitle={"RANCANG BANGUN SISTEM INFORMASI APLIKASI PERPUSTAKAAN UNIVERSITAS HASANUDDIN BERBASIS ANDROID"}
        place={"Hybrid (via Zoom)"}
        firstExaminer={"A"}
        secondExaminer={"A"}
        thirdExaminer={"A"}
        fourthExaminer={"A"}
     />
      <PDFBeritaAcaraKeteranganSeminar
        name={"Muh. Yusuf Syam"}
        nim={"H071191044"}
        letterDate={new Date()}
        proposalTitle={"RANCANG BANGUN SISTEM INFORMASI APLIKASI PERPUSTAKAAN UNIVERSITAS HASANUDDIN BERBASIS ANDROID"}
        firstExaminer={"A"}
        secondExaminer={"A"}
        thirdExaminer={"A"}
        fourthxaminer={"A"}
        firstExaminerScore={88}
        secondExaminerScore={88}
        thirdExaminerScore={88}
        fourthxaminerScore={88}
        dean={"Abdul Rahim, S.Si, M.Si, Ph.D, Apt. Devon"}
        deanNip={"8281970019283100"}
        mainMentor={"A"}
        sideMentor={"A"}
        seminarDate={new Date()}
        seminarTimeStart={new Date()} 
        seminarTimeEnd={new Date()}
        studyProgram={"Sistem Informasi"}
        isPassed={true}
      />
      <PDFUndanganSeminar
        name={"Muh. Yusuf Syam"}
        nim={"H071191044"}
        letterDate={new Date()}
        proposalTitle={
          "RANCANG BANGUN SISTEM INFORMASI APLIKASI PERPUSTAKAAN UNIVERSITAS HASANUDDIN BERBASIS ANDROID"
        }
        firstExaminer={"A"}
        secondExaminer={"A"}
        seminarCoordinator={"Abdul Rahim, S.Si, M.Si, Ph.D, Apt. Devon"}
        seminarCoordinatorNip={"8281970019283100"}
        mainMentor={"A"}
        sideMentor={"A"}
        seminarDate={new Date()}
        seminarTimeStart={new Date()}
        seminarTimeEnd={new Date()}
        mainMentorNip={"8281970019283100"}
        sideMentorNip={"8281970019283100"}
        firstExaminerNip={"8281970019283100"}
        secondExaminerNip={"8281970019283100"}
        letterNumber={"19/J/J04.01/PP.12/2022"}
        department={"Matematika"}
        studyProgram={"Ilmu Komputer"}
        onlinePlace={
          "https://telkomsel.zoom.us/j/96874722331?pwd=cDVrVVBhVFBjY1d4NHpSRlEvam5OUT09"
        }
        place={"Lt. 2 Farmasi"}
      />
    </>
  );
}

export default App;
