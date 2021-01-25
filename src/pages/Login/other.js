const response = reqLogin(username, password);
      const result = response.data;
      if (result.status === 0){
        message.success('登陆成功')
        this.props.history.replace('/')
      } else {
        message.error(result.msg)
      }