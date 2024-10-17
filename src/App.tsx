import './App.css'
import { Avatar } from "../src/ui/design-system/avatar/avatar";
import { Button } from "../src/ui/design-system/button/button";
import { Logo } from "../src/ui/design-system/logo/logo";
import { Spinner } from "../src/ui/design-system/spinner/spinner";
import { Typography } from "../src/ui/design-system/typography/typography";
import { RiUser6Fill, RiShieldUserLine, RiNotification2Line,RiFireFill, RiTeamLine } from "react-icons/ri"

function App() {

  return (
    <div className="font-mono flex flex-col items-center justify-center">
      <p>salama va ny tegna</p>
      <div className="flex items-center gap-4 p-10">
        <Spinner size="small"/>
        <Spinner size="medium" />
        <Spinner size="large"/>
      </div>
      
      <div className="flex items-center gap-4 p-10">
        <Logo size="very-small"/>
        <Logo size="small" />
        <Logo size="medium"/>
        <Logo size="large"/>
      </div>
      
      <div className="flex items-center gap-4 p-10">
        <Avatar alt="Avatar user" src="/assets/images/avatar1.png" size="small"/>
        <Avatar alt="Avatar user" src="/assets/images/avatar1.png"/>
        <Avatar alt="Avatar user" src="/assets/images/avatar1.png" size="large"/>
      </div>
      
      
      <div className="flex items-center gap-4 p-10">
        <Button isLoading size="small">Accent</Button> 
        <Button isLoading size="small" icon={{ icon: RiUser6Fill}} iconPosition="left">Accent</Button> 
        <Button isLoading size="small" icon={{ icon: RiShieldUserLine}} iconPosition="right">Accent</Button> 
        <Button isLoading size="small" variant="secondary">Accent</Button> 
        <Button isLoading size="small" variant="outline">Accent</Button> 
        <Button isLoading size="small" variant="disabled" disabled>Accent</Button> 
        <Button isLoading size="small" variant="ico" icon={{ icon: RiUser6Fill}}/>
      </div>
      
      <div className="flex items-center gap-4 p-10">
        <Button size="small">Accent</Button> 
        <Button size="small" icon={{ icon: RiUser6Fill}} iconPosition="left">Accent</Button> 
        <Button size="small" icon={{ icon: RiShieldUserLine}} iconPosition="right">Accent</Button> 
        <Button size="small" variant="secondary">Accent</Button> 
        <Button size="small" variant="outline">Accent</Button> 
        <Button size="small" variant="disabled" disabled>Accent</Button> 
        <Button size="small" variant="ico" iconTheme="accent" icon={{ icon: RiNotification2Line}}/>
        <Button size="small" variant="ico" iconTheme="gray" icon={{ icon: RiNotification2Line}}/>
        <Button size="small" variant="ico" iconTheme="secondary" icon={{ icon: RiNotification2Line}}/>
      </div>
      
      <div className="flex items-center gap-4 p-10">
        <Button>Accent</Button> 
        <Button variant="secondary">Accent</Button> 
        <Button variant="outline">Accent</Button> 
        <Button variant="disabled" disabled>Accent</Button> 
        <Button size="medium" variant="ico" icon={{ icon: RiUser6Fill}}/>
      </div>
      
      <div className="flex items-center gap-4 p-10">
        <Button size="large">Accent</Button> 
        <Button size="large" variant="secondary">Accent</Button> 
        <Button size="large" variant="outline">Accent</Button> 
        <Button size="large" variant="disabled" disabled>Accent</Button> 
        <Button size="small" variant="ico" icon={{ icon: RiUser6Fill}} iconTheme="secondary"/>
        <Button size="medium" variant="ico" icon={{ icon: RiTeamLine}} iconTheme="gray"/>
        <Button size="large" variant="ico" icon={{ icon: RiFireFill}}/>
      </div>
      
      
      <div className="space-y-5">
        <Typography >
          OVY Party
        </Typography>
        <Typography theme="primary" variant="body-lg" component="h1">
          Ovy  Party
        </Typography>
        <Typography theme="secondary" variant="lead" component="div">
          Coders Monkeys 
        </Typography>
        <Typography variant="body-sm" component="div">
          Coders Monkeys 
        </Typography>
        <Typography variant="caption4" component="div">
          Coders Monkeys 
        </Typography>
        <Typography variant="body-base" weight="medium" component="div">
          Coders Monkeys 
        </Typography>
      </div>
    
  </div>
  )
}

export default App
