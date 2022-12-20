import React from "react";
import {
  Page,
  Text,
  Image,
  Document,
  StyleSheet,
  View,
  PDFViewer,
  Font
} from "@react-pdf/renderer";

export interface IPDFBlankoNilaiSurat {}

Font.register({ family: 'Times-Roman', src: 'Times-Roman' });

const styles = StyleSheet.create({
  document:{

  },
  page: {
    padding: "1.25cm 2cm",
    // backgroundColor: "red"
  },
  viewer: {
    width: "100%", //the pdf viewer will take up all of the width and height
    height: "100vh"
  },
  headerContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    fontSize: "14px",
    // backgroundColor: "blue",
    fontFamily: "Times-Roman",
    lineHeight: "1px",
    position: "relative"
  },
  header1: {
    textAlign: "center"
  },
  header1Block: {
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "Times-Bold"
  },
  header2: {
    textAlign: "center",
    fontSize: "12px"
  },
  hr: {
    width: "103%",
    marginTop:"-0.2cm",
    marginLeft: "-0.2125cm",
    // width: "100%",
    height: "40px"
  },
  imageHeader:{
    width: "2.8cm",
    // height: "3.72cm",
    position: "absolute",
    top: "0cm"
  }
});

const PDFBlankoNilaiSurat: React.FC<IPDFBlankoNilaiSurat> = ({}) => {
  return (
    <PDFViewer style={styles.viewer}>
      <Document>
        <Page style={styles.page} size="A4">
          <View style={styles.headerContainer}>
            <Text style={styles.header1}>
              KEMENTERIAN PENDIDIKAN, KEBUDAYAAN,
            </Text>
            <Text style={styles.header1}>RISET, DAN TEKNOLOGI</Text>
            <Text style={styles.header1}>UNIVERSITAS HASANUDDIN</Text>
            <Text style={styles.header1Block}>Fakultas Farmasi</Text>
            <Text style={styles.header2}>
              Jalan Perintis Kemerdekaan Km.10, Makassar 90245
            </Text>
            <Text style={styles.header2}>
              Telepon (0411) 588556, Faksimili (0411) 590663
            </Text>
            <Text style={styles.header2}>Laman : farmasi.unhas.ac.id</Text>
            <Image
              style={styles.hr}
              src={window.location.origin + "/images/hr.png"}
            />
            <Text style={styles.header2}>Laman : farmasi.unhas.ac.id</Text>
            <Image
              style={styles.imageHeader}
              src="http://localhost:3000/images/logo-unhas.png"
            />
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};
export default PDFBlankoNilaiSurat;
