import {
  Document,
  Text,
  Page,
  StyleSheet,
  Image,
  View
} from '@react-pdf/renderer'



function PDFComponent({ subs, serviciosMapeados}) {
  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '20px',
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
      width: '100%',
    },
    titulo: {
      borderBottom: '2px solid black',
      width: '70%',
      textAlign: 'center',
      fontSize: 50,
      padding: 20,
    },
    subtitulo: {
      borderBottom: '2px solid black',
      width: '70%',
      textAlign: 'center',
      fontSize: 30,
      padding: 10,
    },
    subscripciones: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      borderBottom: '2px solid black',
      width: '70%',
    },
    lista: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'left',
      justifyContent: 'flex-start',
      paddingBottom: 20,
      gap: 20,
    },
    listaTitulo: {
      margin: 0,
      padding: 0,
      fontSize: 25,
    },
    elementos: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      gap: 10,
    },
    elemento: {
      borderBottom: '2px dashed black',
      fontSize: 20,
    },
    servicios: {
      width: '70%',
    },
    precios: {
      width: '30%',
    },
  })
  return (
    <Document>
    <Page style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Subscription Tracker</Text>
        <Text style={styles.subtitulo}>Recibo de Suscripciones</Text>

        <View style={[styles.subscripciones]}>
          <View style={[styles.servicios, styles.lista]}>
            <Text style={styles.listaTitulo}>Servicio</Text>
            <View style={styles.elementos}>
              {subs.map((sub, index) => (
                <Text key={index} style={styles.elemento}>
                  {`${index + 1}.Servicio: ${serviciosMapeados[sub.servicio]}.`}
                </Text>
              ))}

            </View>
          </View>

          <View style={[styles.precios, styles.lista]}>
            <Text style={styles.listaTitulo}>Precio</Text>
            <View style={styles.elementos}>
              {subs.map((sub, index) => (
                <Text key={index} style={styles.elemento}>
                  {`$${sub.valor}.`}
                </Text>
              ))}
            </View>
          </View>
        </View>

      </View>
    </Page>
  </Document>
  )
}
export default PDFComponent