import { Dropdown, Input, Space } from "antd";
import {
  Bell,
  User
} from "lucide-react";
export default function SearchBarAndProfile() {
  const { Search } = Input;
  return (
    <div className="flex justify-between p-3 cursor-pointer">
      <div className="flex  p-6 w-[60%]">
        <Search placeholder="Buscar" />
      </div>
      <div className="flex p-6  gap-8">
        <div className="flex p-2 ">
          <Bell />
        </div>
        <div className="flex items-center justify-center bg-blue-300 h-10 w-10 rounded-3xl">
          <Dropdown
            menu={{
              items: [
                {
                  key: "1",
                  label: "Perfil",
                },
                {
                  key: "2",
                  label: "Sair",
                },
              ],
            }}
            placement="bottomRight"
            trigger={["click"]}
          >
            <div onClick={(e) => e.preventDefault()}>
              <Space>
                <User />
              </Space>
            </div>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}
