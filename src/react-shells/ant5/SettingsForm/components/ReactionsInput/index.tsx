import { Button, Form, Input, Modal, Switch } from "antd"
import { useToolsTranslate } from "core-react/hooks/useToolsTranslate";
import { memo, useCallback, useEffect, useState } from "react"
import { IControllerMeta } from "runner/reaction/interfaces/metas";
import { ReactionsEditor } from "./ReactionsEditor";

export const ReactionsInput = memo((props: {
  title: string,
  value?: IControllerMeta,
  onChange?: (value?: IControllerMeta) => void,
}) => {
  const { title, value, onChange, ...other } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const t = useToolsTranslate()

  const showModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleCancel = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  useEffect(() => {

  }, [])

  return (
    <div>
      <Form.Item
        label={title}
      >
        <Switch />
      </Form.Item>
      {
        value?.id &&
        <>
          <Form.Item
            label={t("controllerName")}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label={t("config")}
          >
            <Button {...other} onClick={showModal}>{t("configController")}</Button>
          </Form.Item>

          <Modal
            title={`${t("configController")} - 对话框`}
            open={isModalOpen}
            cancelText={t("cancel")}
            okText={t("confirm")}
            onCancel={handleCancel}
            width={"calc(100vw - 40px)"}
            style={{
              transform: 'scale(1)',
            }}
            getContainer={false}
            centered
            destroyOnClose
          >
            <ReactionsEditor />
          </Modal>
        </>
      }

    </div>

  )
})