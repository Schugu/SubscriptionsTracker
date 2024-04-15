import {
  Document,
  Text,
  Page,
  StyleSheet,
  Image,
  Link,
  View
} from '@react-pdf/renderer'



function PDFComponent({
  subs,
  serviciosMapeados,
  valorInput,
  valorDisp,
  valorGastado
}) {
  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '20px',
      margin: '0',
      padding: '0',
      boxSizing: 'border-box',
      width: '100%',
    },
    titulo: {
      borderBottom: '2px solid black',
      width: '70%',
      textAlign: 'center',
      fontSize: '40px',
      padding: '20px',
      margin: '0',
    },
    section: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '10px',
      width: '70%',
      borderBottom: '2px solid black',
      boxSizing: 'border-box',
    },
    subtitulo: {
      margin: '0',
      padding: '10px',
      textAlign: 'center',
      fontSize: '25px',
      borderBottom: '2px solid black',
      width: '70%',
    },
    elementosBalance: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '30px',
      fontSize: '20px',
      width: '100%',
      padding: '20px',
      boxSizing: 'border-box',
    },
    elementosSubscripciones: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      padding: '20px',
      boxSizing: 'border-box',
    },
    lista: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'left',
      justifyContent: 'flex-start',
      gap: '20px',
    },
    listaTitulo: {
      margin: '0',
      padding: '0',
      fontSize: '25px',
    },
    elementos: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      gap: '10px',
    },
    elemento: {
      borderBottom: '2px dashed black',
      fontSize: '20px',
    },
    servicios: {
      width: '70%',
    },
    precios: {
      width: '30%',
    },
    parrafo: {
      textAlign: 'center',
    },
  });

  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.container}>
          <Text style={styles.titulo}>Subscription Tracker</Text>

          <View style={styles.section}>
            <Text style={styles.subtitulo}>Balance:</Text>
            <View style={styles.elementosBalance}>
              <Text>Valor Ingresado: ${valorInput}</Text>
              <Text>Valor Disponible: ${valorDisp}</Text>
              <Text>Valor Gastado: ${valorGastado}</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.subtitulo}>Recibo de Suscripciones</Text>
            <View style={styles.elementosSubscripciones}>
              <View style={[styles.servicios, styles.lista]}>
                <Text style={styles.listaTitulo}>Servicio</Text>
                <View style={styles.elementos}>
                  {subs.map((sub, index) => (
                    <Text key={index} style={styles.elemento}>
                      {`${index+1}.Servicio: ${serviciosMapeados[sub.servicio]}.`}
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

          <View style={styles.section}>
            <Text style={styles.subtitulo}>Agradecimientos:</Text>
            <Text style={styles.parrafo}>
              Gracias por usar esta aplicación. Derechos recervados del codigo de la
              aplicación a Gracias por usar esta aplicación. Derechos reservados del código de la 
          aplicación a{' '}
          <Link src="https://github.com/Schugu" style={{ color: 'blue' }}>
            Leandro Daniel Schugurensky
          </Link>.
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default PDFComponent