import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

export type CardData = {
    avatarUrl: String,
    description: String,
}

const Card = () => {
  return (
        <View style={styles.container}>
          <Image style={styles.avatar} source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABU1BMVEUuWHH////7YCDxyaXktpKRXyzrwJwmWHOHXjWUXyglU23oupaNWiUeT2oLSGX7VgCZZzbvxqP6z6ghUGsKR2WVXyb3z6v7VwD7WxTh5umLWCGKUg/7UADCy9LL09np7e9MbYKGmqdmW1Ln3dWcrLf19/h3jp1Wa3lthpfY3uKTpbCwvMVdW1emtL5BZn00XXVRcYZhfY+4w8pOWmB/XTxzXUeJXjNAWWhYW1rFlm/arIerfFGjc0WebT65iWC1pJPMqY2imI3LbVH/8+/+2c39tJ/8kG/9w7L8noL76uRuXExKWWQ6WWp7XUJ1fYHLspuHgn9jcHndu53WpXy0lXqqhmbXx7mVioKTmJmWbmrabkz/cDeScG3jcEd2aW/34Myqb2PzbTttZGy1a1n8g1z449GsZlaaYVnWYz11XmO2YEvnYzH9vqtuXWTmoo74h2H6z8N+wtYCAAAQ50lEQVR4nNWd+1cbtxLHdxew4rV3gfiBcYyBBJtXsIFAcjHgpqEJIUlDEtrbNjShNOnrtveG//+nK+3L+5BW0u4s2N/T03NCbKFPRpoZaUdaRc1crfnm3PrSYntrc6HT7Srdbmdhc6u9uLQ+15xvZf/rlSwbn2+uL252DdM0jJKu68pA+E8lg/xFd3NxvTmfZSeyIpyfW9siBCU/F02YFH9sa20uK8wsCOe3210BtjBnt72dBSU0Yau51jENGTgfpmF2FpvQUxOUsDW3YphStotSmkZ7DhQSkHBuJanxKJBw3YIiXF00TAg8F1JfmwXqGQzhdgcQz1bJ3NwG6RsA4fySATI6w9INYwlgRqYmnG0bRgZ4tgyjnXqwpiScXSlnYb6BdHMlJWMqwtkV8OkHz5iCcD5r+3mM5ZUUyU5iwtbaNdjPYzTXEvucpITrenb+hSZDX79WwtWOea18RGZn9foIF69xgA6km4vXRNhUrneADmQozesgbJdviI+o3M6ccLVbukFAnK52ZWejJOHS9XuYsMylDAlbmzc1A/0yNqViowxhU78JFxqVrss4HAnCpZt0MUGVJUaqOOHWzU/BgcwtcMJW52Z9aFiljuhkFCScHZIpOJCuC66pxAibwzRCXZli/kaIcH14fIxfptByQ4RwYzgBsUvdgCEcgjyGJVMAkU84xIBCKRyXcIjiPE382M8j3BhmCxJxByqHcH3YAfkeNZ5we7iHqK1y/PONWMLmKABixNjQH0c4OwyrQREZcQlcDGFLGbZclCVdiUnDYwgXRgUQIy4kIdwaruVSvErs9SKTcKhTmajYyQ2LcETc6EBMh8ogbI3SELVVYngbBuEIeRlXLG9DJ1wblUjol7EmTrg6apPQlknd8KcS3nRXk6orStgePTdjq0R7MkUhnButSOhXmVIPRyEcPTc6kC5CuDiqY5SotMgnXB3dMUoU9acRws4oD1I8TDs8wvVRjPV+GeFtmxBha7QtSKS3Yglh0zUkKshfGk7egoTzcG4Gd/vB3d2dW3zt7N59oABSmvMxhCtQgxS9ur+Tr+Tz+Qm+8Kcq+Z37ChSjvsImnAXKuNGrXSE2P2Ylv/sKiLE8yyQEMiG6W5HkcyDvwiDqWyzCWaBZuFNJwEdU2YFBDIR9PyGQCR8mMaBjxocgPQgY0UcIY0J0KzkgRoSxojlLJWxDmBDPwRSAeKDeh0D0u9MB4TxIsH+VxoKWIHrhj4kDwiUIQvQiLWEexKH6VlEDQhATomiXi0U5xIcwMzFKCLOoeBSahcX61P7+QbFej2IWi/Xi4cHBVPivKq8gOjJYYniEIHvA6F+VIMRerkqUO9ufwpRF7+eEfK9XIOr1g1auPADoiG9/2CWEWdqju/5pWN/PVcdsVatjubP+/sEEsebhft+iG7dV6B3Ufd/Kg3jTQdR3CWF2ZwKE9T2Xz6UkmrYM59I5jH0fIoyrGfgalxBmXegnLPaDgI5y4xQV9ovQhIoRJATaIw3YkApIJxwvgNtQMecChGCrCo+wfiZFuFeEJnTzGpuwBbSq8NuQysciHB8Ht6FitnyEc0DbM+i+S1jco5uQRVjou0YE8qV4Is75CKF2LwaE9XFJG57VoQmdYaoAelIS8T0bMkzIJCx4NvwX1IaNMSAEK+P2cprivjThgUNYeQBFaBeCK3DhHgs9cAlZ05BN6E5EmKyNyA76FmEHqk3lpUNY7zEA2YRuvKi8BOtNxyWch3ts7xEWZAnHe46rqTwC6421DiaE23Bb+a/cUTotT+jaEGT1ZMnYdghBNmhseZsYLEA2oRvz82CdUfS2Q9iFa1NxCKdYjoZN6KamecDnNF2bEPBxjIIcwoMEhFMOIiAhmYgKXMpGhHjhMIbw0P4uzD6NLZK4YcI1wNIEdCs5oRPygXb2LZXWLMJNwOe+aMcapozVrwhh/ltAQn3TIoQsvkC7yQntdX5+F/KJsEkIIR2NuyOchhBqeWgJuxpFbUI+uneWwGkIoRZPlowmJtwAJbQXF4k8jU0It7QgMjYwIWBGo7iJaQpfCpiWKlZWo8AWPOv6nXoqwmI93a2E4f4sYELInM14fTp9dlhPltPgiF8/3Bt//EYHzduUFtw01JXT22Rru4d7miRrK07tkc3wQm8ZzoxGS4EqT8BepjN924KoVvvMbZoYwuK+u9lfeAuGaM4qcMFCf+dhVPsswJjVU3/wMKMAtutgNBWw5a/x1e0BB9OEMYS+pzWFx2C92lbAwuHybSaVGGGA9jXQODU2FKiVRcCEqQnHoYxYWlMWgf6xdObOTCLCwjJQtxYVoJRGfytmQmHCN0D9aitbQC39AEz4Fczs0beUTZCGlNLXbPeZiBBqIm4qCzANiToaUUIwV7OgAMXWoSXsKECJ99CO0i4Uof4G2NN8DRTF4JZOginNdUcLBY6xNJwRH26UDmvWhvnA1imwmTfYIO1AxUNsxFMhREEbgq1aF6ByGqyOULwQIgRc5G9C5aVYJaGAIUJY+Apu42ELam1BZH4tgChACLfCt9YWUOtDIhFEPiHUssISXh9CPj1UjNfveIw8wsL4G8jHDHiNvwF6dFsvvXmXivDxDwpoh4wNuL02t8nXzFIaAcKzt9Dd2QbcL7WFlpkFX3zCQh8qWXNlNAH3vB112Dv6fBtOwRWg2TJnIZ9b2EJFVmkpl7CwB1mIYclowT57IkIP2Q+AeYQHkIUYlrrQzw8VqxwjqQ17dchCDCLr+SHsM2BM+C279DKesNCvgxZiKM4zYNDn+IpVcMJ8Plqt5nq90IEZH+FE/gUwofUcHzxcvMhTq0ur1bHxvcP6RPGwfzZOoyzs1WFLTRSnFgO0nkaxCk6ixSbW8bUJchBvijyrn9j3H+1yCQ+BS00Up54GtCZKsU8k1HNBvl5/yj2CaFcgkuN5/bMAYuGsDlin78gEr2tT7BMJQSNWe3fcowb1O5U77pHKYj2ASGoxYItpvLo20NWFU68fMGLO45s6vXfv3umhdxYvZELIKnZLTm0iZH0pESH0F9RUDxzCO985B+a+cxCLB75H91Pg5UJefSm0q7HOAtd73vHRPZfne+/08fcOc33PO0hqHbcArGK35NQIQ+dtTr2+a8KCOybr/77n6tT9WbHnANqV+hXYnrh13uBZjV3a5oT9qlu+TdwMVoX8b3Ao9tAyYsEp1K8AO5o2/HkLIlRxKqGnybnffugw+lTwj8W+dZ47gyp2xXfeAvDMDJFbr1+cOMQKH8QPEU4Up7C8D8ESlufhzz1Zehl3c0SYMCBgV+qde1IhdxSx0KMJNiObMD8BdY2SI9/ZNejXyKCYW3iYhPlbsJ0InD8EO0M6EPMeHhZhfge8D74zpODxgqz0GTfxMAgr0Kt7J1Z4Z7nhL7xEu3REOmEFeumreFcOOOfxM7gPEr2gIlIJoe4xC8gI3KkAP0zJQpGGSCOsQC8LiZxBCnwvRlDeuWcOYR54VWgrdC9GNpcHI0rspxA+ygLQu1IY9n6asNCrSOwPE+YfAsd5R5H7acAfX9iKxv4QIXycd+RdSufdEwW8WzPQTiVf94lcEuUpD3VTYkRkhyZEmNkFwggt3x6b9uTf8y4sw14/6xPlrq8MMjdHyKolYhBm9Usp97XB3LlHlV0tRSXM6leW1iiEMPcm0uTWg10jIfXexEzyGkuDirfrItR9L0kAv7+UokBN37UQMu4vhbsJOigjhtDIJp1h3EGbgRH1kqEvvzkdYxCOP/7hLTJAD41aYt4jDGxE3TAXfjydvh2skgoQkids3/24bBqwv5h5FzTYfd5YJbPU3m6pv42FFX3K/Zva2m7rJlxibLLv8wa7eg91F+1XaB1Fqr+jhCfWJ1fXukAJTtyd7CAPaRDq/PT+3G1RgND96PmHPzoQkLH36qd+NwK23s/vtVpNcxuM1CxECHPuR8nXPvyc2pLx70ZI+X4LhD4+Ocf9xHIbvAgbMUJ44RES1c6ffEz3OgjO+y1SLDHw6Pzl0sbDHXXbO8pxCHtH7ifdr9Yuf1lIzhh5tSzUe2bwGumJ5vSRdNPtt3rBIXzn/VvMDL6tPXmbkJH/nplkFwoj9OuH2oBP0yY9wrARcwwTqkcN3/drtfcfEzEKvCsowY5NhE/TGidee6GZGCL0ZqF60gi0UKt9SMAo8r4n+ffKoeX3Ib4AYcidBglzg499MxlqA9vxrTQiBSf6I7m9U4Q+aWE+PEq/8TUYQ+j71FWYkMzHT10pRlPsvWtS785Dv55H+TDhla+9Iybhke9Tx1FCzHj5UQJR9N15MuMUfaLxadrMcaDBKpUwF/jM0xlqS7VPErORCkP7oeg7LFH3Ax1Qm3kabPEiFyHsXQQ/8pzRVO1DRxBR4h2Wgskb6l4yeqXVnodaPKqOTfsJe++OQp94xmxLEFHmPaSC7xFALAviXj2LNHl0MZabtgl74xdhPlX9zG7sgwih3Ltkhd4HjJ4w+6TVPlObPfntAuuE+ubec2ZjWu2JAGI4H+UQCrzTGX1kA2raOaNdtuiOxkHke1TZdzoLvJc7zoQ4XEgTNmJaq73nEcq/lxuv9zkDFV3GdElrRCdavE7iCDWNU9RUWmE2zCbkeBu0HGfCQNompEjSFjTiL7FGZHkZDmH8ahj9EUsYSNtERE1pBvo7npDhZTiE8fun6H084XFMwzQxUhrPiC9jEIObaxKEsQ61G9uhSFLDFSulcQl/ZxOaLDfKJ1TXmVZEv3J6FE5qeGIHfFvsYRrZt5AhZCOi3zmE9JDPVkzAtxtkVWZyAHmE6gYDEf3J+TeXDfkcQK32B92I5ganYR4hK/Ijbo/kAI/iwyHWn1TCMjPSCxOqSzR3E5+yEUmG/G+4hBrtSAEfUIBQ3aAg8qahdEDkhEOs2l9RI5Z5Q1SMUF2PInKioSYdEDnhkBD+J0JY5jgZYUJ1OzIXuzzXp9XkAiJz/TtQJF6Ut0VaFiKMnMLkRUONugaOE3O3wNdiCNCIDfSShOqsHkhSOUmpJblwwZ2G4Ymo63Gpmjyh2ur4F1P8aYidqQwgP1iEJmKpE5NsJyJU1S3fZETcaSgZLgSCRWAimlv8NqUJfYGRsza0JRUu+MGCyIuIAmEwCaHadOtC0E8ChDP/SDT9VKBBrfZf24h6SczHyBOq8wu2T43fonH7I7O6+CJEaK+gjAXRKShPqKpr1khFf4v0R2Z1ITCvNSc1Nekbv0xJEqqr3RJ39etKolmhaahpSCl1qVv3MZIlVNV2mZ92W5JwpkKulKwRy7SnS/GSJ1Sb/LTbkoQzFXOl2sxfMi7GUQJCVf1fQwRRwplyNmls1RqyOyOWEhGqJ+ciWZZ4h3ibNEST57IblLaSEarqPzX+cudSuDWBtLsmE179SkqIRxZ3qAo/uzjijYiEA9RSckL15AuHUXhnP35HH/N9kX1G4FMKQsz4OZYxUK4Qp9gFfq3xOdkEdJSKEP/rxzEKu5qYBX5avtSE2I7PJpkP4C8F22CXA6Qan7ZSE2LG55MMyBnBFhh1JpOTz1PzgRBiHV9SB6ugq6HmbLXGZdL4EBQMIe7ls5moIQV3FKM5W21yBsJ8lqAIsY4/h0eroKsJ5Wx4dH4R9cICAiTEkfv4S9CSl0JfOw/gzXw5lq0BiBUoIdHV8/PGjEs5I9JXrzi4Ntk4fwZoPVvghFgnx880PGAxZkMklhFHU8NDU3t2DDX3/MqCkOjk6vnlTKMhsrX/tNGYuXx+lQUdUVaElk6urvibRq3jzOAsZUpoqaW2nP+wnB8dHbXUI/unmf/+/wPIAwjg4m+5DwAAAABJRU5ErkJggg=='}}></Image>
          <Text style={styles.description} numberOfLines={2} ellipsizeMode={'tail'}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem vero, eaque nisi perspiciatis nobis sunt ratione culpa consequuntur perferendis quia error animi qui itaque harum maiores consectetur. Voluptates, cumque odit.</Text>
        </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: "#fff",
      padding: 20,
      margin: 5,
      borderRadius: 15,
    },
    avatar: {
      width: 50,
      height: 50,
      marginRight:20,
    },
    description: {
      flex: 1,
      fontSize: 18,
      color: "#00bfff",
    }
  });

export default Card