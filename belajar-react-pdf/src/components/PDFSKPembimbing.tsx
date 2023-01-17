import React from 'react';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  Image,
} from '@react-pdf/renderer';
import KopSurat from './KopSurat';

// Create styles

// Create Document Component
const PDFSKPembimbing = () => (
  <PDFViewer style={styles.viewer}>
    <Document title="PDF Sifa">
      <Page size="A4" style={styles.page} >
        <KopSurat />
        <View style={styles.content}>
          <View style={styles.contentTitle}>
            <Text style={styles.contentTitleText}>SURAT PENUGASAN</Text>
            <Text  >
              NOMOR : 1640/UN4.11.1/TD.06/2022
            </Text>
          </View>

          <View style={styles.students}>
            <Text style={styles.headerTextContent}>
              Dalam rangka penyusunan skripsi sarjana Fakultas Farmasi
              Universitas Hasanuddin dan berdasarkan SK. Rektor Universitas
              Hasanuddin, nomor 36620/UN4.1/PP.39/2017 tanggal 14 Desember 2017,
              dengan ini menugaskan mereka sebagai tim pembimbing, dengan
              susunan sebagai berikut :
            </Text>

            <View style={styles.biodata}>
              <View style={styles.studentData}>
                <Text style={styles.data}>Pembimbing Utama</Text>
                {/* <Text style={styles.data}>Program Studi</Text> */}
                <Text style={styles.data}>Pembimbing Pendamping</Text>
              </View>
              <View style={styles.studentDataValue}>
                <Text style={styles.data}>
                  : Dr.Eng. Armin Lawi, S.Si., M.Eng.
                </Text>
                <Text style={styles.data}>
                  : A. Muh. Amil Siddik, S.Si.,M.Si
                </Text>
                {/* <Text style={styles.data}></Text> */}
              </View>
            </View>

            <Text style={styles.headerTextContent}>
              Untuk membimbing mahasiswa yaitu :{' '}
            </Text>
            <View style={styles.biodata}>
              <View style={styles.studentData}>
                <Text style={styles.data}>Nama</Text>
                <Text style={styles.data}>Nomor Pokok</Text>
                <Text style={styles.data}>Program Studi</Text>
                <Text style={styles.data}>Departemen</Text>
              </View>
              <View style={styles.studentDataValue}>
                <Text style={styles.data}>: MUHAMMAD ISLAHFARI WAHID</Text>
                <Text style={styles.data}>: H071181501</Text>
                <Text style={styles.data}> : Sistem Informasi</Text>
                <Text style={styles.data}>
                  : Isolasi dan Skrining Bakteri Simbion Dari Bintang laut
                </Text>
              </View>
            </View>

            <View>
              <Text style={styles.footerTextContent}>
                Demikian surat penugasan ini kami berikan untuk dilaksanakan
                sebaik-baiknya dengan ketentuan apabila dikemudian hari terdapat
                kekeliruan akan diadakan perubahan sebagaimana mestinnya
                mestinya.
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.footerContentLeft}>
            <Text style={styles.footerBottomText}>Tebusan : </Text>
            <Text style={styles.footerBottomText}>
              - Ketua Program Studi S1.
            </Text>
            <Text style={styles.footerBottomText}>Arsip</Text>
          </View>
          <View  >
            <View>
              <View>
                <View>
                  <Text style={styles.footerBottomText}>
                    Dikeluarkan di Makassar
                  </Text>
                  <Text style={styles.footerBottomText}>
                    Tanggal 10 Oktober 2022
                  </Text>
                </View>
              </View>
              <Text style={styles.footerBottomText}>Dekan</Text>
            </View>
            <View>
              <Image
                style={styles.ttdImage}
                src={`${window.location.origin}/images/ttd_sifa.jpg`}
              />
            </View>
            <View style={styles.footerTextContent}>
              <Text>Dr. Hendra, S.Si, M.Kom</Text>
              <Text>NIP 197601022002121001</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  </PDFViewer>
);

const styles = StyleSheet.create({
  viewer: {
    width: '100vw',
    height: '100vh',
  },
  page: {
    paddingHorizontal: 52,
    paddingVertical: 30,
  },

  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  kopSurat: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
  },
  images: {
    width: 55,
    height: 65,
  },
  location: {
    fontSize: 10,
    position: 'absolute',
    top: 10,
    bottom: 10,
    right: 0,
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    fontFamily: 'Times-Roman',
    fontSize: 13.5,
    width: '100%',
    paddingLeft: 16,
  },
  name: {
    marginBottom: 3,
  },
  faculty: {
    textTransform: 'uppercase',
    marginBottom: 3,
    fontFamily: 'Helvetica-Bold',
  },
  university: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    marginBottom: 3,
    fontFamily: 'Helvetica-Bold',
  },
  line: {
    width: '100%',
    height: '3px',
    backgroundColor: 'black',
  },
  contentTitle: {
    textAlign: 'center',
    fontSize: 10,
    marginBottom: 16,
    fontFamily: 'Helvetica-Bold',
  },
  contentTitleText: {
    fontSize: 12,
  },
  data: {
    fontSize: 11,
    fontWeight: 'bold',
    paddingLeft: 12,
    marginBottom: 10,
  },
  headerTextContent: {
    fontSize: 11,
    marginVertical: 12,
    textAlign: 'justify',
    lineHeight: '1.75px',
    letterSpacing: '0.25px',
  },
  headerTextContainer: {
    flexDirection: 'row',
  },
  headerBold: {
    fontFamily: 'Helvetica-Bold',
  },
  footerTextContent: {
    fontSize: 11,
    textAlign: 'justify',
    marginTop: 16,
    lineHeight: '1.75px',
    letterSpacing: '0.25px',
    fontFamily: 'Helvetica',
  },
  address: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
  },
  students: {
    display: 'flex',
    flexDirection: 'column',
  },
  biodata: {
    flexDirection: 'row',
  },
  studentData: {
    width: '30%',
    fontFamily: 'Helvetica',
  },
  studentDataValue: {
    width: '70%',
  },

  footer: {
    flexDirection: 'row',
    marginTop: 50,
    justifyContent: 'flex-end',
  },

  footerContentLeft: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '40%',
  },
  footerBottomText: {
    fontSize: 11,
    fontFamily: 'Helvetica',
  },
  barcodeImage: {
    width: 90,
    height: 90,
  },
  ttdImage: {
    width: 45,
    height: 45,
  },
});

export default PDFSKPembimbing;