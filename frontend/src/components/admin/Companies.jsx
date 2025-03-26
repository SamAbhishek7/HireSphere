import { Input } from "../ui/input"
import Navbar from "../shared/Navbar"
import { Button } from "../ui/button"
import CompaniesTable from "./CompaniesTable";
import { useNavigate } from "react-router-dom";
import useGetAllCompanies from "@/hooks/useGetAllCompanies";
const Companies = () => {
  useGetAllCompanies();
  const navigate = useNavigate();
  return (
    <div>
    <Navbar/>
    <div className="max-w-6xl mx-auto my-10">
      <div className="my-5 flex items-center justify-between">
      <Input placeholder= "filter by name" className="w-fit"  />
  <Button onClick = {()=>
navigate('/admin/companies/create')
  }>New Company</Button>
  
  
  </div>
<CompaniesTable/>
    </div>
    </div>
  )
}
export default Companies