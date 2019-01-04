$(document).ready(function() {
    var o = "",
        n = null,
        a = false; // false tức vẫn còn bài đăng
    o = $("a.blog-pager-older-link").attr("href") // lấy href từ class blog-pager-older-link để get dữ liệu
    if (o) { // nếu còn bài đăng thì bắt đầu làm

        //tạo 1 div loading và chèn trước div phân trang mặc định
        n = $('<div class="ajax-more" style="display:none"><center><div class="spinner"></div></center></div>').insertBefore($("#blog-pager"));
        $("#blog-pager").hide() // ẩn phân trang mặc định

        $(window).scroll(function() { // bắt sự kiện cuộn trang
            var i = $(".index-post:last").offset().top, // lấy tọa độ của bài đăng cuối cùng
                t = $(".index-post:last").outerHeight(), // lấy chiều cao của bài đăng cuối cùng
                d = $(window).height(); // lấy chiều cao của cửa sổ
            if ($(this).scrollTop() > i + t - d) { // nếu cuộn chuột vượt quá bài cuối cùng thì bắt đầu get dữ liệu
                if (!a) { // nếu còn bài đăng thì tiếp tục làm
                    a = true; // gắn cờ nếu hết bài đăng
                    if (o) { // nếu còn bài đăng thì tiếp tục làm
                        n.show(); // hiện spinner loading
                        $.ajax(o, { // get dữ liệu từ href với dữ liệu trả về dạng HTML
                            dataType: "html"
                        }).done(function(i) {
                            var t = $("<div></div>").append(i.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")), // tạo 1 div append dữ liệu html vừa thu được và loại bỏ các kí tự không cần thiết
                                s = t.find("div.blog-posts").children(); // tìm các thành phần con của div.blog-posts
                            $("div.blog-posts").append(s); // append các thành phần đó vào cuối div.blog-posts
                            if (t.find("a.blog-pager-older-link")) { // nếu vẫn còn bài đăng
                                o = t.find("a.blog-pager-older-link").attr("href") // tiếp tục gán href để get dữ liệu
                            } else {
                                o = ""; // hết bài đăng thì gán lại thành rỗng để kết thúc vòng lặp
                            }
                            n.hide(); // ẩn div loadding
                            a = false; // nếu còn bài đăng thì gán lại thành false
                        })
                    } else {
                        n.hide() // ẩn div loadding
                    }
                }
            }
        });
    }
})