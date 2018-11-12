    $(document).ready(function(){
            $("#ReqOtp").click(function(event){
                event.preventDefault();
                var msisdn=jQuery('input[name="msisdn"]').val();

                $.ajax({
                    type:'POST',
                    url:'controller.php',
                    data:{msisdn:msisdn},
                    error:function(xhr,ajaxOptions,thrownError){$('#response').html(xhr);},
                    cache:false,
                    beforeSend:function(){
                        $(".form-control").attr("disabled", true);
                        $('#login_result').html('Meminta Request ....');
                        $('#ReqOtp').html('Loading <i class="fa fa-spinner fa-spin"></i>');
                    },
                    success:function(s){
                        $(".form-control").attr("disabled", false);
                        $('#login_result').html(s);
                        $('#ReqOtp').html('Req OTP');
                    }
                });
                return false;
            });
            $("#login").click(function(event){
                event.preventDefault();
                var msisdn=jQuery('input[name="msisdn"]').val(),
                    otp=jQuery('input[name="otp"]').val();
                $.ajax({
                    type:'POST',
                    url:'controller.php',
                    data:{msisdn:msisdn,otp:otp},
                    error:function(xhr,ajaxOptions,thrownError){$('#response').html(xhr);},
                    cache:false,
                    beforeSend:function(){
                        $(".form-control").attr("disabled", true);
                        $('#login_result').html('Meminta Request ....');
                        $('#login').html('Loading <i class="fa fa-spinner fa-spin"></i>');
                    },
                    success:function(s){
                        $(".form-control").attr("disabled", false);
                        $('#login_result').html(s);
                        $('#login').html('Login');
                    }
                });
                return false;
            });
            $("#buy").click(function(event){
                event.preventDefault();
                var _aptget_id = jQuery('input[name="_aptget_id"]').val();
                $.ajax({
                    type:'POST',
                    url:'controller.php',
                    data:{_aptget_id:_aptget_id},
                    error:function(xhr,ajaxOptions,thrownError){$('#response').html(xhr);},
                    cache:false,
                    beforeSend:function(){
                        $(".form-control").attr("disabled", true);
                        $('#login_result').html('Meminta Request ....');
                        $('#buy').html('Loading <i class="fa fa-spinner fa-spin"></i>');
                    },
                    success:function(s){
                        $(".form-control").attr("disabled", false);
                        $('#login_result').html(s);
                        $('#buy').html('Beli');
                    }
                });
                return false;
            });
            $("#scan").click(function(event){
                event.preventDefault();
                var scan = jQuery('select[name="scan"]').val()
                $.ajax({
                    type:'POST',
                    url:'controller.php',
                    data:{scan:scan},
                    error:function(xhr,ajaxOptions,thrownError){$('#response').html(xhr);},
                    cache:false,
                    beforeSend:function(){
                        $(".form-control").attr("disabled", true);
                        $('#login_result').html('Meminta Request ....');
                        $('#scan').html('Loading <i class="fa fa-spinner fa-spin"></i>');
                    },
                    success:function(s){
                        $(".form-control").attr("disabled", false);
                        $('#login_result').html(s);
                        $('#scan').html('Scan');
                    }
                });
                return false;
            });
            $("#logout").click(function(){ 
                if(confirm("Anda yakin ingin keluar?"))
                window.location.href = "login.php";
                return false;
            });
    });