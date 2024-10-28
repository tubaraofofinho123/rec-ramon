import { Text, View, StyleSheet } from 'react-native'
import { LinkListacidades } from 'expo-router'
import { useState, useContext } from 'react'
import { Picker } from '@react-native-picker/picker'
import { AppContext } from '../scripts/appContext'

export default telaInicio = () => {
    const TelaInicio = () => {
        const { cidade, setCidade } = useContext(AppContext);
        const [listaCidades, setListaCidades] = useState([]);
    
        useEffect(() => {
            fetch("cidades")
                .then(resposta => resposta.json())
                .then(dados => setListaCidades(dados.results))
                .catch(error => console.log("aconteceu um erro", error));
        }, []);



    return  (
            <View style={styles.container}>
                <Text>Selecione a cidade</Text>
                <Picker
                    style={styles.picker}
                    selectedValue={cidade}
                    onValueChange={(itemValue) => setCidade(itemValue)}
                >
                    {listaCidades.map((item) => (
                        <Picker.Item key={item.name} label={item.name} value={item.name} />
                    ))}
                </Picker>
    
                {cidade && (
                <View>
                    <Text>Você selecionou a cidade: {cidade}</Text>
                    <Link href="/proximaTela">
                        <Button title="Ir para a próxima tela" />
                        <Picker style={styles.Picker} selectedValue={cidade} onValueChange={(cidade) => setCidade(cidade)}>
                {listaCidades.map((item) => (
                    <Picker.Item key={item.name} label={item.name} value={item.name} />
                ))}
                        </Picker>
                    </Link>
                </View>
            )}
        </View>
    );
    

            
        
    
}

const cidades = [
    { label: 'Aracaju', value: 'Aracaju' },
    { label: 'Belém', value: 'Belém' },
    { label: 'Belo Horizonte', value: 'Belo Horizonte' },
    { label: 'Boa Vista', value: 'Boa Vista' },
    { label: 'Brasília', value: 'Brasília' },
    { label: 'Campo Grande', value: 'Campo Grande' },
    { label: 'Cuiabá', value: 'Cuiabá' },
    { label: 'Curitiba', value: 'Curitiba' },
    { label: 'Florianópolis', value: 'Florianópolis' },
    { label: 'Fortaleza', value: 'Fortaleza' },
    { label: 'Goiânia', value: 'Goiânia' },
    { label: 'João Pessoa', value: 'João Pessoa' },
    { label: 'Macapá', value: 'Macapá' },
    { label: 'Maceió', value: 'Maceió' },
    { label: 'Manaus', value: 'Manaus' },
    { label: 'Natal', value: 'Natal' },
    { label: 'Palmas', value: 'Palmas' },
    { label: 'Porto Alegre', value: 'Porto Alegre' },
    { label: 'Porto Velho', value: 'Porto Velho' },
    { label: 'Recife', value: 'Recife' },
    { label: 'Rio Branco', value: 'Rio Branco' },
    { label: 'Rio de Janeiro', value: 'Rio de Janeiro' },
    { label: 'Salvador', value: 'Salvador' },
    { label: 'São Luís', value: 'São Luís' },
    { label: 'São Paulo', value: 'São Paulo' },
    { label: 'Teresina', value: 'Teresina' },
    { label: 'Vitória', value: 'Vitória' },
];

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 400,
        height: '100%',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%'
    }
})

const listaCidades = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={cidades}
                renderItem={({ item }) => <LinkListacidades imagem={item.imagem} 
                caminho={item.caminho} nome={item.nome} data={item.data} />}
                keyExtractor={item => item.id}
                style={styles.lista}
            />

        </View>
    )
}


}


