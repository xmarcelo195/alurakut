import styled from 'styled-components'
import MainGrid from '../src/components/mainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu } from '../src/lib/AlurakutCommons'

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `

function ProfileSideBar(props) {
  return (
    <Box >
      <img src= {`https://github.com/${props.githubUser}.png`}/>
    </Box>
  )
}
export default function Home() {
  const githubUser = "xmarcelo195"

  return (
    <>
    <AlurakutMenu githubUser={githubUser}/>
    <MainGrid>
      <div style={{gridArea: "profileArea"}}>
        <ProfileSideBar githubUser={githubUser}/>
      </div>
      <div style={{gridArea: "welcomeArea"}}>
        <Box>
          Bem vindo
        </Box>
      </div>
      <div style={{gridArea: "relationsArea"}}>
        <Box >
          Comunidade
        </Box>
        <Box >
          Comunidade 2
        </Box>
      </div>
    </MainGrid>
    </>
  )
}
