'use server'
function validateEmail(email: string) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email)
}

export default async function createContactDate(_prevState: any, formData: FormData) {
  // formのname属性ごとに値を取り出す事ができる
  const rawFormData = {
    lastname: formData.get('lastname') as string,
    firstname: formData.get('firstname') as string,
    company: formData.get('company') as string,
    email: formData.get('email') as string,
    message: formData.get('message') as string,
  }

  if(!rawFormData.lastname) {
    return {
      status: "error",
      message: "性を入力してください"
    }
  }
  if(!rawFormData.firstname) {
    return {
      status: "error",
      message: "名を入力してください"
    }
  }
  if(!rawFormData.company) {
    return {
      status: "error",
      message: "会社名を入力してください"
    }
  }
  if(!rawFormData.email) {
    return {
      status: "error",
      message: "メールアドレスの形式が誤ってます。"
    }
  }
  if(!validateEmail(rawFormData.email)) {
    return {
      status: "error",
      message: "メッセージを入力してください"
    }
  }
  if(!rawFormData.message) {
    return {
      status: "error",
      message: "メッセージを入力してください"
    }
  }

  return {status: "success", message: 'OK'}
}