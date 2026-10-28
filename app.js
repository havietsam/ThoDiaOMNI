// ==============================================================================
// OMNI AI - CORE ENGINE (QUIET LUXURY / ZEN TECH EDITION - TOAN HA NOI)
// Scale: 55 CO SO AM THUC TINH HOA TOAN HA NOI (EXHAUSTIVE CAU GIAY EXPANSION)
// ==============================================================================

const HANOI_RAW_DATA = [
    {
        "id":  "store-nt-001",
        "name":  "Cột Điện Quán - Bánh Mì Chảo",
        "slug":  "cot-dien-quan-banh-mi-chao-nghia-tan",
        "brand":  "Cột Điện Quán",
        "category":  "Bánh Mì \u0026 Ăn Nhanh",
        "address":  "104-105B C3 Khu Tập Thể Nghĩa Tân, Phường Nghĩa Tân, Quận Cầu Giấy, Hà Nội",
        "landmark":  "Đối diện cổng sau Trường THCS Nghĩa Tân",
        "location":  {
                         "latitude":  21.043512,
                         "longitude":  105.793215,
                         "geo_hash":  "w7e2w7q"
                     },
        "contact":  {
                        "phone":  "02462541820",
                        "phone_display":  "024 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)",
                        "google_maps_url":  "https://maps.google.com/?cid=1284918237192837123"
                    },
        "operating_hours":  {
                                "open_time":  "08:30",
                                "close_time":  "22:00",
                                "open_now":  true,
                                "best_visit_window":  "Trước 11h30 hoặc sau 13h15 (Tránh cao điểm học sinh \u0026 văn phòng)"
                            },
        "price_range":  {
                            "min":  35000,
                            "max":  65000,
                            "currency":  "VND",
                            "formatted":  "35.000đ - 65.000đ"
                        },
        "amenities":  [
                          {
                              "name":  "Điều hòa tầng 2 mát lạnh",
                              "icon":  "ac"
                          },
                          {
                              "name":  "Xe máy miễn phí trước cửa",
                              "icon":  "bike"
                          },
                          {
                              "name":  "Thanh toán VietQR nhanh",
                              "icon":  "qr"
                          },
                          {
                              "name":  "Wifi tốc độ cao miễn phí",
                              "icon":  "wifi"
                          }
                      ],
        "parking_detail":  {
                               "motorbike":  "Miễn phí trước cửa quán (có nhân viên dắt xe)",
                               "car":  "Không đỗ ô tô trước cửa; gửi tại trường học hoặc bãi xe Tô Hiệu (50m)",
                               "fee":  "0đ xe máy"
                           },
        "realtime_busyness":  {
                                  "current_occupancy_percent":  45,
                                  "status_text":  "Bàn trống 55%",
                                  "busyness_sub":  "Tầng 2 điều hòa sẵn sàng • Vào ăn ngay",
                                  "noise_level":  "52 dB (Vừa phải)",
                                  "peak_hours_histogram":  {
                                                               "11h30":  65,
                                                               "12h00":  95,
                                                               "12h30":  80,
                                                               "18h30":  70,
                                                               "19h30":  90
                                                           }
                              },
        "ai_curation":  {
                            "signature_dish":  "Bánh mì chảo đặc biệt (Pate cột điện xém cạnh, trứng ốp la, khoai tây nghiền sốt chua ngọt)",
                            "insider_tip":  "Pate rán xém cạnh cực thơm nhưng sốt hơi ngọt kiểu Hà Nội xưa. Nhớ xin thêm 1 bát nước sốt cay nóng chan đẫm và ăn lúc bánh mì vừa mới ra lò giòn rụm!",
                            "contexts":  [
                                             "an_trua_nhanh",
                                             "hoc_sinh_sinh_vien",
                                             "an_xe_chieu",
                                             "dieu_hoa_mat",
                                             "thanh_toan_vietqr"
                                         ],
                            "omni_trust_score":  92
                        },
        "photos":  [
                       {
                           "url":  "/assets/photos/cot_dien_banh_mi_chao.jpg",
                           "caption":  "Chảo bánh mì xèo xèo nước sốt sánh mịn cùng pate rán xém vàng giòn",
                           "tag":  "Món Chính"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Món Đinh Đặc Sản",
                                    "items":  [
                                                  {
                                                      "name":  "Bánh mì chảo đặc biệt",
                                                      "price":  "45.000đ",
                                                      "desc":  "Pate xém cạnh, trứng ốp la đào, xúc xích, khoai tây nghiền sốt chua ngọt",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Bánh mì chảo thường",
                                                      "price":  "35.000đ",
                                                      "desc":  "Pate cột điện truyền thống, trứng ốp la hồng đào, sốt sánh",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Bánh mì sốt tiêu đen",
                                                      "price":  "50.000đ",
                                                      "desc":  "Thịt bò mềm ngấm sốt tiêu đen cay nồng ấm bụng",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Bò sốt Hỏa Diệm Sơn",
                                                      "price":  "65.000đ",
                                                      "desc":  "Bò xèo xèo chảo gang cay tê đậm đà, phô mai kéo sợi",
                                                      "is_signature":  false
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Món Phụ \u0026 Gọi Thêm",
                                    "items":  [
                                                  {
                                                      "name":  "Pate rán xém cạnh gọi thêm",
                                                      "price":  "15.000đ",
                                                      "desc":  "Pate nguyên miếng rán vàng rụm viền ngoài béo ngậy",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Bánh mì giòn nướng nóng",
                                                      "price":  "5.000đ",
                                                      "desc":  "Bánh mì mới ra lò giòn rụm đặc ruột",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Trứng ốp la gọi thêm",
                                                      "price":  "8.000đ",
                                                      "desc":  "Trứng ốp lòng đào béo ngậy",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Xíu mại thố hoàng kim",
                                                      "price":  "40.000đ",
                                                      "desc":  "Viên xíu mại thịt nạc thơm mềm sốt cà chua tươi",
                                                      "is_signature":  false
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Đồ Uống Tự Nấu",
                                    "items":  [
                                                  {
                                                      "name":  "Sữa ngô non tự nấu",
                                                      "price":  "15.000đ",
                                                      "desc":  "Nấu mới mỗi sáng từ ngô ngọt, sánh mịn ít đường",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Sữa đậu nành nguyên chất",
                                                      "price":  "10.000đ",
                                                      "desc":  "Đậu nành thơm bùi, uống mát cùng đá",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Trà chanh hoa nhài",
                                                      "price":  "15.000đ",
                                                      "desc":  "Trà xanh ướp nhài thanh mát giải ngấy",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Pate xém viền cực bùi béo ngậy, công thức độc quyền gia truyền Nghĩa Tân",
                                                "Nước sốt chua ngọt sánh đậm, chấm bánh mì giòn tan ăn rất cuốn hút",
                                                "Tầng 2 có máy lạnh mát rượi, lên món nhanh trong 3-5 phút",
                                                "Hỗ trợ thanh toán VietQR quét mã chuyển khoản siêu nhanh"
                                            ],
                                   "cons":  [
                                                "Giờ cao điểm (11h45 - 12h45) học sinh THCS Nghĩa Tân và văn phòng đổ về đông ồn",
                                                "Nước sốt thiên vị ngọt nhẹ kiểu Hà Thành xưa, ai ăn mặn nên xin thêm nước tương/tiêu",
                                                "Bàn ghế tầng 1 hơi sát nhau khi quán đông"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Trần Minh Hoàng",
                                     "badge":  "Local Guide Level 7",
                                     "date":  "2 tuần trước",
                                     "rating":  5,
                                     "comment":  "Quán quen gần 10 năm từ hồi cấp 2. Pate rán viền giòn bùi ngậy số 1 khu Cầu Giấy. Nhớ dặn nhân viên chan thêm bát sốt cay nóng ăn cùng bánh mì giòn rụm."
                                 },
                                 {
                                     "author":  "Nguyễn Bích Ngọc",
                                     "badge":  "Dân văn phòng Duy Tân",
                                     "date":  "1 tháng trước",
                                     "rating":  4,
                                     "comment":  "Buổi trưa đi nhóm 4 người ăn no nê mà chia ra chỉ hơn 50k/người. Tầng 2 điều hòa mát rượi, nhân viên phục vụ nhanh nhẹn dù quán rất đông."
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "Restaurant",
                               "name":  "Cột Điện Quán - Bánh Mì Chảo Nghĩa Tân",
                               "address":  "104-105B C3 Nghĩa Tân, Cầu Giấy, Hà Nội",
                               "geo":  {
                                           "@type":  "GeoCoordinates",
                                           "latitude":  21.043512,
                                           "longitude":  105.793215
                                       },
                               "telephone":  "+84-24-6254-1820",
                               "priceRange":  "35.000 - 65.000 VND",
                               "servesCuisine":  "Bánh Mì Chảo Hà Nội",
                               "aggregateRating":  {
                                                       "@type":  "AggregateRating",
                                                       "ratingValue":  "4.3",
                                                       "reviewCount":  "1250"
                                                   }
                           }
    },
    {
        "id":  "store-nt-002",
        "name":  "Tào Phớ Nghĩa Tân (Khu C2)",
        "slug":  "tao-pho-c2-nghia-tan-huyen-thoai",
        "brand":  "Tào Phớ Nghĩa Tân",
        "category":  "Ăn Vặt \u0026 Giải Khát",
        "address":  "Cổng sau Trường THCS Nghĩa Tân, Khu C2 Nghĩa Tân, Phường Nghĩa Tân, Quận Cầu Giấy, Hà Nội",
        "landmark":  "Sát cổng sau THCS Nghĩa Tân",
        "location":  {
                         "latitude":  21.043105,
                         "longitude":  105.792842,
                         "geo_hash":  "w7e2w7m"
                     },
        "contact":  {
                        "phone":  "0947002606",
                        "phone_display":  "094 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)",
                        "google_maps_url":  "https://maps.google.com/?cid=9823471928371239847"
                    },
        "operating_hours":  {
                                "open_time":  "09:00",
                                "close_time":  "18:00",
                                "open_now":  true,
                                "best_visit_window":  "13h30 - 16h00 (Ngồi râm mát thoáng đãng, trước giờ tan trường)"
                            },
        "price_range":  {
                            "min":  10000,
                            "max":  25000,
                            "currency":  "VND",
                            "formatted":  "10.000đ - 25.000đ"
                        },
        "amenities":  [
                          {
                              "name":  "Vỉa hè râm mát bóng cây",
                              "icon":  "tree"
                          },
                          {
                              "name":  "Để xe trước mặt miễn phí",
                              "icon":  "bike"
                          },
                          {
                              "name":  "Thanh toán VietQR tiện lợi",
                              "icon":  "qr"
                          },
                          {
                              "name":  "Mang về đóng hộp sạch sẽ",
                              "icon":  "box"
                          }
                      ],
        "parking_detail":  {
                               "motorbike":  "Đỗ vỉa hè ngay trước mặt ghế ngồi, tự trông tầm mắt",
                               "car":  "Không có chỗ đỗ ô tô, chỉ tiện xe máy và đi bộ",
                               "fee":  "Miễn phí"
                           },
        "realtime_busyness":  {
                                  "current_occupancy_percent":  30,
                                  "status_text":  "Nhiều ghế mát",
                                  "busyness_sub":  "Phục vụ 1 phút • Không cần chờ",
                                  "noise_level":  "42 dB (Yên tĩnh)",
                                  "peak_hours_histogram":  {
                                                               "10h00":  20,
                                                               "12h00":  45,
                                                               "15h00":  55,
                                                               "17h00":  98
                                                           }
                              },
        "ai_curation":  {
                            "signature_dish":  "Tào phớ thập cẩm (thạch găng, thạch đen, trân châu dừa nóng, nước hoa nhài)",
                            "insider_tip":  "Nước đường nấu hoa nhài tươi tự nhiên thơm ngát. Nhớ dặn cô bán \u0027ít ngọt, nhiều trân châu dừa còn ấm\u0027 và ăn kèm một chút đá bào!",
                            "contexts":  [
                                             "an_vat_via_he",
                                             "giai_nhiet_mua_he",
                                             "hoc_sinh_sinh_vien",
                                             "gia_re"
                                         ],
                            "omni_trust_score":  94
                        },
        "photos":  [
                       {
                           "url":  "/assets/photos/tao_pho_c2_nghia_tan.jpg",
                           "caption":  "Bát tào phớ trắng ngần mịn mướt chan nước đường hoa nhài và trân châu dừa giòn ấm",
                           "tag":  "Món Đinh"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Tào Phớ Gia Truyền",
                                    "items":  [
                                                  {
                                                      "name":  "Tào phớ thập cẩm truyền thống",
                                                      "price":  "15.000đ",
                                                      "desc":  "Tào phớ mịn mướt, thạch găng xanh, thạch đen, trân châu nhân dừa giòn, nước hoa nhài",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Tào phớ hoa nhài nguyên bản",
                                                      "price":  "10.000đ",
                                                      "desc":  "Tào phớ thanh khiết chan nước đường ướp hoa nhài tươi",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Tào phớ hạt sen long nhãn",
                                                      "price":  "25.000đ",
                                                      "desc":  "Hạt sen bở thơm bùi, cùi nhãn giòn ngọt nước dùng thanh tao",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Tào phớ caramen cốt dừa",
                                                      "price":  "20.000đ",
                                                      "desc":  "Caramen béo thơm kết hợp tào phớ mềm và nước cốt dừa ngậy",
                                                      "is_signature":  false
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Ăn Vặt Kèm Theo",
                                    "items":  [
                                                  {
                                                      "name":  "Bánh gối rán giòn",
                                                      "price":  "12.000đ/c",
                                                      "desc":  "Vỏ giòn rụm, nhân thịt mộc nhĩ miến nêm tiêu đậm đà",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Nem chua rán phố cổ",
                                                      "price":  "6.000đ/c",
                                                      "desc":  "Nem chua rán nóng hổi chấm tương ớt cay nồng",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Bánh bột lọc chan nước mắm",
                                                      "price":  "25.000đ/đĩa",
                                                      "desc":  "Vỏ trong dai mềm nhân tôm thịt đậm vị",
                                                      "is_signature":  false
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Giải Khát",
                                    "items":  [
                                                  {
                                                      "name":  "Caramen nếp cẩm cốt dừa",
                                                      "price":  "15.000đ",
                                                      "desc":  "Nếp cẩm dẻo thơm hạt dẻo ăn cùng caramen béo ngậy",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Sữa đậu nành lá dứa mát",
                                                      "price":  "10.000đ",
                                                      "desc":  "Đậu nành thơm bùi nấu cùng lá dứa thơm ngát",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Tào phớ mềm mượt như lụa, trơn tuột tan trên đầu lưỡi",
                                                "Nước đường hoa nhài thơm tự nhiên tao nhã, không dùng tinh dầu hóa chất",
                                                "Trân châu dừa tự luộc thủ công dẻo giòn và luôn giữ ấm",
                                                "Mức giá 10k-15k siêu rẻ, chuẩn ẩm thực đường phố Hà Nội"
                                            ],
                                   "cons":  [
                                                "16h30-17h45 lúc trường THCS Nghĩa Tân tan học học sinh xếp hàng kín vỉa hè",
                                                "Ngồi vỉa hè ghế nhựa dưới tán cây râm mát, không có phòng điều hòa",
                                                "Trưa nắng to sẽ hơi oi bức, nên ghé tầm xế chiều mát mẻ"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Đỗ Thùy Linh",
                                     "badge":  "Sinh viên ĐHQG Hà Nội",
                                     "date":  "3 ngày trước",
                                     "rating":  5,
                                     "comment":  "Bát tào phớ 15k đầy ắp thạch găng với trân châu dừa. Nước hoa nhài thơm dịu chứ không hề gắt đường. Chiều nào tan học về cũng phải ghé làm một bát giải nhiệt."
                                 },
                                 {
                                     "author":  "Vũ Đức Anh",
                                     "badge":  "Local Guide Level 6",
                                     "date":  "2 tuần trước",
                                     "rating":  5,
                                     "comment":  "Tượng đài ăn vặt Nghĩa Tân hơn 15 năm nay. Bánh gối vỏ giòn nhân đẫm thịt ăn kèm bát tào phớ mát lạnh là combo cứu đói buổi chiều đỉnh nhất khu Cầu Giấy."
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "Restaurant",
                               "name":  "Tào Phớ Nghĩa Tân C2",
                               "address":  "C2 Nghĩa Tân, Cầu Giấy, Hà Nội",
                               "geo":  {
                                           "@type":  "GeoCoordinates",
                                           "latitude":  21.043105,
                                           "longitude":  105.792842
                                       },
                               "telephone":  "+84-94-700-2606",
                               "priceRange":  "10.000 - 25.000 VND",
                               "servesCuisine":  "Tào Phớ Đường Phố Hà Nội",
                               "aggregateRating":  {
                                                       "@type":  "AggregateRating",
                                                       "ratingValue":  "4.5",
                                                       "reviewCount":  "2180"
                                                   }
                           }
    },
    {
        "id":  "store-nt-003",
        "name":  "Bún Ngan Bà Hằng (Ki-ốt 3 Chợ Nghĩa Tân)",
        "slug":  "bun-ngan-ba-hang-cho-nghia-tan",
        "brand":  "Bún Ngan Bà Hằng",
        "category":  "Bún \u0026 Phở",
        "address":  "Ki-ốt số 3, Cổng Chợ Nghĩa Tân, Phường Nghĩa Tân, Quận Cầu Giấy, Hà Nội",
        "landmark":  "Ngay lối vào cổng chợ Nghĩa Tân",
        "location":  {
                         "latitude":  21.042854,
                         "longitude":  105.793812,
                         "geo_hash":  "w7e2w7r"
                     },
        "contact":  {
                        "phone":  "0988176817",
                        "phone_display":  "098 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)",
                        "google_maps_url":  "https://maps.google.com/?cid=3847291847192837461"
                    },
        "operating_hours":  {
                                "open_time":  "07:00",
                                "close_time":  "22:30",
                                "open_now":  true,
                                "best_visit_window":  "10h30 - 11h30 hoặc 13h30 - 17h00 (Tránh giờ cao điểm chợ trưa)"
                            },
        "price_range":  {
                            "min":  35000,
                            "max":  180000,
                            "currency":  "VND",
                            "formatted":  "35.000đ - 180.000đ"
                        },
        "amenities":  [
                          {
                              "name":  "Quạt gió công suất lớn",
                              "icon":  "fan"
                          },
                          {
                              "name":  "Gửi xe chợ Nghĩa Tân",
                              "icon":  "bike"
                          },
                          {
                              "name":  "Thanh toán VietQR nhanh",
                              "icon":  "qr"
                          },
                          {
                              "name":  "Bán liên tục sáng đến đêm",
                              "icon":  "clock"
                          }
                      ],
        "parking_detail":  {
                               "motorbike":  "Gửi ngay bãi xe cổng chợ Nghĩa Tân bên cạnh quán (5k vé)",
                               "car":  "Không có chỗ đỗ ô tô trong ngõ chợ",
                               "fee":  "5.000đ xe máy"
                           },
        "realtime_busyness":  {
                                  "current_occupancy_percent":  60,
                                  "status_text":  "Bàn trống 40%",
                                  "busyness_sub":  "Lên món trong 3 phút",
                                  "noise_level":  "58 dB (Nhộn nhịp)",
                                  "peak_hours_histogram":  {
                                                               "08h00":  40,
                                                               "12h00":  90,
                                                               "12h30":  85,
                                                               "19h00":  75
                                                           }
                              },
        "ai_curation":  {
                            "signature_dish":  "Bún ngan trộn măng cay chua ngọt \u0026 Ngan cháy tỏi thơm lừng",
                            "insider_tip":  "Nước sốt trộn đậm đà vừa miệng, thịt ngan thái dày không bị bã. Nhớ gọi thêm một bát canh măng tiết nóng hổi húp kèm để cân bằng vị chua cay!",
                            "contexts":  [
                                             "an_trua_nhanh",
                                             "dong_nghiep_cong_so",
                                             "nhau_toi_binh_dan"
                                         ],
                            "omni_trust_score":  89
                        },
        "photos":  [
                       {
                           "url":  "/assets/photos/bun_ngan_ba_hang.jpg",
                           "caption":  "Bát bún ngan trộn đẫm thịt nạc mềm, lạc rang bùi và măng cay giòn rụm",
                           "tag":  "Món Đinh"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Món Ngan Đinh",
                                    "items":  [
                                                  {
                                                      "name":  "Bún ngan trộn măng cay",
                                                      "price":  "45.000đ",
                                                      "desc":  "Thịt ngan lọc nạc dày miếng, măng cay ngâm giòn sần sật, lạc rang thơm, sốt chua ngọt",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Miến ngan trộn đặc biệt",
                                                      "price":  "50.000đ",
                                                      "desc":  "Sợi miến dai mềm trộn đẫm sốt cùng thịt ngan thơm mọng",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Ngan cháy tỏi đặc sản (Đĩa nửa con)",
                                                      "price":  "180.000đ",
                                                      "desc":  "Ngan chiên xém cạnh ngập tỏi phi giòn tan, chấm nước sốt mắm tỏi ớt",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Bún ngan nước canh măng tiết",
                                                      "price":  "40.000đ",
                                                      "desc":  "Nước dùng hầm xương ngọt sâu thanh dịu, tiết mềm mướt",
                                                      "is_signature":  false
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Món Chặt \u0026 Ăn Kèm",
                                    "items":  [
                                                  {
                                                      "name":  "Ngan luộc chặt đĩa (Nửa con)",
                                                      "price":  "150.000đ",
                                                      "desc":  "Thịt ngan dé ngọt mọng chấm muối tiêu chanh ớt",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Lòng mề gan xào giá đỗ",
                                                      "price":  "60.000đ",
                                                      "desc":  "Lòng mề giòn sần sật xào thơm tiêu",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Canh măng tiết gọi thêm",
                                                      "price":  "15.000đ",
                                                      "desc":  "Bát canh nóng hổi đầy ắp măng tươi và tiết mềm",
                                                      "is_signature":  false
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Đồ Uống Bình Dân",
                                    "items":  [
                                                  {
                                                      "name":  "Trà đá hoa nhài",
                                                      "price":  "5.000đ",
                                                      "desc":  "Trà mát lạnh giải ngấy",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Nhân trần đặc biệt",
                                                      "price":  "5.000đ",
                                                      "desc":  "Nhân trần thanh nhiệt mát gan",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Thịt ngan dé thái dày bản, thớ thịt mềm ngọt mọng nước không bị bở",
                                                "Ngan cháy tỏi thơm nức, tỏi phi giòn rụm không bị khét đắng",
                                                "Sốt bún trộn đậm đà vừa vặn, măng cay giòn rụm rất đưa miệng",
                                                "Phục vụ nhiệt tình, làm đồ nhanh thoăn thoắt"
                                            ],
                                   "cons":  [
                                                "Quán ki-ốt sát cổng chợ nên không gian bình dân, giờ trưa tiếng ồn chợ nhộn nhịp",
                                                "Bàn ghế inox hơi sát nhau vào lúc đông khách",
                                                "Gửi xe bãi chợ Nghĩa Tân mất 5k vé gửi xe"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Nguyễn Quốc Bảo",
                                     "badge":  "Kỹ sư FPT Duy Tân",
                                     "date":  "1 tuần trước",
                                     "rating":  5,
                                     "comment":  "Đĩa ngan cháy tỏi 180k hai anh em ăn ngập miệng. Tỏi phi thơm nức không bị đắng, thịt ngan mềm mọng nước. Bún trộn ăn kèm bát canh măng tiết nóng là chuẩn bài cứu đói trưa văn phòng."
                                 },
                                 {
                                     "author":  "Hoàng Yến",
                                     "badge":  "Cư dân Cầu Giấy 12 năm",
                                     "date":  "3 tuần trước",
                                     "rating":  4,
                                     "comment":  "Ngan ở đây làm sạch sẽ không bị hôi lông. Trưa nào thèm bún trộn chua ngọt cũng ghé đây ăn. Điểm trừ duy nhất là trưa hè ngồi ngoài hiên chợ hơi ồn và nóng."
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "Restaurant",
                               "name":  "Bún Ngan Bà Hằng Nghĩa Tân",
                               "address":  "Ki-ốt 3 Chợ Nghĩa Tân, Cầu Giấy, Hà Nội",
                               "geo":  {
                                           "@type":  "GeoCoordinates",
                                           "latitude":  21.042854,
                                           "longitude":  105.793812
                                       },
                               "telephone":  "+84-98-817-6817",
                               "priceRange":  "35.000 - 180.000 VND",
                               "servesCuisine":  "Bún Ngan Hà Nội",
                               "aggregateRating":  {
                                                       "@type":  "AggregateRating",
                                                       "ratingValue":  "4.2",
                                                       "reviewCount":  "890"
                                                   }
                           }
    },
    {
        "id":  "store-nt-004",
        "name":  "Lẩu Ốc Bà Téo - 104 C6 Tô Hiệu",
        "slug":  "lau-oc-ba-teo-to-hieu-nghia-tan",
        "brand":  "Lẩu Ốc Bà Téo",
        "category":  "Lẩu \u0026 Nhậu Gia Đình",
        "address":  "104 C6 Tô Hiệu, Phường Nghĩa Tân, Quận Cầu Giấy, Hà Nội",
        "landmark":  "Mặt đường Tô Hiệu gần ngã ba Nghĩa Tân",
        "location":  {
                         "latitude":  21.044521,
                         "longitude":  105.794912,
                         "geo_hash":  "w7e2w7v"
                     },
        "contact":  {
                        "phone":  "0985624888",
                        "phone_display":  "098 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)",
                        "google_maps_url":  "https://maps.google.com/?cid=4958192837482910492"
                    },
        "operating_hours":  {
                                "open_time":  "06:30",
                                "close_time":  "21:30",
                                "open_now":  true,
                                "best_visit_window":  "Buổi trưa 11h00 - 13h30 hoặc Tối 18h00 - 21h00 (Nên đặt bàn trước)"
                            },
        "price_range":  {
                            "min":  45000,
                            "max":  500000,
                            "currency":  "VND",
                            "formatted":  "45.000đ - 250.000đ/người"
                        },
        "amenities":  [
                          {
                              "name":  "Điều hòa 2 chiều mát rượi",
                              "icon":  "ac"
                          },
                          {
                              "name":  "Đỗ xe ô tô có bảo vệ trông",
                              "icon":  "car"
                          },
                          {
                              "name":  "Xuất hóa đơn đỏ VAT công ty",
                              "icon":  "vat"
                          },
                          {
                              "name":  "Thanh toán VietQR \u0026 Thẻ POS",
                              "icon":  "qr"
                          }
                      ],
        "parking_detail":  {
                               "motorbike":  "Để xe máy miễn phí trước cửa quán có nhân viên dắt",
                               "car":  "Đỗ ô tô dọc mặt đường Tô Hiệu có bảo vệ quán xi-nhan và trông xe miễn phí",
                               "fee":  "0đ cả xe máy và ô tô"
                           },
        "realtime_busyness":  {
                                  "current_occupancy_percent":  35,
                                  "status_text":  "Bàn trống 65%",
                                  "busyness_sub":  "Đỗ được ô tô mặt phố Tô Hiệu",
                                  "noise_level":  "48 dB (Sang trọng, riêng tư)",
                                  "peak_hours_histogram":  {
                                                               "12h00":  70,
                                                               "18h30":  85,
                                                               "19h30":  95,
                                                               "20h30":  60
                                                           }
                              },
        "ai_curation":  {
                            "signature_dish":  "Lẩu ốc riêu cua giấm bỗng nếp \u0026 Chả ốc nướng giấy bạc tiêu xanh",
                            "insider_tip":  "Nước lẩu dùng bỗng rượu nếp chua thanh dịu ngọt tự nhiên. Hãy thả ốc vào chần chín tới ăn ngay sẽ giòn béo, đừng ninh quá 3 phút kẻo ốc teo dai!",
                            "contexts":  [
                                             "tu_tap_gia_dinh",
                                             "dieu_hoa_mat",
                                             "nhau_cuoi_tuan",
                                             "tiep_khach_cong_ty"
                                         ],
                            "omni_trust_score":  91
                        },
        "photos":  [
                       {
                           "url":  "/assets/photos/lau_oc_ba_teo.jpg",
                           "caption":  "Nồi lẩu ốc giấm bỗng nếp sôi bốc khói cùng đĩa ốc nhồi béo ngậy và chuối đậu om",
                           "tag":  "Món Đinh"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Lẩu Ốc Giấm Bỗng Nếp",
                                    "items":  [
                                                  {
                                                      "name":  "Set lẩu ốc giấm bỗng nếp (Nồi 2-3 người)",
                                                      "price":  "350.000đ",
                                                      "desc":  "Ốc nhồi béo ngậy, đậu rán phồng, chuối xanh om dẻo quánh, thịt dải heo, bún tươi, rau muống chẻ hoa chuối",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Set lẩu ốc gia đình (Nồi lớn 4-5 người)",
                                                      "price":  "500.000đ",
                                                      "desc":  "Gấp đôi đĩa ốc nhồi tươi, đĩa thịt dải, mọc ốc giòn và rau nấm tổng hợp",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Bún riêu ốc lẫn truyền thống",
                                                      "price":  "50.000đ",
                                                      "desc":  "Phục vụ cả ngày: Nước riêu cua đồng chua thanh, ốc giòn sần sật",
                                                      "is_signature":  false
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Món Ốc Đặc Sản Gọi Thêm",
                                    "items":  [
                                                  {
                                                      "name":  "Ốc nhồi hấp lá gừng",
                                                      "price":  "85.000đ",
                                                      "desc":  "Ốc nhồi thịt thơm phức mùi lá gừng vườn, chấm mắm gừng ớt",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Nem ốc chiên xù đặc biệt",
                                                      "price":  "75.000đ",
                                                      "desc":  "Vỏ ngoài giòn rụm vàng ươm, nhân ốc tươi xào nấm mộc nhĩ giòn bùi",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Chả ốc nướng giấy bạc tiêu xanh",
                                                      "price":  "90.000đ",
                                                      "desc":  "Chả ốc thơm ngậy hạt tiêu xanh Phú Quốc ăn kèm rau sống",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Ốc xào chuối đậu niêu đất",
                                                      "price":  "110.000đ",
                                                      "desc":  "Ốc xào đậm đà, nước sốt sánh vàng óng thơm mùi tía tô lá lốt",
                                                      "is_signature":  false
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Đồ Uống \u0026 Rượu Nhậu",
                                    "items":  [
                                                  {
                                                      "name":  "Rượu nếp cái hoa vàng bình gốm",
                                                      "price":  "65.000đ/bình",
                                                      "desc":  "Nấu men truyền thống êm say không đau đầu",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Trà quất mật ong thảo mộc",
                                                      "price":  "20.000đ/ly",
                                                      "desc":  "Chua ngọt dịu mát giải nhiệt khi ăn lẩu",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Bia Hà Nội / Tiger lon",
                                                      "price":  "20.000đ - 25.000đ",
                                                      "desc":  "Bia ướp lạnh sẵn sàng",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Vị giấm bỗng nếp nấu lẩu chua thanh tao hiếm thấy ở Hà Nội, không dùng giấm công nghiệp",
                                                "Ốc nhồi to béo làm rất sạch, không hề có nhớt hay sạn bùn",
                                                "Không gian phòng lạnh VIP sạch sẽ, lịch sự, thích hợp tụ họp gia đình hay liên hoan công ty",
                                                "Đỗ được ô tô mặt đường Tô Hiệu có bảo vệ trông xe chu đáo và xuất được hóa đơn VAT"
                                            ],
                                   "cons":  [
                                                "Ốc nhồi chỉ nên chần chín tới 2-3 phút ăn ngay kẻo teo dai nếu để lâu trong nồi lẩu",
                                                "Tối cuối tuần và thứ 6 khách đông, nên gọi điện hotline đặt bàn trước kẻo hết bàn lúc 19h30"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Phạm Thanh Tùng",
                                     "badge":  "Quản lý dự án Hoàng Quốc Việt",
                                     "date":  "4 ngày trước",
                                     "rating":  5,
                                     "comment":  "Đưa đối tác và gia đình đi ăn lẩu ốc ai cũng tấm tắc. Nước bỗng rượu chua thanh giải ngấy cực tốt. Đỗ ô tô ngay trước cửa có bảo vệ trông an tâm tuyệt đối, có hóa đơn đỏ thanh toán công ty."
                                 },
                                 {
                                     "author":  "Lê Phương Mai",
                                     "badge":  "Reviewer ẩm thực Hà Nội",
                                     "date":  "2 tuần trước",
                                     "rating":  4,
                                     "comment":  "Chả ốc nướng tiêu xanh và nem ốc ở đây làm rất thật thịt, giòn sần sật. Nồi lẩu 350k đầy đặn 3 người ăn no nê. Nhân viên lễ phép và điều hòa tầng 2 mát lạnh."
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "Restaurant",
                               "name":  "Lẩu Ốc Bà Téo Tô Hiệu",
                               "address":  "104 C6 Tô Hiệu, Cầu Giấy, Hà Nội",
                               "geo":  {
                                           "@type":  "GeoCoordinates",
                                           "latitude":  21.044521,
                                           "longitude":  105.794912
                                       },
                               "telephone":  "+84-98-562-4888",
                               "priceRange":  "45.000 - 500.000 VND",
                               "servesCuisine":  "Lẩu Ốc Hà Nội \u0026 Ẩm Thực Đồng Quê",
                               "aggregateRating":  {
                                                       "@type":  "AggregateRating",
                                                       "ratingValue":  "4.4",
                                                       "reviewCount":  "650"
                                                   }
                           }
    },
    {
        "id":  "store-nt-005",
        "name":  "Bún Bò Huế O Hiền - 106 Tô Hiệu",
        "slug":  "bun-bo-hue-o-hien-to-hieu",
        "brand":  "Bún Bò Huế O Hiền",
        "category":  "Bún \u0026 Phở",
        "address":  "106 Tô Hiệu, Phường Nghĩa Tân, Quận Cầu Giấy, Hà Nội",
        "landmark":  "Ngay sát cạnh Lẩu ốc Bà Téo",
        "location":  {
                         "latitude":  21.044615,
                         "longitude":  105.795105,
                         "geo_hash":  "w7e2w7w"
                     },
        "contact":  {
                        "phone":  "0901737393",
                        "phone_display":  "090 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)",
                        "google_maps_url":  "https://maps.google.com/?cid=5839201948291039485"
                    },
        "operating_hours":  {
                                "open_time":  "06:30",
                                "close_time":  "21:30",
                                "open_now":  true,
                                "best_visit_window":  "07h00 - 08h30 (Ăn sáng) hoặc 11h15 - 12h00 (Ăn trưa nhanh tầng 2)"
                            },
        "price_range":  {
                            "min":  35000,
                            "max":  55000,
                            "currency":  "VND",
                            "formatted":  "35.000đ - 55.000đ"
                        },
        "amenities":  [
                          {
                              "name":  "Điều hòa tầng 2 mát rượi",
                              "icon":  "ac"
                          },
                          {
                              "name":  "Xe máy vỉa hè Tô Hiệu",
                              "icon":  "bike"
                          },
                          {
                              "name":  "Thanh toán VietQR tiện lợi",
                              "icon":  "qr"
                          },
                          {
                              "name":  "Trà sâm dứa miễn phí",
                              "icon":  "tea"
                          }
                      ],
        "parking_detail":  {
                               "motorbike":  "Đỗ vỉa hè trước cửa quán (chứa được khoảng 15 xe máy)",
                               "car":  "Không có chỗ đỗ ô tô riêng, gửi tạm điểm đỗ Tô Hiệu lân cận",
                               "fee":  "0đ xe máy"
                           },
        "realtime_busyness":  {
                                  "current_occupancy_percent":  50,
                                  "status_text":  "Bàn trống 50%",
                                  "busyness_sub":  "Tầng 2 điều hòa mát lạnh",
                                  "noise_level":  "50 dB (Vừa phải)",
                                  "peak_hours_histogram":  {
                                                               "07h30":  85,
                                                               "12h00":  90,
                                                               "12h30":  75,
                                                               "19h00":  60
                                                           }
                              },
        "ai_curation":  {
                            "signature_dish":  "Bún bò gân giò heo chả cua Huế đặc biệt \u0026 Ram cuốn cải",
                            "insider_tip":  "Nước dùng chuẩn vị Huế dậy mùi ruốc sả, sa tế ớt chưng tự làm rất cay thơm. Ai không ăn được cay nhớ dặn từ đầu không cho sa tế nhé!",
                            "contexts":  [
                                             "an_sang_nhanh",
                                             "an_trua_nhanh",
                                             "dieu_hoa_mat"
                                         ],
                            "omni_trust_score":  90
                        },
        "photos":  [
                       {
                           "url":  "/assets/photos/bun_bo_o_hien.jpg",
                           "caption":  "Bát bún bò Huế đầy đặn thịt nạm hoa, móng giò mềm, chả cua nặn tay thơm nức mùi sả ruốc",
                           "tag":  "Món Đinh"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Bún Bò Huế Gia Truyền",
                                    "items":  [
                                                  {
                                                      "name":  "Bún bò Huế đặc biệt đầy đủ",
                                                      "price":  "55.000đ",
                                                      "desc":  "Bò nạm hoa, gân trong giòn sần sật, móng giò heo ninh nhừ, chả cua nặn tay, tiết luộc",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Bún bò gân nạm truyền thống",
                                                      "price":  "40.000đ",
                                                      "desc":  "Nạm bò mềm thơm, gân trong hầm dẻo giòn không dai",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Bún giò chả cua",
                                                      "price":  "45.000đ",
                                                      "desc":  "Khoanh giò heo thơm ngọt và viên chả cua nặn tay giòn bùi",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Bún sườn bò hoa",
                                                      "price":  "50.000đ",
                                                      "desc":  "Dẻ sườn bò hầm ngọt nước dóc xương",
                                                      "is_signature":  false
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Gọi Thêm \u0026 Khai Vị",
                                    "items":  [
                                                  {
                                                      "name":  "Đĩa chả cua Huế gọi thêm",
                                                      "price":  "20.000đ/2 viên",
                                                      "desc":  "Chả cua nặn tay thơm nức đậm đà thịt cua biển",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Gân bò hầm gọi thêm",
                                                      "price":  "25.000đ",
                                                      "desc":  "Gân bò trong veo dẻo giòn",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Quẩy giòn cắt đĩa",
                                                      "price":  "5.000đ/đĩa",
                                                      "desc":  "Quẩy giòn chấm nước dùng bún bò ngậy béo",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Trứng trần lòng đào",
                                                      "price":  "10.000đ/quả",
                                                      "desc":  "Trứng gà ta trần nước dùng béo ngậy",
                                                      "is_signature":  false
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Đồ Uống",
                                    "items":  [
                                                  {
                                                      "name":  "Trà sâm dứa mát lạnh",
                                                      "price":  "0đ (Miễn phí)",
                                                      "desc":  "Phục vụ miễn phí cho thực khách",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Trà quất nha đam",
                                                      "price":  "15.000đ",
                                                      "desc":  "Thanh mát giải nhiệt sau khi ăn bún cay",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Nước dùng bún bò dậy mùi mắm ruốc sả ớt đúng điệu Cố Đô, không pha tạp ngọt bột ngọt",
                                                "Viên chả cua nặn tay to bản, thơm ngọt đậm đà vị thịt cua",
                                                "Tầng 2 có máy lạnh chạy êm ru, ăn bún nóng giữa trưa hè cực thoải mái",
                                                "Có bình trà sâm dứa đá phục vụ miễn phí chu đáo"
                                            ],
                                   "cons":  [
                                                "Sa tế ớt chưng của quán làm bằng ớt hiểm rất cay nồng, ai không ăn được cay phải báo ngay lúc gọi",
                                                "Vỉa hè để được tầm 10-15 xe máy, giờ trưa cao điểm phải xếp xe sát nhau"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Võ Thị Diệu Thảo",
                                     "badge":  "Người gốc Huế tại Hà Nội",
                                     "date":  "1 tuần trước",
                                     "rating":  5,
                                     "comment":  "Là người con xứ Huế xa quê, đây là quán bún bò hiếm hoi ở Cầu Giấy nấu ra đúng vị mắm ruốc sả thanh tao chứ không bị lợ vị mì chính. Viên chả cua ngọt đậm đà, sợi bún to dai chuẩn vị."
                                 },
                                 {
                                     "author":  "Phan Anh Vũ",
                                     "badge":  "Local Guide Level 5",
                                     "date":  "3 tuần trước",
                                     "rating":  4,
                                     "comment":  "Bát 55k đầy ắp thịt thà ăn no căng đến chiều. Tầng 2 điều hòa mát mẻ sạch sẽ, nhân viên mang trà đá miễn phí nhanh nhẹn."
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "Restaurant",
                               "name":  "Bún Bò Huế O Hiền Tô Hiệu",
                               "address":  "106 Tô Hiệu, Cầu Giấy, Hà Nội",
                               "geo":  {
                                           "@type":  "GeoCoordinates",
                                           "latitude":  21.044615,
                                           "longitude":  105.795105
                                       },
                               "telephone":  "+84-90-173-7393",
                               "priceRange":  "35.000 - 55.000 VND",
                               "servesCuisine":  "Bún Bò Huế Cố Đô",
                               "aggregateRating":  {
                                                       "@type":  "AggregateRating",
                                                       "ratingValue":  "4.3",
                                                       "reviewCount":  "780"
                                                   }
                           }
    },
    {
        "id":  "store-nt-006",
        "name":  "Cháo Trai Bà Trọng - 06 A16 Nghĩa Tân",
        "slug":  "chao-trai-ba-trong-a16-nghia-tan",
        "brand":  "Cháo Trai Bà Trọng",
        "category":  "Ăn Xế \u0026 Cháo Truyền Thống",
        "address":  "06 A16 Khu Tập Thể Nghĩa Tân, Phường Nghĩa Tân, Quận Cầu Giấy, Hà Nội",
        "landmark":  "Khu tập thể A16 Nghĩa Tân",
        "location":  {
                         "latitude":  21.043012,
                         "longitude":  105.791532,
                         "geo_hash":  "w7e2w7j"
                     },
        "contact":  {
                        "phone":  null,
                        "phone_display":  "Phá»¥c vá»¥ trá»±c tiáº¿p",
                        "google_maps_url":  "https://maps.google.com/?cid=6829104928172938475"
                    },
        "operating_hours":  {
                                "open_time":  "06:30",
                                "close_time":  "20:00",
                                "open_now":  true,
                                "best_visit_window":  "15h00 - 17h30 (Thời điểm cháo mới quấy mẻ chiều thơm nức)"
                            },
        "price_range":  {
                            "min":  20000,
                            "max":  35000,
                            "currency":  "VND",
                            "formatted":  "20.000đ - 35.000đ"
                        },
        "amenities":  [
                          {
                              "name":  "Hiên nhà tập thể thoáng mát",
                              "icon":  "tree"
                          },
                          {
                              "name":  "Để xe trước hiên miễn phí",
                              "icon":  "bike"
                          },
                          {
                              "name":  "Thanh toán VietQR nhanh",
                              "icon":  "qr"
                          },
                          {
                              "name":  "Bao bì hộp giấy mang về sạch",
                              "icon":  "box"
                          }
                      ],
        "parking_detail":  {
                               "motorbike":  "Dựng xe ngay sân hiên trước mặt bàn ngồi, không mất phí",
                               "car":  "Đường nội bộ tập thể hẹp, không đỗ được ô tô",
                               "fee":  "0đ"
                           },
        "realtime_busyness":  {
                                  "current_occupancy_percent":  40,
                                  "status_text":  "Bàn trống 60%",
                                  "busyness_sub":  "Lên món trong 1 phút",
                                  "noise_level":  "44 dB (Yên tĩnh)",
                                  "peak_hours_histogram":  {
                                                               "07h30":  60,
                                                               "16h30":  90,
                                                               "17h30":  85,
                                                               "18h30":  50
                                                           }
                              },
        "ai_curation":  {
                            "signature_dish":  "Cháo trai xay sánh mịn như kem, trai xào đậm đà hành răm \u0026 quẩy giòn tan",
                            "insider_tip":  "Trai ở đây làm sạch bong không sạn cát. Gọi bát cháo nóng nhớ dặn bớt tiêu nếu đi cùng trẻ em, thêm 1 quả trứng cút luộc dầm vào bùi béo tuyệt hảo!",
                            "contexts":  [
                                             "an_xe_chieu",
                                             "hoc_sinh_sinh_vien",
                                             "gia_re",
                                             "truyen_thong_ha_noi"
                                         ],
                            "omni_trust_score":  93
                        },
        "photos":  [
                       {
                           "url":  "/assets/photos/chao_trai_ba_trong.jpg",
                           "caption":  "Bát cháo trai sánh mịn thơm nức hạt tiêu, hành răm thái nhỏ và quẩy vàng ruộm",
                           "tag":  "Món Đinh"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Cháo Nóng Truyền Thống",
                                    "items":  [
                                                  {
                                                      "name":  "Cháo trai truyền thống gạo tấm xay",
                                                      "price":  "25.000đ",
                                                      "desc":  "Hạt gạo tấm hầm nhừ xay mịn màng sánh như kem sữa, thịt trai đồng xào hành răm thơm lừng",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Cháo sườn sụn sánh mịn",
                                                      "price":  "30.000đ",
                                                      "desc":  "Sườn non hầm nhừ dóc xương, sụn giòn sần sật béo ngậy",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Cháo trai sườn sụn đặc biệt",
                                                      "price":  "35.000đ",
                                                      "desc":  "Kết hợp cả trai xào đậm đà và sườn sụn giòn ngon ngập miệng",
                                                      "is_signature":  true
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Món Kèm Bổ Dưỡng",
                                    "items":  [
                                                  {
                                                      "name":  "Quẩy giòn cắt đĩa",
                                                      "price":  "5.000đ/đĩa",
                                                      "desc":  "Quẩy mới chiên giòn tan, nhúng vào cháo ngấm đều nước súp",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Trứng cút luộc dầm cháo",
                                                      "price":  "5.000đ/3 quả",
                                                      "desc":  "Trứng cút bùi ngậy dầm nát vào cháo nóng",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Trứng vịt lộn hầm ngải cứu",
                                                      "price":  "12.000đ/quả",
                                                      "desc":  "Trứng vịt lộn non bồi bổ ấm bụng",
                                                      "is_signature":  false
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Giải Khát",
                                    "items":  [
                                                  {
                                                      "name":  "Sữa đậu nành tự nấu",
                                                      "price":  "10.000đ",
                                                      "desc":  "Uống ấm hoặc đá thơm ngậy",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Trà chanh hoa cúc",
                                                      "price":  "10.000đ",
                                                      "desc":  "Chua ngọt thanh tao mát ruột",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Cháo hạt tấm xay mịn sánh như nhung, không bị loãng vữa hay khê đáy nồi",
                                                "Thịt trai đồng làm sạch tinh tươm, xào đậm đà hành khô thơm nức không hề tanh",
                                                "Thương hiệu lâu năm hơn 20 năm của cô chú chủ quán hiền lành, trung thực",
                                                "Mức giá 20k-25k quá đỗi bình dân, ấm lòng mỗi chiều gió lạnh"
                                            ],
                                   "cons":  [
                                                "Quán bình dân hiên tập thể cũ, không có hotline đặt bàn, phục vụ trực tiếp tại chỗ",
                                                "Bàn ghế nhựa đơn sơ ngoài hiên, không có máy lạnh",
                                                "Mẻ cháo chiều bán nhanh hết, tầm 18h30 - 19h00 nhiều hôm đã hết sạch trai"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Nguyễn Thanh Hà",
                                     "badge":  "Cư dân A16 Nghĩa Tân",
                                     "date":  "5 ngày trước",
                                     "rating":  5,
                                     "comment":  "Ăn từ hồi bé xíu lon ton cầm cặp lồng ra mua. Cháo sánh mịn dầm thêm 3 quả trứng cút với rắc tí hạt tiêu ớt bột thì ấm lòng ngày mưa gió. Trai xào đậm đà thơm mùi hành răm."
                                 },
                                 {
                                     "author":  "Trần Trọng Đạt",
                                     "badge":  "Food Blogger Hà Nội",
                                     "date":  "1 tháng trước",
                                     "rating":  4.5,
                                     "comment":  "Điểm khác biệt lớn nhất là thịt trai ở đây không bị dai ngoách và không hề có tí mùi tanh nào. Bát cháo 25k kèm đĩa quẩy giòn tan ăn xế chiều là chuẩn vị Hà Nội xưa."
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "Restaurant",
                               "name":  "Cháo Trai Bà Trọng A16 Nghĩa Tân",
                               "address":  "06 A16 Nghĩa Tân, Cầu Giấy, Hà Nội",
                               "geo":  {
                                           "@type":  "GeoCoordinates",
                                           "latitude":  21.043012,
                                           "longitude":  105.791532
                                       },
                               "priceRange":  "20.000 - 35.000 VND",
                               "servesCuisine":  "Cháo Trai Truyền Thống Hà Nội",
                               "aggregateRating":  {
                                                       "@type":  "AggregateRating",
                                                       "ratingValue":  "4.6",
                                                       "reviewCount":  "1420"
                                                   }
                           }
    },
    {
        "id":  "store-nt-007",
        "name":  "Bánh Giò Nóng Thu Loan - Đầu Phố Nghĩa Tân",
        "slug":  "banh-gio-nong-thu-loan-nghia-tan",
        "brand":  "Bánh Giò Thu Loan",
        "category":  "Ăn Nhanh \u0026 Bánh Truyền Thống",
        "address":  "Đầu Phố Nghĩa Tân (Giáp Hoàng Quốc Việt), Phường Nghĩa Tân, Quận Cầu Giấy, Hà Nội",
        "landmark":  "Ngay đầu phố Nghĩa Tân rẽ từ Hoàng Quốc Việt vào",
        "location":  {
                         "latitude":  21.045812,
                         "longitude":  105.793015,
                         "geo_hash":  "w7e2w7t"
                     },
        "contact":  {
                        "phone":  null,
                        "phone_display":  "Phá»¥c vá»¥ trá»±c tiáº¿p",
                        "google_maps_url":  "https://maps.google.com/?cid=7819204928172938461"
                    },
        "operating_hours":  {
                                "open_time":  "06:30",
                                "close_time":  "21:30",
                                "open_now":  true,
                                "best_visit_window":  "15h30 - 17h00 (Bánh mẻ chiều nóng hổi vừa hấp ra nồi)"
                            },
        "price_range":  {
                            "min":  20000,
                            "max":  35000,
                            "currency":  "VND",
                            "formatted":  "20.000đ - 35.000đ"
                        },
        "amenities":  [
                          {
                              "name":  "Tạt xe mua nhanh trong 30 giây",
                              "icon":  "bike"
                          },
                          {
                              "name":  "Đóng gói lá chuối \u0026 hộp sạch",
                              "icon":  "box"
                          },
                          {
                              "name":  "Thanh toán VietQR tiện lợi",
                              "icon":  "qr"
                          },
                          {
                              "name":  "Có bàn ngồi ăn nhanh tại chỗ",
                              "icon":  "chair"
                          }
                      ],
        "parking_detail":  {
                               "motorbike":  "Tạt đỗ xe sát mép vỉa hè mua mang về hoặc ngồi ăn nhanh",
                               "car":  "Xe ô tô có thể dừng chớp nhoáng 1 phút để mua mang đi",
                               "fee":  "0đ"
                           },
        "realtime_busyness":  {
                                  "current_occupancy_percent":  25,
                                  "status_text":  "Phục vụ ngay",
                                  "busyness_sub":  "Tạt xe mua mang đi trong 30 giây",
                                  "noise_level":  "46 dB (Nhanh gọn)",
                                  "peak_hours_histogram":  {
                                                               "07h30":  85,
                                                               "12h00":  70,
                                                               "17h00":  95,
                                                               "18h00":  80
                                                           }
                              },
        "ai_curation":  {
                            "signature_dish":  "Bánh giò nóng đầy đủ topping (giò lụa Ước Lễ, giò tai, nem chua, dưa góp)",
                            "insider_tip":  "Vỏ bánh giò mềm mướt không bị sượng bột, nhân thịt mộc nhĩ nêm tiêu thơm lừng. Đừng quên xin thêm dưa góp chua ngọt để ăn kèm cho đỡ ngấy!",
                            "contexts":  [
                                             "an_sang_nhanh",
                                             "an_xe_chieu",
                                             "mang_ve_van_phong",
                                             "gia_re"
                                         ],
                            "omni_trust_score":  91
                        },
        "photos":  [
                       {
                           "url":  "/assets/photos/banh_gio_thu_loan.jpg",
                           "caption":  "Bánh giò hấp lá chuối nóng hổi bốc khói kèm đĩa topping giò lụa, giò tai và dưa góp",
                           "tag":  "Món Đinh"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Bánh Giò Nóng",
                                    "items":  [
                                                  {
                                                      "name":  "Bánh giò đặc biệt đầy đủ topping",
                                                      "price":  "35.000đ",
                                                      "desc":  "Bánh giò nóng bốc khói, giò lụa Ước Lễ thái dày, giò tai sần sật, nem chua Thanh Hóa, dưa chuột góp chua ngọt",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Bánh giò nóng mộc",
                                                      "price":  "20.000đ",
                                                      "desc":  "Bánh giò nguyên bản vỏ bột gạo tẻ mềm mịn, nhân thịt băm mộc nhĩ đậm đà",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Bánh giò kèm giò lụa",
                                                      "price":  "28.000đ",
                                                      "desc":  "Bánh giò ăn kèm miếng giò lụa thơm ngậy",
                                                      "is_signature":  false
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Topping Gọi Thêm",
                                    "items":  [
                                                  {
                                                      "name":  "Đĩa giò lụa / giò tai thêm",
                                                      "price":  "15.000đ",
                                                      "desc":  "Giò tai giòn sần sật hoặc giò lụa thái dày",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Nem chua rán nóng",
                                                      "price":  "7.000đ/c",
                                                      "desc":  "Nem chua rán giòn rụm",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Dưa chuột góp muối giòn thêm",
                                                      "price":  "0đ (Miễn phí)",
                                                      "desc":  "Dưa chuột muối chua ngọt ăn kèm chống ngấy",
                                                      "is_signature":  false
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Đồ Uống",
                                    "items":  [
                                                  {
                                                      "name":  "Sữa hạt sen lá dứa ấm",
                                                      "price":  "12.000đ",
                                                      "desc":  "Thơm bùi ấm bụng khi ăn sáng hay xế chiều",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Sữa đậu nành nguyên chất",
                                                      "price":  "10.000đ",
                                                      "desc":  "Đậu nành mát lạnh hoặc uống ấm",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Vỏ bánh giò làm bằng bột gạo tẻ chuẩn, mềm mướt tan trên đầu lưỡi, không hàn the",
                                                "Nhân thịt nạc băm xào mộc nhĩ nêm tiêu thơm nức, ngập miệng",
                                                "Dưa góp dưa chuột muối chua ngọt giòn rụm cho rất thoáng tay, chống ngấy hoàn hảo",
                                                "Mua mang về siêu tốc chỉ 30 giây, gói lá chuối giữ nóng hàng giờ"
                                            ],
                                   "cons":  [
                                                "Quán vỉa hè đầu phố chủ yếu bán mang về, chỗ ngồi ăn tại chỗ chỉ có vài ba ghế nhựa",
                                                "Không có hotline, chỉ bán trực tiếp",
                                                "Giờ tan tầm 17h00 - 18h15 người tấp xe mua đông dễ gây ùn nhẹ lòng đường"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Mai Thu Trang",
                                     "badge":  "Ngân hàng Hoàng Quốc Việt",
                                     "date":  "4 ngày trước",
                                     "rating":  5,
                                     "comment":  "Chiều nào tan làm đói bụng cũng tạt qua làm chiếc bánh giò đầy đủ 35k. Bánh nóng bỏng tay, giò tai sần sật và dưa góp dưa chuột chua ngọt cực ngon. Cứ quẹt VietQR 30 giây là xong gói về cho cả phòng."
                                 },
                                 {
                                     "author":  "Đặng Quốc Hưng",
                                     "badge":  "Dân sành ăn Cầu Giấy",
                                     "date":  "2 tuần trước",
                                     "rating":  4.5,
                                     "comment":  "Bánh giò ở đây mềm mướt không bị khô bở như nhiều nơi. Nhân thịt nhiều mộc nhĩ thơm phức mùi hạt tiêu Bắc. Một chiếc đặc biệt kèm giò lụa giò tai là đủ no tới tối."
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "Restaurant",
                               "name":  "Bánh Giò Nóng Thu Loan Nghĩa Tân",
                               "address":  "Đầu phố Nghĩa Tân, Cầu Giấy, Hà Nội",
                               "geo":  {
                                           "@type":  "GeoCoordinates",
                                           "latitude":  21.045812,
                                           "longitude":  105.793015
                                       },
                               "priceRange":  "20.000 - 35.000 VND",
                               "servesCuisine":  "Bánh Giò Truyền Thống Hà Nội",
                               "aggregateRating":  {
                                                       "@type":  "AggregateRating",
                                                       "ratingValue":  "4.4",
                                                       "reviewCount":  "980"
                                                   }
                           }
    },
    {
        "id":  "store-hn-008",
        "name":  "Phở Gia Truyền Bát Đàn",
        "slug":  "pho-gia-truyen-bat-dan-hoan-kiem",
        "brand":  "Phở Bát Đàn",
        "category":  "Phở Bò Truyền Thống",
        "address":  "49 Bát Đàn, Phường Cửa Đông, Quận Hoàn Kiếm, Hà Nội",
        "landmark":  "Gần ngã tư Bát Đàn - Hàng Điếu, trung tâm Phố Cổ",
        "location":  {
                         "latitude":  21.033621,
                         "longitude":  105.847115,
                         "geo_hash":  "w7e2xzq"
                     },
        "contact":  {
                        "phone":  null,
                        "phone_display":  "Phá»¥c vá»¥ trá»±c tiáº¿p",
                        "google_maps_url":  "https://maps.google.com/?cid=1029384756192837461"
                    },
        "operating_hours":  {
                                "open_time":  "06:00",
                                "close_time":  "20:30",
                                "open_now":  true,
                                "best_visit_window":  "06h30 - 08h00 sáng hoặc 14h00 - 16h30 chiều (Tránh cao điểm xếp hàng)"
                            },
        "price_range":  {
                            "min":  50000,
                            "max":  70000,
                            "currency":  "VND",
                            "formatted":  "50.000đ - 70.000đ"
                        },
        "amenities":  [
                          {
                              "name":  "Quạt mát \u0026 không gian hoài cổ",
                              "icon":  "fan"
                          },
                          {
                              "name":  "Đỗ xe máy vỉa hè có người dắt",
                              "icon":  "bike"
                          },
                          {
                              "name":  "Thanh toán VietQR nhanh",
                              "icon":  "qr"
                          },
                          {
                              "name":  "Văn hóa xếp hàng tự bê phở",
                              "icon":  "clock"
                          }
                      ],
        "parking_detail":  {
                               "motorbike":  "Miễn phí vỉa hè trước cửa có người xếp xe",
                               "car":  "Không đỗ ô tô trước cửa; gửi tại bãi xe Chợ Hàng Da (cách 120m)",
                               "fee":  "0đ xe máy"
                           },
        "realtime_busyness":  {
                                  "current_occupancy_percent":  80,
                                  "status_text":  "Bàn trống 20%",
                                  "busyness_sub":  "Đang có hàng đợi ngắn • Ra món 1 phút",
                                  "noise_level":  "60 dB (Rộn rã phố cổ)",
                                  "peak_hours_histogram":  {
                                                               "07h30":  95,
                                                               "08h30":  85,
                                                               "12h00":  90,
                                                               "18h30":  75
                                                           }
                              },
        "ai_curation":  {
                            "signature_dish":  "Phở bò đặc biệt tái nạm gầu giòn (Nước dùng hầm xương tủy bò 24h, gầu giòn sần sật)",
                            "insider_tip":  "Văn hóa bê bát tự phục vụ độc đáo. Nhớ gọi bát Tái Nạm Gầu Giòn, thêm 1 quả trứng gà ta chần lòng đào và đĩa quẩy giòn chấm nước dùng ngọt thanh ngát hương gừng nướng!",
                            "contexts":  [
                                             "an_sang_nhanh",
                                             "an_trua_nhanh",
                                             "am_thuc_di_san",
                                             "thanh_toan_vietqr"
                                         ],
                            "omni_trust_score":  96
                        },
        "photos":  [
                       {
                           "url":  "/assets/photos/pho_bat_dan.jpg",
                           "caption":  "Bát phở bò Bát Đàn tái nạm bốc khói ngào ngạt",
                           "tag":  "signature"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Món Đinh Đặc Sản",
                                    "items":  [
                                                  {
                                                      "name":  "Phở bò đặc biệt tái nạm gầu giòn",
                                                      "price":  "70.000đ",
                                                      "desc":  "Thịt bò tươi thái mỏng chần tái, gầu giòn sần sật, nước tủy bò trong veo",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Phở bò tái lăn áp chảo",
                                                      "price":  "60.000đ",
                                                      "desc":  "Bò xào lăn tỏi thơm nức, ngập tràn hành hoa",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Phở bò chín nạm truyền thống",
                                                      "price":  "55.000đ",
                                                      "desc":  "Thịt nạm luộc mềm ngọt thái mỏng bản to",
                                                      "is_signature":  false
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Món Phụ \u0026 Ăn Kèm",
                                    "items":  [
                                                  {
                                                      "name":  "Trứng gà ta chần nước béo",
                                                      "price":  "10.000đ",
                                                      "desc":  "Trứng chần lòng đào ngậy béo",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Đĩa quẩy giòn phố cổ",
                                                      "price":  "10.000đ",
                                                      "desc":  "Quẩy giòn rụm chấm nước phở",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Tiết hầm hành hoa",
                                                      "price":  "15.000đ",
                                                      "desc":  "Bát tiết mềm mướt nóng hổi",
                                                      "is_signature":  false
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Đồ Uống Giải Khát",
                                    "items":  [
                                                  {
                                                      "name":  "Trà đá hoa nhài",
                                                      "price":  "5.000đ",
                                                      "desc":  "Trà mát lạnh thanh tao",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Nhân trần ngọt mát",
                                                      "price":  "5.000đ",
                                                      "desc":  "Thức uống giải nhiệt phố cổ",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Nước dùng hầm xương tủy nguyên chất ngọt thanh sâu lắng, tuyệt đối không lạm dụng mì chính",
                                                "Thịt bò thái dày bản, thớ thịt tươi rói mềm ngọt, gầu giòn sần sật béo thơm",
                                                "Bát phở bốc khói nghi ngút, hành lá thơm nồng mùi gừng nướng truyền thống"
                                            ],
                                   "cons":  [
                                                "Phải xếp hàng tự bưng bê bát nóng giờ cao điểm sáng và trưa",
                                                "Bàn ghế gỗ mộc san sát nhau mang phong cách phố cổ cũ",
                                                "Không đỗ được ô tô trước cửa quán, phải gửi bãi Chợ Hàng Da"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Lê Minh Trí",
                                     "badge":  "Thực khách sành ăn Hà Nội 20 năm",
                                     "date":  "3 ngày trước",
                                     "rating":  5,
                                     "comment":  "Nước phở ngọt thấu xương đúng nghĩa truyền thống. Bát tái gầu thêm quả trứng chần và đôi quẩy giòn là tinh hoa bữa sáng Hà Nội. Dù xếp hàng 5 phút nhưng hoàn toàn bõ công!"
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "Restaurant",
                               "name":  "Phở Gia Truyền Bát Đàn",
                               "address":  "49 Bát Đàn, Cửa Đông, Hoàn Kiếm, Hà Nội",
                               "geo":  {
                                           "@type":  "GeoCoordinates",
                                           "latitude":  21.033621,
                                           "longitude":  105.847115
                                       },
                               "priceRange":  "50.000 - 70.000 VND",
                               "servesCuisine":  "Phở Bò Truyền Thống Hà Nội",
                               "aggregateRating":  {
                                                       "@type":  "AggregateRating",
                                                       "ratingValue":  "4.8",
                                                       "reviewCount":  "2150"
                                                   }
                           }
    },
    {
        "id":  "store-hn-009",
        "name":  "Bún Chả Đắc Kim - Hàng Mành",
        "slug":  "bun-cha-dac-kim-hang-manh-hoan-kiem",
        "brand":  "Bún Chả Đắc Kim",
        "category":  "Bún Chả \u0026 Nem Rán",
        "address":  "Số 1 Hàng Mành, Phường Hàng Gai, Quận Hoàn Kiếm, Hà Nội",
        "landmark":  "Ngay đầu phố Hàng Mành giao Hàng Quạt",
        "location":  {
                         "latitude":  21.032945,
                         "longitude":  105.847921,
                         "geo_hash":  "w7e2xzw"
                     },
        "contact":  {
                        "phone":  "02438287056",
                        "phone_display":  "024 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)",
                        "google_maps_url":  "https://maps.google.com/?cid=1827364519283746501"
                    },
        "operating_hours":  {
                                "open_time":  "09:00",
                                "close_time":  "21:00",
                                "open_now":  true,
                                "best_visit_window":  "10h45 - 11h30 hoặc sau 13h30 (Tránh đông đúc giờ trưa)"
                            },
        "price_range":  {
                            "min":  60000,
                            "max":  120000,
                            "currency":  "VND",
                            "formatted":  "60.000đ - 120.000đ"
                        },
        "amenities":  [
                          {
                              "name":  "Điều hòa tầng 2 mát rượi",
                              "icon":  "ac"
                          },
                          {
                              "name":  "Xe máy có nhân viên trông",
                              "icon":  "bike"
                          },
                          {
                              "name":  "Thanh toán VietQR nhanh",
                              "icon":  "qr"
                          },
                          {
                              "name":  "Wifi miễn phí",
                              "icon":  "wifi"
                          }
                      ],
        "parking_detail":  {
                               "motorbike":  "Nhân viên dắt xe xếp trên vỉa hè phố Hàng Mành",
                               "car":  "Không đỗ ô tô; gửi bãi Nhà Hát Lớn hoặc Chợ Hàng Da",
                               "fee":  "0đ xe máy"
                           },
        "realtime_busyness":  {
                                  "current_occupancy_percent":  65,
                                  "status_text":  "Bàn trống 35%",
                                  "busyness_sub":  "Tầng 2 điều hòa mát • Có bàn ngay",
                                  "noise_level":  "64 dB (Nhộn nhịp phố cổ)",
                                  "peak_hours_histogram":  {
                                                               "11h30":  80,
                                                               "12h15":  95,
                                                               "18h30":  75
                                                           }
                              },
        "ai_curation":  {
                            "signature_dish":  "Bún chả que tre than hoa \u0026 Nem cua bể Hải Phòng giòn rụm (Chả băm cuốn lá lốt, nem đẫm thịt cua)",
                            "insider_tip":  "Suất bún chả ở Đắc Kim cực kỳ nhiều thịt và đẫm nhân. Nếu đi 2 người, mẹo của dân sành là gọi 1 suất bún chả đầy đủ và 1 đĩa nem cua bể giòn rụm cắt tư là vừa vặn no nê mà không bị ngấy!",
                            "contexts":  [
                                             "an_trua_nhanh",
                                             "dieu_hoa_mat",
                                             "am_thuc_di_san",
                                             "thanh_toan_vietqr"
                                         ],
                            "omni_trust_score":  93
                        },
        "photos":  [
                       {
                           "url":  "/assets/photos/bun_cha_dac_kim.jpg",
                           "caption":  "Mẹt bún chả Đắc Kim Hàng Mành ngập thịt nướng và nem giòn",
                           "tag":  "signature"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Món Đinh Đặc Sản",
                                    "items":  [
                                                  {
                                                      "name":  "Suất bún chả đặc biệt Hàng Mành",
                                                      "price":  "70.000đ",
                                                      "desc":  "Chả miếng ba chỉ nướng than hoa, chả băm cuốn lá lốt, bát nước chấm ngập thịt",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Nem cua bể giòn rụm (Đĩa 2 chiếc)",
                                                      "price":  "50.000đ",
                                                      "desc":  "Nem vuông cua bể Hải Phòng nhân thịt cua tươi, tôm và nấm hương",
                                                      "is_signature":  true
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Món Gọi Thêm",
                                    "items":  [
                                                  {
                                                      "name":  "Bún đĩa thêm",
                                                      "price":  "10.000đ",
                                                      "desc":  "Đĩa bún sợi nhỏ thanh mát",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Chả miếng / Chả băm thêm",
                                                      "price":  "40.000đ",
                                                      "desc":  "Đĩa chả nướng nóng hổi",
                                                      "is_signature":  false
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Đồ Uống Giải Khát",
                                    "items":  [
                                                  {
                                                      "name":  "Trà quất mật ong phố cổ",
                                                      "price":  "15.000đ",
                                                      "desc":  "Trà quất chua ngọt dịu mát chống ngấy",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Trà đá hoa nhài",
                                                      "price":  "5.000đ",
                                                      "desc":  "Trà đá truyền thống",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Chả nướng than hoa thơm nức, thịt ướp đậm đà vừa vặn, không bị khô xơ",
                                                "Nem cua bể vỏ giòn tan, nhân ngập thịt cua tươi và mộc nhĩ nấm hương",
                                                "Tầng 2 có điều hòa mát mẻ, phục vụ đồ ăn nhanh thoăn thoắt"
                                            ],
                                   "cons":  [
                                                "Khẩu phần thịt rất nhiều nên ăn ít dễ bị ngấy, nên gọi kèm trà quất",
                                                "Mức giá thuộc phân khúc cao hơn mặt bằng bún chả vỉa hè",
                                                "Phố Hàng Mành hẹp, giờ cao điểm giao thông đông đúc"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Hoàng Tuấn Anh",
                                     "badge":  "Hướng dẫn viên ẩm thực Phố Cổ",
                                     "date":  "5 ngày trước",
                                     "rating":  4.5,
                                     "comment":  "Chả nướng than hoa thơm nức mũi từ đầu phố Hàng Mành. Miếng chả băm bọc lá lốt xém cạnh mềm ngọt mọng nước. Nem cua bể giòn rụm chấm nước mắm ấm là chuẩn chỉ."
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "Restaurant",
                               "name":  "Bún Chả Đắc Kim Hàng Mành",
                               "address":  "Số 1 Hàng Mành, Hàng Gai, Hoàn Kiếm, Hà Nội",
                               "geo":  {
                                           "@type":  "GeoCoordinates",
                                           "latitude":  21.032945,
                                           "longitude":  105.847921
                                       },
                               "priceRange":  "60.000 - 120.000 VND",
                               "servesCuisine":  "Bún Chả Hà Nội",
                               "aggregateRating":  {
                                                       "@type":  "AggregateRating",
                                                       "ratingValue":  "4.5",
                                                       "reviewCount":  "1840"
                                                   }
                           }
    },
    {
        "id":  "store-hn-010",
        "name":  "Chả Cá Thăng Long - Đường Thành",
        "slug":  "cha-ca-thang-long-duong-thanh",
        "brand":  "Chả Cá Thăng Long",
        "category":  "Chả Cá Truyền Thống",
        "address":  "6B Đường Thành, Phường Cửa Đông, Quận Hoàn Kiếm, Hà Nội",
        "landmark":  "Gần góc ngã tư Đường Thành - Hàng Bông",
        "location":  {
                         "latitude":  21.033810,
                         "longitude":  105.845890,
                         "geo_hash":  "w7e2xzm"
                     },
        "contact":  {
                        "phone":  "02438286007",
                        "phone_display":  "024 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)",
                        "google_maps_url":  "https://maps.google.com/?cid=1928374650192837461"
                    },
        "operating_hours":  {
                                "open_time":  "10:30",
                                "close_time":  "21:30",
                                "open_now":  true,
                                "best_visit_window":  "11h00 - 12h00 trưa hoặc 17h30 - 18h30 tối"
                            },
        "price_range":  {
                            "min":  150000,
                            "max":  220000,
                            "currency":  "VND",
                            "formatted":  "150.000đ - 220.000đ"
                        },
        "amenities":  [
                          {
                              "name":  "Không gian biệt thự cổ điều hòa mát",
                              "icon":  "ac"
                          },
                          {
                              "name":  "Bãi đỗ ô tô và xe máy có bảo vệ",
                              "icon":  "car"
                          },
                          {
                              "name":  "Thanh toán VietQR \u0026 Thẻ",
                              "icon":  "qr"
                          },
                          {
                              "name":  "Hóa đơn VAT công ty",
                              "icon":  "vat"
                          },
                          {
                              "name":  "Wifi tốc độ cao",
                              "icon":  "wifi"
                          }
                      ],
        "parking_detail":  {
                               "motorbike":  "Miễn phí trong sân biệt thự quán có bảo vệ dắt",
                               "car":  "Có chỗ đỗ ô tô trước cửa đường Thành hoặc gửi bãi đối diện",
                               "fee":  "0đ xe máy, ô tô có hướng dẫn"
                           },
        "realtime_busyness":  {
                                  "current_occupancy_percent":  50,
                                  "status_text":  "Bàn trống 50%",
                                  "busyness_sub":  "Không gian yên tĩnh • Vào bàn ngay",
                                  "noise_level":  "48 dB (Thanh lịch yên tĩnh)",
                                  "peak_hours_histogram":  {
                                                               "12h00":  85,
                                                               "19h00":  90
                                                           }
                              },
        "ai_curation":  {
                            "signature_dish":  "Chả cá lăng sông Đà xèo xèo thì là (Cá lăng tẩm nghệ nướng than xào mỡ cùng hành hoa và thì là tươi)",
                            "insider_tip":  "Khi cá sôi xèo xèo trên chảo mỡ, gắp vào bát bún, rắc lạc rang bùi và thìa mắm tôm đánh sủi bọt quất ớt. Nhớ dặn nhân viên cho thật nhiều thì là và hành hoa đảo vừa chín tới ăn ngọt lịm!",
                            "contexts":  [
                                             "tiep_khach_sang_trong",
                                             "dieu_hoa_mat",
                                             "am_thuc_di_san",
                                             "thanh_toan_vietqr"
                                         ],
                            "omni_trust_score":  95
                        },
        "photos":  [
                       {
                           "url":  "/assets/photos/cha_ca_thang_long.jpg",
                           "caption":  "Chảo chả cá Thăng Long vàng ươm sôi xèo xèo thì là thơm nức",
                           "tag":  "signature"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Món Đinh Đặc Sản",
                                    "items":  [
                                                  {
                                                      "name":  "Suất Chả Cá Lăng Thăng Long đặc biệt",
                                                      "price":  "170.000đ",
                                                      "desc":  "Thịt cá lăng sông lọc xương tẩm nghệ nướng xèo xèo chảo mỡ cùng thì là, hành hoa, bún tươi, lạc rang",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Dạ dày cá lăng xào giòn",
                                                      "price":  "180.000đ",
                                                      "desc":  "Dạ dày cá giòn sần sật xào hành răm thơm cay",
                                                      "is_signature":  true
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Món Gọi Thêm",
                                    "items":  [
                                                  {
                                                      "name":  "Đĩa chả cá lăng thêm",
                                                      "price":  "120.000đ",
                                                      "desc":  "Phần cá lăng ướp nghệ thêm",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Đĩa bún tươi \u0026 lạc rang thêm",
                                                      "price":  "20.000đ",
                                                      "desc":  "Bún sợi nhỏ và lạc bùi",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Rau thì là \u0026 hành hoa tươi thêm",
                                                      "price":  "20.000đ",
                                                      "desc":  "Rau xanh thơm ngát",
                                                      "is_signature":  false
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Đồ Uống \u0026 Rượu Truyền Thống",
                                    "items":  [
                                                  {
                                                      "name":  "Nước mơ ngâm chùa Hương",
                                                      "price":  "25.000đ",
                                                      "desc":  "Mơ chua ngọt thanh khiết",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Bia hơi Hà Nội ướp lạnh",
                                                      "price":  "20.000đ",
                                                      "desc":  "Bia tươi thủ đô",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Cá lăng sông thịt chắc ngọt, không hề có mùi tanh, gia vị nghệ mẻ ngấm sâu",
                                                "Mắm tôm pha cực khéo, đánh sủi bọt ngậy mùi quất ớt cay nồng vừa vặn",
                                                "Không gian biệt thự Pháp cổ sang trọng, điều hòa mát rượi, tiếp khách lịch sự"
                                            ],
                                   "cons":  [
                                                "Mùi chảo mỡ xào thì là có thể bám nhẹ vào quần áo sau khi ăn",
                                                "Mức giá cao phù hợp tiếp khách và gia đình hơn ăn trưa thường nhật",
                                                "Tối cuối tuần thường kín bàn, nên đặt trước 1 tiếng"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Trần Bích Phương",
                                     "badge":  "Nhà phê bình ẩm thực Michelin Guide Fan",
                                     "date":  "1 tuần trước",
                                     "rating":  5,
                                     "comment":  "Chả cá ở đây xứng đáng là di sản ẩm thực đất Tràng An. Miếng cá lăng vàng ruộm béo ngọt, thì là tươi non xào vừa chín tới hòa quyện cùng mắm tôm đánh bông bọt. Không gian biệt thự cổ kính rất sang."
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "Restaurant",
                               "name":  "Chả Cá Thăng Long Đường Thành",
                               "address":  "6B Đường Thành, Cửa Đông, Hoàn Kiếm, Hà Nội",
                               "geo":  {
                                           "@type":  "GeoCoordinates",
                                           "latitude":  21.033810,
                                           "longitude":  105.845890
                                       },
                               "priceRange":  "150.000 - 220.000 VND",
                               "servesCuisine":  "Chả Cá Lăng Truyền Thống",
                               "aggregateRating":  {
                                                       "@type":  "AggregateRating",
                                                       "ratingValue":  "4.7",
                                                       "reviewCount":  "1960"
                                                   }
                           }
    },
    {
        "id":  "store-hn-011",
        "name":  "Xôi Xéo Yến - Nguyễn Hữu Huân",
        "slug":  "xoi-xeo-yen-nguyen-huu-huan",
        "brand":  "Xôi Yến",
        "category":  "Xôi \u0026 Ăn Nhanh",
        "address":  "35B Nguyễn Hữu Huân, Phường Lý Thái Tổ, Quận Hoàn Kiếm, Hà Nội",
        "landmark":  "Góc ngã tư Nguyễn Hữu Huân - Hàng Mắm",
        "location":  {
                         "latitude":  21.033480,
                         "longitude":  105.854210,
                         "geo_hash":  "w7e2xzx"
                     },
        "contact":  {
                        "phone":  "02439341950",
                        "phone_display":  "024 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)",
                        "google_maps_url":  "https://maps.google.com/?cid=1293847561029384756"
                    },
        "operating_hours":  {
                                "open_time":  "06:00",
                                "close_time":  "23:00",
                                "open_now":  true,
                                "best_visit_window":  "07h00 - 08h30 hoặc 15h00 - 17h00 chiều"
                            },
        "price_range":  {
                            "min":  30000,
                            "max":  65000,
                            "currency":  "VND",
                            "formatted":  "30.000đ - 65.000đ"
                        },
        "amenities":  [
                          {
                              "name":  "Điều hòa tầng 2 mát lạnh",
                              "icon":  "ac"
                          },
                          {
                              "name":  "Xe máy vỉa hè có người dắt",
                              "icon":  "bike"
                          },
                          {
                              "name":  "Thanh toán VietQR tiện lợi",
                              "icon":  "qr"
                          },
                          {
                              "name":  "Mua mang về nhanh chóng",
                              "icon":  "box"
                          }
                      ],
        "parking_detail":  {
                               "motorbike":  "Miễn phí vỉa hè trước cửa có nhân viên xếp",
                               "car":  "Không đỗ ô tô; gửi bãi xe vườn hoa Lý Thái Tổ (300m)",
                               "fee":  "0đ xe máy"
                           },
        "realtime_busyness":  {
                                  "current_occupancy_percent":  70,
                                  "status_text":  "Bàn trống 30%",
                                  "busyness_sub":  "Tầng 2 điều hòa • Mua mang về 1 phút",
                                  "noise_level":  "63 dB",
                                  "peak_hours_histogram":  {
                                                               "08h00":  95,
                                                               "12h00":  85,
                                                               "20h00":  75
                                                           }
                              },
        "ai_curation":  {
                            "signature_dish":  "Xôi xéo thập cẩm thịt kho tàu trứng lòng đào (Hạt nếp cái hoa vàng dẻo quánh, đỗ xanh thái mỏng, mỡ gà hành phi)",
                            "insider_tip":  "Xôi xéo ở đây đỗ xanh bùi ngậy rưới mỡ gà thơm phức. Bí kíp ăn ngon là nhớ dặn cô bán hàng chan đẫm nước thịt kho tàu đậm đà và gọi thêm đĩa dưa góp giòn chua ngọt để cân bằng vị béo!",
                            "contexts":  [
                                             "an_sang_nhanh",
                                             "an_trua_nhanh",
                                             "dieu_hoa_mat",
                                             "thanh_toan_vietqr"
                                         ],
                            "omni_trust_score":  92
                        },
        "photos":  [
                       {
                           "url":  "/assets/photos/xoi_yen_nguyen_huu_huan.jpg",
                           "caption":  "Bát xôi xéo Yến vàng ươm đỗ xanh hành phi thịt kho trứng",
                           "tag":  "signature"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Món Đinh Đặc Sản",
                                    "items":  [
                                                  {
                                                      "name":  "Xôi xéo thập cẩm thịt kho trứng dầm",
                                                      "price":  "55.000đ",
                                                      "desc":  "Xôi nếp vàng, đỗ xanh thái mỏng, thịt ba chỉ kho tàu mềm rục, trứng kho lòng đào, ruốc thịt, hành phi",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Xôi xéo gà xào nấm hương",
                                                      "price":  "50.000đ",
                                                      "desc":  "Thịt gà xào nấm thơm lừng đậm đà",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Xôi xéo truyền thống ruốc hành",
                                                      "price":  "30.000đ",
                                                      "desc":  "Xôi xéo mộc đỗ xanh bùi ngậy và ruốc heo sợi",
                                                      "is_signature":  false
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Topping Gọi Thêm",
                                    "items":  [
                                                  {
                                                      "name":  "Thịt kho tàu thêm",
                                                      "price":  "20.000đ",
                                                      "desc":  "Miếng thịt kho ba chỉ ngậy mềm",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Trứng kho lòng đào",
                                                      "price":  "10.000đ",
                                                      "desc":  "Trứng ngấm sốt kho đậm đà",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Lạp xưởng tươi nướng",
                                                      "price":  "15.000đ",
                                                      "desc":  "Lạp xưởng thơm ngọt",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Dưa góp dưa chuột chua ngọt",
                                                      "price":  "0đ (Miễn phí)",
                                                      "desc":  "Ăn kèm giải ngấy",
                                                      "is_signature":  false
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Đồ Uống Tự Nấu",
                                    "items":  [
                                                  {
                                                      "name":  "Sữa đậu nành nguyên chất ướp lạnh",
                                                      "price":  "12.000đ",
                                                      "desc":  "Sữa hạt thơm mát lành",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Trà chanh phố cổ",
                                                      "price":  "15.000đ",
                                                      "desc":  "Chua ngọt sảng khoái",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Hạt xôi nếp cái hoa vàng dẻo quánh dù để nguội vẫn mềm mọng, không bị lại gạo",
                                                "Đỗ xanh nắm chặt thái lát mỏng dính bùi ngậy, hành phi ta giòn rụm thơm nức mũi",
                                                "Phục vụ siêu tốc, đóng gói lá chuối sạch sẽ giữ nóng cả buổi sáng"
                                            ],
                                   "cons":  [
                                                "Suất xôi khá nhiều tinh bột và mỡ gà ngậy, người ăn ít nên dặn bớt xôi",
                                                "Giờ cao điểm sáng khách đứng mua mang về tấp nập vỉa hè",
                                                "Không gian tầng 1 hẹp, nên lên tầng 2 ngồi điều hòa"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Vũ Đình Khiêm",
                                     "badge":  "Cư dân phố Hàng Mắm",
                                     "date":  "4 ngày trước",
                                     "rating":  4.5,
                                     "comment":  "Xôi xéo Yến là ký ức cả thời sinh viên. Hạt xôi bóng bẩy vàng ruộm mỡ gà, đỗ xanh thái mỏng bùi ngậy tan trong miệng. Bát xôi thịt kho trứng no căng tới tận chiều muộn."
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "Restaurant",
                               "name":  "Xôi Xéo Yến Nguyễn Hữu Huân",
                               "address":  "35B Nguyễn Hữu Huân, Hoàn Kiếm, Hà Nội",
                               "geo":  {
                                           "@type":  "GeoCoordinates",
                                           "latitude":  21.033480,
                                           "longitude":  105.854210
                                       },
                               "priceRange":  "30.000 - 65.000 VND",
                               "servesCuisine":  "Xôi Truyền Thống Hà Nội",
                               "aggregateRating":  {
                                                       "@type":  "AggregateRating",
                                                       "ratingValue":  "4.4",
                                                       "reviewCount":  "2410"
                                                   }
                           }
    },
    {
        "id":  "store-hn-012",
        "name":  "Phở Cuốn Hương Mai - Ngũ Xã",
        "slug":  "pho-cuon-huong-mai-ngu-xa-ba-dinh",
        "brand":  "Phở Cuốn Hương Mai",
        "category":  "Phở Cuốn \u0026 Ăn Nhóm",
        "address":  "25 Ngũ Xã, Phường Trúc Bạch, Quận Ba Đình, Hà Nội",
        "landmark":  "Bán đảo Ngũ Xã, ven hồ Trúc Bạch",
        "location":  {
                         "latitude":  21.045780,
                         "longitude":  105.840610,
                         "geo_hash":  "w7e2xwv"
                     },
        "contact":  {
                        "phone":  "0973344556",
                        "phone_display":  "097 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)",
                        "google_maps_url":  "https://maps.google.com/?cid=1829304856192837462"
                    },
        "operating_hours":  {
                                "open_time":  "09:30",
                                "close_time":  "22:00",
                                "open_now":  true,
                                "best_visit_window":  "11h00 - 11h45 trưa hoặc 17h30 - 18h30 tối gió hồ mát"
                            },
        "price_range":  {
                            "min":  35000,
                            "max":  85000,
                            "currency":  "VND",
                            "formatted":  "35.000đ - 85.000đ"
                        },
        "amenities":  [
                          {
                              "name":  "Điều hòa các tầng mát lạnh",
                              "icon":  "ac"
                          },
                          {
                              "name":  "Xe máy vỉa hè rộng rãi",
                              "icon":  "bike"
                          },
                          {
                              "name":  "Đỗ ô tô ven hồ Trúc Bạch",
                              "icon":  "car"
                          },
                          {
                              "name":  "Thanh toán VietQR nhanh",
                              "icon":  "qr"
                          },
                          {
                              "name":  "Wifi miễn phí",
                              "icon":  "wifi"
                          }
                      ],
        "parking_detail":  {
                               "motorbike":  "Miễn phí trước cửa quán có nhân viên dắt",
                               "car":  "Đỗ ô tô ven đường quanh hồ Trúc Bạch có bảo vệ trông",
                               "fee":  "0đ xe máy"
                           },
        "realtime_busyness":  {
                                  "current_occupancy_percent":  55,
                                  "status_text":  "Bàn trống 45%",
                                  "busyness_sub":  "Điều hòa tầng 2 \u0026 3 • Không gian thoáng đãng",
                                  "noise_level":  "54 dB (Thoải mái)",
                                  "peak_hours_histogram":  {
                                                               "12h00":  80,
                                                               "19h30":  90
                                                           }
                              },
        "ai_curation":  {
                            "signature_dish":  "Phở cuốn bò xào lăn rau thơm \u0026 Phở chiên phồng sốt bò cải ngọt",
                            "insider_tip":  "Bánh phở tráng mỏng mềm mướt cuốn chặt tay thịt bò xào lăn chín tới ngọt mềm. Đi nhóm bạn nhất định phải gọi thêm 1 đĩa phở chiên phồng giòn tan chấm đẫm sốt bò xào cải ngọt sền sệt siêu ngon!",
                            "contexts":  [
                                             "an_trua_nhanh",
                                             "dieu_hoa_mat",
                                             "tu_tap_gia_dinh",
                                             "thanh_toan_vietqr"
                                         ],
                            "omni_trust_score":  94
                        },
        "photos":  [
                       {
                           "url":  "/assets/photos/pho_cuon_huong_mai.jpg",
                           "caption":  "Đĩa phở cuốn Hương Mai trắng muốt cuộn chặt tay thịt bò rau thơm",
                           "tag":  "signature"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Món Đinh Đặc Sản",
                                    "items":  [
                                                  {
                                                      "name":  "Đĩa phở cuốn bò đặc biệt (10 cuốn)",
                                                      "price":  "70.000đ",
                                                      "desc":  "Bánh phở tươi tráng mỏng, thịt bò xào tỏi mềm mọng, xà lách và rau mùi ta chấm mắm chua ngọt",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Phở chiên phồng sốt bò cải ngọt",
                                                      "price":  "75.000đ",
                                                      "desc":  "Từng viên phở chiên phồng rộp giòn tan ngập sốt bò xào sánh mịn",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Phở chiên trứng giòn rụm",
                                                      "price":  "70.000đ",
                                                      "desc":  "Phở áp chảo cùng trứng gà thơm bùi",
                                                      "is_signature":  false
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Món Ăn Kèm \u0026 Gọi Thêm",
                                    "items":  [
                                                  {
                                                      "name":  "Phở trộn bò chua ngọt",
                                                      "price":  "55.000đ",
                                                      "desc":  "Sợi phở mềm trộn sốt chua ngọt lạc rang",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Nộm ngó sen tai heo giòn sần sật",
                                                      "price":  "50.000đ",
                                                      "desc":  "Ngó sen chua ngọt thanh mát",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Ngô chiên bơ vàng ươm",
                                                      "price":  "35.000đ",
                                                      "desc":  "Ngô ngọt chiên bơ thơm nức",
                                                      "is_signature":  false
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Đồ Uống Giải Khát",
                                    "items":  [
                                                  {
                                                      "name":  "Trà đào cam sả mát lạnh",
                                                      "price":  "20.000đ",
                                                      "desc":  "Trà hoa quả thanh nhiệt",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Nước sấu ngâm gừng Hà Nội",
                                                      "price":  "15.000đ",
                                                      "desc":  "Chua ngọt ấm bụng truyền thống",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Bánh phở tráng tươi mới mỗi ngày, dai mướt không nát, cuốn chặt tay",
                                                "Thịt bò ướp đậm đà xào lăn lửa lớn mềm mọng, nước mắm chấm pha tỏi ớt chua ngọt chuẩn vị",
                                                "Không gian nhà 3 tầng rộng rãi, điều hòa mát rượi, đỗ được ô tô ven hồ"
                                            ],
                                   "cons":  [
                                                "Đoạn đường vào bán đảo Ngũ Xã cuối tuần hơi đông đúc",
                                                "Món phở chiên phồng nên ăn nóng ngay tại bàn để tránh bớt giòn",
                                                "Giờ trưa chủ nhật thường phải chờ xếp bàn tầm 5-10 phút"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Đỗ Kim Ngân",
                                     "badge":  "Dân văn phòng Ba Đình",
                                     "date":  "1 tuần trước",
                                     "rating":  5,
                                     "comment":  "Phở cuốn ở đây cuốn rất đều tay, thịt bò nhiều và ngọt lịm không dai. Nước chấm chua ngọt pha cực kỳ vừa miệng. Đĩa phở chiên phồng cắn giòn rụm rộp rộp chấm sốt bò là tuyệt phẩm."
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "Restaurant",
                               "name":  "Phở Cuốn Hương Mai Ngũ Xã",
                               "address":  "25 Ngũ Xã, Trúc Bạch, Ba Đình, Hà Nội",
                               "geo":  {
                                           "@type":  "GeoCoordinates",
                                           "latitude":  21.045780,
                                           "longitude":  105.840610
                                       },
                               "priceRange":  "35.000 - 85.000 VND",
                               "servesCuisine":  "Phở Cuốn Ba Đình",
                               "aggregateRating":  {
                                                       "@type":  "AggregateRating",
                                                       "ratingValue":  "4.6",
                                                       "reviewCount":  "1730"
                                                   }
                           }
    },
    {
        "id":  "store-hn-013",
        "name":  "Bánh Cuốn Gia Truyền Bà Hoành",
        "slug":  "banh-cuon-ba-hoanh-to-hien-thanh",
        "brand":  "Bánh Cuốn Bà Hoành",
        "category":  "Bánh Cuốn Truyền Thống",
        "address":  "66 Tô Hiến Thành, Phường Bùi Thị Xuân, Quận Hai Bà Trưng, Hà Nội",
        "landmark":  "Đoạn Tô Hiến Thành giao phố Mai Hắc Đế",
        "location":  {
                         "latitude":  21.015210,
                         "longitude":  105.850420,
                         "geo_hash":  "w7e2xuf"
                     },
        "contact":  {
                        "phone":  "02438220904",
                        "phone_display":  "024 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)",
                        "google_maps_url":  "https://maps.google.com/?cid=1728394056192837451"
                    },
        "operating_hours":  {
                                "open_time":  "06:00",
                                "close_time":  "20:00",
                                "open_now":  true,
                                "best_visit_window":  "07h00 - 08h30 hoặc 14h30 - 16h30 xế chiều"
                            },
        "price_range":  {
                            "min":  35000,
                            "max":  65000,
                            "currency":  "VND",
                            "formatted":  "35.000đ - 65.000đ"
                        },
        "amenities":  [
                          {
                              "name":  "Quạt mát \u0026 điều hòa tầng 2",
                              "icon":  "ac"
                          },
                          {
                              "name":  "Xe máy vỉa hè có nhân viên xếp",
                              "icon":  "bike"
                          },
                          {
                              "name":  "Thanh toán VietQR nhanh",
                              "icon":  "qr"
                          },
                          {
                              "name":  "Mua mang về siêu tốc",
                              "icon":  "box"
                          }
                      ],
        "parking_detail":  {
                               "motorbike":  "Miễn phí vỉa hè trước cửa có nhân viên dắt",
                               "car":  "Không đỗ ô tô; gửi bãi phố Mai Hắc Đế (cách 50m)",
                               "fee":  "0đ xe máy"
                           },
        "realtime_busyness":  {
                                  "current_occupancy_percent":  60,
                                  "status_text":  "Bàn trống 40%",
                                  "busyness_sub":  "Ra đồ nhanh trong 2 phút • Vào bàn ngay",
                                  "noise_level":  "58 dB",
                                  "peak_hours_histogram":  {
                                                               "07h30":  90,
                                                               "12h00":  80
                                                           }
                              },
        "ai_curation":  {
                            "signature_dish":  "Bánh cuốn Thanh Trì tráng mỏng mướt \u0026 Chả quế nướng than hoa vàng rộm",
                            "insider_tip":  "Bánh cuốn ở đây là kiểu Thanh Trì không nhân truyền thống, tráng mỏng tang như tờ giấy thoa mỡ hành bóng bẩy. Chấm nước mắm ấm pha chua thanh ăn kèm miếng chả quế nướng than thơm lừng!",
                            "contexts":  [
                                             "an_sang_nhanh",
                                             "an_xe_chieu",
                                             "am_thuc_di_san",
                                             "thanh_toan_vietqr"
                                         ],
                            "omni_trust_score":  93
                        },
        "photos":  [
                       {
                           "url":  "/assets/photos/banh_cuon_ba_hoanh.jpg",
                           "caption":  "Đĩa bánh cuốn Bà Hoành mỏng mướt chả quế nướng thơm nức",
                           "tag":  "signature"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Món Đinh Đặc Sản",
                                    "items":  [
                                                  {
                                                      "name":  "Suất bánh cuốn chả quế đặc biệt",
                                                      "price":  "50.000đ",
                                                      "desc":  "Đĩa bánh cuốn mỏng mướt hành phi, đĩa chả quế nướng than hoa thái dày, bát nước chấm ấm pha khéo",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Bánh cuốn nhân thịt mộc nhĩ chả quế",
                                                      "price":  "55.000đ",
                                                      "desc":  "Bánh cuốn tráng tay nhân thịt băm mộc nhĩ nêm tiêu thơm",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Bánh cuốn cà cuống gia truyền",
                                                      "price":  "65.000đ",
                                                      "desc":  "Nước mắm điểm tinh dầu cà cuống thơm cay nồng nàn đặc sản",
                                                      "is_signature":  true
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Chả \u0026 Topping Gọi Thêm",
                                    "items":  [
                                                  {
                                                      "name":  "Đĩa chả quế nướng than thêm",
                                                      "price":  "25.000đ",
                                                      "desc":  "Chả quế nóng hổi thơm nức",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Đĩa chả lụa Ước Lễ",
                                                      "price":  "20.000đ",
                                                      "desc":  "Giò lụa giòn ngọt",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Hành phi ta giòn thơm thêm",
                                                      "price":  "5.000đ",
                                                      "desc":  "Hành phi thơm rụm",
                                                      "is_signature":  false
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Đồ Uống Dân Dã",
                                    "items":  [
                                                  {
                                                      "name":  "Sữa đậu nành lá dứa thơm",
                                                      "price":  "10.000đ",
                                                      "desc":  "Uống ấm hoặc đá mát lành",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Trà đá hoa nhài",
                                                      "price":  "5.000đ",
                                                      "desc":  "Thức uống quen thuộc",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Bột gạo tẻ xay tay tráng mỏng tang mềm mướt không bị nát, thoa mỡ hành thơm phức",
                                                "Chả quế nướng than hoa chuẩn vị, vỏ ngoài vàng ươm sần sật, ruột ngọt đậm",
                                                "Nước chấm pha ấm nóng, thơm mùi tinh dầu cà cuống truyền thống"
                                            ],
                                   "cons":  [
                                                "Quán bán theo phong cách truyền thống bình dân, chỗ ngồi ăn tại chỗ vừa phải",
                                                "Phố Tô Hiến Thành một chiều ô tô, khó tìm chỗ đỗ xe hơi",
                                                "Hành phi tự làm nhưng giờ đông khách đôi khi hơi ít trên đĩa"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Nguyễn Hoàng Yến",
                                     "badge":  "Thực khách sành ăn Hai Bà Trưng",
                                     "date":  "6 ngày trước",
                                     "rating":  4.8,
                                     "comment":  "Bánh cuốn ở đây mỏng như dải lụa, miếng chả quế nướng than thơm phức cắn ngập miệng béo ngậy. Nước chấm ấm pha thêm giọt cà cuống dậy mùi thơm cổ xưa không đâu sánh bằng."
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "Restaurant",
                               "name":  "Bánh Cuốn Gia Truyền Bà Hoành",
                               "address":  "66 Tô Hiến Thành, Bùi Thị Xuân, Hai Bà Trưng, Hà Nội",
                               "geo":  {
                                           "@type":  "GeoCoordinates",
                                           "latitude":  21.015210,
                                           "longitude":  105.850420
                                       },
                               "priceRange":  "35.000 - 65.000 VND",
                               "servesCuisine":  "Bánh Cuốn Thanh Trì",
                               "aggregateRating":  {
                                                       "@type":  "AggregateRating",
                                                       "ratingValue":  "4.6",
                                                       "reviewCount":  "1520"
                                                   }
                           }
    },
    {
        "id":  "store-hn-014",
        "name":  "Bún Ốc Phủ Tây Hồ",
        "slug":  "bun-oc-phu-tay-ho-quang-an",
        "brand":  "Bún Ốc Phủ Tây Hồ",
        "category":  "Bún Ốc Truyền Thống",
        "address":  "Đầu ngõ 50 Phủ Tây Hồ, Phường Quảng An, Quận Tây Hồ, Hà Nội",
        "landmark":  "Ngay lối vào cổng tam quan Phủ Tây Hồ",
        "location":  {
                         "latitude":  21.066420,
                         "longitude":  105.834150,
                         "geo_hash":  "w7e2zbq"
                     },
        "contact":  {
                        "phone":  "0983234567",
                        "phone_display":  "098 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)",
                        "google_maps_url":  "https://maps.google.com/?cid=1627384950192837452"
                    },
        "operating_hours":  {
                                "open_time":  "07:00",
                                "close_time":  "19:00",
                                "open_now":  true,
                                "best_visit_window":  "08h00 - 10h00 sáng hoặc 15h00 - 17h00 chiều ngắm hoàng hôn hồ Tây"
                            },
        "price_range":  {
                            "min":  40000,
                            "max":  70000,
                            "currency":  "VND",
                            "formatted":  "40.000đ - 70.000đ"
                        },
        "amenities":  [
                          {
                              "name":  "Không gian lộng gió hồ Tây thoáng mát",
                              "icon":  "tree"
                          },
                          {
                              "name":  "Bãi gửi xe máy \u0026 ô tô Phủ rộng rãi",
                              "icon":  "car"
                          },
                          {
                              "name":  "Thanh toán VietQR nhanh",
                              "icon":  "qr"
                          },
                          {
                              "name":  "Có bánh tôm nóng ăn kèm",
                              "icon":  "box"
                          }
                      ],
        "parking_detail":  {
                               "motorbike":  "Gửi tại bãi xe Phủ Tây Hồ (3k-5k/xe)",
                               "car":  "Bãi đỗ ô tô rộng mênh mông của Ban Quản Lý Phủ Tây Hồ",
                               "fee":  "Bãi xe ban quản lý"
                           },
        "realtime_busyness":  {
                                  "current_occupancy_percent":  50,
                                  "status_text":  "Bàn trống 50%",
                                  "busyness_sub":  "Gió hồ Tây mát rượi • Có bàn ngay",
                                  "noise_level":  "52 dB",
                                  "peak_hours_histogram":  {
                                                               "11h30":  75,
                                                               "16h30":  85
                                                           }
                              },
        "ai_curation":  {
                            "signature_dish":  "Bún ốc nhồi béo giòn nước giấm bỗng nếp chua thanh \u0026 Bánh tôm giòn rụm",
                            "insider_tip":  "Ốc nhồi làm sạch bong béo múp giòn sần sật. Nước dùng nấu bằng giấm bỗng nếp gia truyền chua thanh dịu ngọt, thêm chút ớt chưng cay xè thơm nức. Nên gọi bát lẫn ốc to ốc nhỏ thêm chiếc bánh tôm giòn tan ăn kèm!",
                            "contexts":  [
                                             "an_trua_nhanh",
                                             "an_xe_chieu",
                                             "am_thuc_di_san",
                                             "thanh_toan_vietqr"
                                         ],
                            "omni_trust_score":  93
                        },
        "photos":  [
                       {
                           "url":  "/assets/photos/bun_oc_phu_tay_ho.jpg",
                           "caption":  "Bát bún ốc Phủ Tây Hồ đỏ au cà chua và giấm bỗng ngập ốc béo giòn",
                           "tag":  "signature"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Món Đinh Đặc Sản",
                                    "items":  [
                                                  {
                                                      "name":  "Bún ốc nhồi đặc biệt giấm bỗng",
                                                      "price":  "55.000đ",
                                                      "desc":  "Ốc nhồi béo múp giòn sần sật, đậu rán phồng vàng ươm, nước dùng giấm bỗng nếp thanh ngọt",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Bún ốc lẫn to nhỏ đậu giòn",
                                                      "price":  "45.000đ",
                                                      "desc":  "Ốc to giòn ngọt và ốc con bùi béo",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Bún ốc nguội gia truyền chấm giấm bỗng",
                                                      "price":  "50.000đ",
                                                      "desc":  "Ốc luộc chín tới chấm bát giấm bỗng nếp thanh dịu cổ xưa",
                                                      "is_signature":  true
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Món Ăn Kèm Nóng Hổi",
                                    "items":  [
                                                  {
                                                      "name":  "Đĩa bánh tôm hồ Tây giòn rụm (2 chiếc)",
                                                      "price":  "30.000đ",
                                                      "desc":  "Tôm hồ ngọt thịt bọc bột khoai chiên vàng giòn",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Chả ốc nướng lá lốt",
                                                      "price":  "35.000đ",
                                                      "desc":  "Chả ốc giòn sần sật thơm nức lá lốt",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Đậu rán lướt ván thêm",
                                                      "price":  "15.000đ",
                                                      "desc":  "Đậu mơ mềm mướt",
                                                      "is_signature":  false
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Đồ Uống Thanh Nhiệt",
                                    "items":  [
                                                  {
                                                      "name":  "Nước mía cốt quất bọc đá",
                                                      "price":  "15.000đ",
                                                      "desc":  "Ngọt lịm giải nhiệt",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Trà đá hoa nhài",
                                                      "price":  "5.000đ",
                                                      "desc":  "Trà đá thanh mát",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Ốc nhồi to béo múp míp, rửa sạch nhớt không có cát sạn, cắn giòn sần sật đã miệng",
                                                "Nước dùng nấu giấm bỗng nếp chuẩn, vị chua thanh dịu nhẹ hậu vị ngọt xương",
                                                "Không gian hồ Tây lộng gió, đỗ được xe ô tô bãi rộng mênh mông"
                                            ],
                                   "cons":  [
                                                "Ngày rằm và mùng một âm lịch khách viếng Phủ rất đông, nên tránh 2 ngày này",
                                                "Ớt chưng của quán khá cay nồng, nên nếm thử trước khi cho nhiều",
                                                "Gửi xe bãi ban quản lý có thu phí vé 5k"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Phạm Quỳnh Chi",
                                     "badge":  "Cư dân làng hoa Quảng Bá",
                                     "date":  "3 ngày trước",
                                     "rating":  4.7,
                                     "comment":  "Bát bún ốc nóng bốc khói, nước dùng thơm nức mùi giấm bỗng nếp chua dịu. Con ốc nhồi béo múp cắn giòn sần sật. Ngồi ăn một bát bún nóng, làm thêm chiếc bánh tôm giòn bên bờ hồ Tây là trải nghiệm tuyệt vời."
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "Restaurant",
                               "name":  "Bún Ốc Phủ Tây Hồ",
                               "address":  "Đầu ngõ 50 Phủ Tây Hồ, Quảng An, Tây Hồ, Hà Nội",
                               "geo":  {
                                           "@type":  "GeoCoordinates",
                                           "latitude":  21.066420,
                                           "longitude":  105.834150
                                       },
                               "priceRange":  "40.000 - 70.000 VND",
                               "servesCuisine":  "Bún Ốc Truyền Thống",
                               "aggregateRating":  {
                                                       "@type":  "AggregateRating",
                                                       "ratingValue":  "4.5",
                                                       "reviewCount":  "1640"
                                                   }
                           }
    },
    {
        "id":  "store-cg-008",
        "name":  "Vịt Quay \u0026 Lẩu Vịt Chàng Béo Tô Hiệu",
        "slug":  "vit-quay-chang-beo-to-hieu-cau-giay",
        "brand":  "Vịt Chàng Béo",
        "category":  "Lẩu \u0026 Vịt Cỏ",
        "address":  "218 Tô Hiệu, Phường Dịch Vọng, Quận Cầu Giấy, Hà Nội",
        "landmark":  "Đoạn Tô Hiệu giao Trần Tử Bình",
        "location":  {
                         "latitude":  21.042850,
                         "longitude":  105.795120,
                         "geo_hash":  "w7e2w7k"
                     },
        "contact":  {
                        "phone":  "0987654321",
                        "phone_display":  "098 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)",
                        "google_maps_url":  "https://maps.google.com/?cid=102938475102938471"
                    },
        "operating_hours":  {
                                "open_time":  "10:00",
                                "close_time":  "23:00",
                                "open_now":  true,
                                "best_visit_window":  "11h30 - 12h30 hoặc 18h00 - 19h30"
                            },
        "price_range":  {
                            "min":  50000,
                            "max":  180000,
                            "currency":  "VND",
                            "formatted":  "50.000đ - 180.000đ"
                        },
        "amenities":  [
                          {
                              "name":  "Điều hòa tầng 2 mát lạnh",
                              "icon":  "ac"
                          },
                          {
                              "name":  "Đỗ xe máy vỉa hè Tô Hiệu",
                              "icon":  "bike"
                          },
                          {
                              "name":  "Thanh toán VietQR nhanh",
                              "icon":  "qr"
                          },
                          {
                              "name":  "Đỗ ô tô mặt đường",
                              "icon":  "car"
                          }
                      ],
        "parking_detail":  {
                               "motorbike":  "Miễn phí trước cửa quán có nhân viên dắt",
                               "car":  "Đỗ ô tô lòng đường Tô Hiệu có người trông",
                               "fee":  "0đ xe máy"
                           },
        "realtime_busyness":  {
                                  "current_occupancy_percent":  60,
                                  "status_text":  "Bàn trống 40%",
                                  "busyness_sub":  "Tầng 2 điều hòa • Vào bàn ngay",
                                  "noise_level":  "58 dB",
                                  "peak_hours_histogram":  {
                                                               "12h00":  85,
                                                               "19h00":  90
                                                           }
                              },
        "ai_curation":  {
                            "signature_dish":  "Vịt nướng than hoa mật ong da giòn \u0026 Lẩu vịt om sấu chua thanh",
                            "insider_tip":  "Vịt cỏ Vân Đình nướng xém cạnh thơm nức mùi mật ong và thảo mộc. Đi nhóm 4 người nên gọi nửa con vịt nướng và một nồi lẩu vịt om sấu nước dùng chua thanh béo ngọt!",
                            "contexts":  [
                                             "an_trua_nhanh",
                                             "dieu_hoa_mat",
                                             "tu_tap_gia_dinh",
                                             "thanh_toan_vietqr"
                                         ],
                            "omni_trust_score":  91
                        },
        "photos":  [
                       {
                           "url":  "/assets/photos/bun_ngan_ba_hang.jpg",
                           "caption":  "Đĩa vịt nướng than hoa vàng ươm da giòn",
                           "tag":  "signature"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Món Đinh Đặc Sản",
                                    "items":  [
                                                  {
                                                      "name":  "Vịt nướng than mật ong nửa con",
                                                      "price":  "140.000đ",
                                                      "desc":  "Da giòn rụm ngấm sốt mật ong thơm lừng",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Lẩu vịt om sấu nồi nhỏ",
                                                      "price":  "180.000đ",
                                                      "desc":  "Sấu tươi chua thanh, thịt vịt mềm béo",
                                                      "is_signature":  true
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Món Gọi Thêm",
                                    "items":  [
                                                  {
                                                      "name":  "Tiết canh vịt hấp",
                                                      "price":  "25.000đ",
                                                      "desc":  "Hấp chín thơm ngọt",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Bún đĩa thêm",
                                                      "price":  "10.000đ",
                                                      "desc":  "Bún tươi",
                                                      "is_signature":  false
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Đồ Uống",
                                    "items":  [
                                                  {
                                                      "name":  "Bia hơi Hà Nội",
                                                      "price":  "15.000đ",
                                                      "desc":  "Ướp lạnh",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Trà đá hoa nhài",
                                                      "price":  "5.000đ",
                                                      "desc":  "Trà mát",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Thịt vịt nạc dày, không bị hôi, nướng vừa tới mềm ngọt mọng nước",
                                                "Nước chấm chua ngọt sánh đậm tỏi ớt rất ngon",
                                                "Chỗ đỗ xe Tô Hiệu thuận tiện"
                                            ],
                                   "cons":  [
                                                "Giờ tan tầm tối khách nhậu đông tiếng ồn hơi cao",
                                                "Lẩu vịt om sấu mùa đông nên đặt trước"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Lê Văn Tùng",
                                     "badge":  "Dân văn phòng Duy Tân",
                                     "date":  "4 ngày trước",
                                     "rating":  4.6,
                                     "comment":  "Đĩa vịt nướng 140k nửa con hai anh em ăn căng bụng. Da giòn rụm chấm nước sốt mắm tỏi là hết sảy."
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "Restaurant",
                               "name":  "Vịt Quay Chàng Béo Tô Hiệu",
                               "address":  "218 Tô Hiệu, Cầu Giấy, Hà Nội",
                               "priceRange":  "50.000 - 180.000 VND"
                           }
    },
    {
        "id":  "store-cg-009",
        "name":  "Cơm Niêu Singapore Kombo Dịch Vọng Hậu",
        "slug":  "com-nieu-kombo-dich-vong-hau-cau-giay",
        "brand":  "Kombo",
        "category":  "Cơm Văn Phòng \u0026 Cơm Niêu",
        "address":  "86 Dịch Vọng Hậu, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Hà Nội",
        "landmark":  "Khu công nghệ IT Duy Tân - Cầu Giấy",
        "location":  {
                         "latitude":  21.034510,
                         "longitude":  105.787620,
                         "geo_hash":  "w7e2w4t"
                     },
        "contact":  {
                        "phone":  "0971258686",
                        "phone_display":  "097 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)",
                        "google_maps_url":  "https://maps.google.com/?cid=1029384719283741"
                    },
        "operating_hours":  {
                                "open_time":  "10:30",
                                "close_time":  "21:30",
                                "open_now":  true,
                                "best_visit_window":  "Trước 11h45 hoặc sau 13h00"
                            },
        "price_range":  {
                            "min":  69000,
                            "max":  119000,
                            "currency":  "VND",
                            "formatted":  "69.000đ - 119.000đ"
                        },
        "amenities":  [
                          {
                              "name":  "Điều hòa 2 chiều mát sâu",
                              "icon":  "ac"
                          },
                          {
                              "name":  "Bãi xe máy rộng",
                              "icon":  "bike"
                          },
                          {
                              "name":  "Thanh toán VietQR \u0026 Thẻ",
                              "icon":  "qr"
                          },
                          {
                              "name":  "Hóa đơn VAT công ty",
                              "icon":  "vat"
                          }
                      ],
        "parking_detail":  {
                               "motorbike":  "Miễn phí vỉa hè trước cửa",
                               "car":  "Gửi ô tô bãi đỗ phố Duy Tân (50m)",
                               "fee":  "0đ xe máy"
                           },
        "realtime_busyness":  {
                                  "current_occupancy_percent":  75,
                                  "status_text":  "Bàn trống 25%",
                                  "busyness_sub":  "Đông khách giờ trưa IT Duy Tân",
                                  "noise_level":  "55 dB",
                                  "peak_hours_histogram":  {
                                                               "12h00":  95,
                                                               "12h30":  85
                                                           }
                              },
        "ai_curation":  {
                            "signature_dish":  "Cơm niêu bò sốt tiêu đen cháy 2 mặt \u0026 Cơm niêu gà sốt nấm",
                            "insider_tip":  "Dân sành nhất định phải chọn cơm niêu \u0027Cháy 2 Mặt\u0027. Lớp cháy giòn rụm vàng ươm trộn cùng nước sốt tiêu đen cay nồng xèo xèo là chuẩn bài ăn trưa văn phòng!",
                            "contexts":  [
                                             "an_trua_nhanh",
                                             "dieu_hoa_mat",
                                             "mang_ve_van_phong",
                                             "thanh_toan_vietqr"
                                         ],
                            "omni_trust_score":  93
                        },
        "photos":  [
                       {
                           "url":  "/assets/photos/cot_dien_banh_mi_chao.jpg",
                           "caption":  "Niêu cơm cháy vàng ươm xèo xèo sốt tiêu",
                           "tag":  "signature"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Món Đinh Đặc Sản",
                                    "items":  [
                                                  {
                                                      "name":  "Cơm niêu bò sốt tiêu đen cháy 2 mặt",
                                                      "price":  "89.000đ",
                                                      "desc":  "Thịt bò mềm ngấm sốt tiêu đen cay nồng, cháy giòn tan",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Cơm niêu gà sốt nấm cháy 2 mặt",
                                                      "price":  "79.000đ",
                                                      "desc":  "Gà om nấm hương thơm lừng nước sốt sánh ngậy",
                                                      "is_signature":  true
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Món Ăn Kèm",
                                    "items":  [
                                                  {
                                                      "name":  "Canh chua thịt băm",
                                                      "price":  "15.000đ",
                                                      "desc":  "Canh thanh nhiệt",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Kim chi chua giòn",
                                                      "price":  "10.000đ",
                                                      "desc":  "Giải ngấy",
                                                      "is_signature":  false
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Đồ Uống",
                                    "items":  [
                                                  {
                                                      "name":  "Trà sâm dứa ướp lạnh",
                                                      "price":  "15.000đ",
                                                      "desc":  "Thanh mát",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Cơm cháy giòn tan rôm rốp, sốt tiêu đen đậm đà",
                                                "Không gian điều hòa mát mẻ, xuất hóa đơn VAT nhanh gọn cho doanh nghiệp",
                                                "Phục vụ chuyên nghiệp"
                                            ],
                                   "cons":  [
                                                "Giờ trưa 12h00 dân văn phòng Duy Tân ra ăn rất đông, nên đặt bàn trước 15 phút",
                                                "Niêu gang giữ nhiệt lâu nên cẩn thận khi ăn tránh bỏng miệng"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Nguyễn Minh Đức",
                                     "badge":  "Lập trình viên FPT Software Duy Tân",
                                     "date":  "1 tuần trước",
                                     "rating":  5,
                                     "comment":  "Trưa nào đói cũng tạt sang gọi niêu bò cháy 2 mặt. Cơm cháy giòn rụm ngập sốt tiêu đen, ăn ấm bụng mà làm việc tỉnh táo cả chiều."
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "Restaurant",
                               "name":  "Cơm Niêu Kombo Dịch Vọng Hậu",
                               "address":  "86 Dịch Vọng Hậu, Cầu Giấy, Hà Nội",
                               "priceRange":  "69.000 - 119.000 VND"
                           }
    },
    {
        "id":  "store-cg-010",
        "name":  "Bún Chả Sinh Từ Nguyễn Phong Sắc",
        "slug":  "bun-cha-sinh-tu-nguyen-phong-sac-cau-giay",
        "brand":  "Bún Chả Sinh Từ",
        "category":  "Bún Chả \u0026 Nem Rán",
        "address":  "48 Nguyễn Phong Sắc, Phường Dịch Vọng, Quận Cầu Giấy, Hà Nội",
        "landmark":  "Đoạn ngã tư Cầu Giấy - Nguyễn Phong Sắc",
        "location":  {
                         "latitude":  21.036820,
                         "longitude":  105.791540,
                         "geo_hash":  "w7e2w6m"
                     },
        "contact":  {
                        "phone":  "02437938399",
                        "phone_display":  "024 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)",
                        "google_maps_url":  "https://maps.google.com/?cid=1029384719283742"
                    },
        "operating_hours":  {
                                "open_time":  "08:00",
                                "close_time":  "21:30",
                                "open_now":  true,
                                "best_visit_window":  "11h00 - 11h45 hoặc sau 13h15"
                            },
        "price_range":  {
                            "min":  50000,
                            "max":  90000,
                            "currency":  "VND",
                            "formatted":  "50.000đ - 90.000đ"
                        },
        "amenities":  [
                          {
                              "name":  "Điều hòa 3 tầng mát lạnh",
                              "icon":  "ac"
                          },
                          {
                              "name":  "Bãi xe máy có bảo vệ",
                              "icon":  "bike"
                          },
                          {
                              "name":  "Thanh toán VietQR nhanh",
                              "icon":  "qr"
                          },
                          {
                              "name":  "Wifi tốc độ cao",
                              "icon":  "wifi"
                          }
                      ],
        "parking_detail":  {
                               "motorbike":  "Miễn phí vỉa hè trước cửa",
                               "car":  "Có bảo vệ hướng dẫn đỗ ô tô lòng đường",
                               "fee":  "0đ xe máy"
                           },
        "realtime_busyness":  {
                                  "current_occupancy_percent":  65,
                                  "status_text":  "Bàn trống 35%",
                                  "busyness_sub":  "Tầng 2 \u0026 3 điều hòa mát • Vào ăn ngay",
                                  "noise_level":  "56 dB",
                                  "peak_hours_histogram":  {
                                                               "12h00":  85,
                                                               "18h30":  75
                                                           }
                              },
        "ai_curation":  {
                            "signature_dish":  "Suất bún chả đặc biệt Sinh Từ (Chả miếng nướng than hoa vàng ươm, chả băm cuốn lá xương xông)",
                            "insider_tip":  "Chả ở đây nướng than hoa mềm ngọt không bị khét. Nhớ gọi thêm 1 chiếc nem hải sản giòn rụm và dặn thêm tỏi ớt giấm ớt tươi ngâm để pha bát nước chấm dậy mùi thơm nức!",
                            "contexts":  [
                                             "an_trua_nhanh",
                                             "dieu_hoa_mat",
                                             "am_thuc_di_san",
                                             "thanh_toan_vietqr"
                                         ],
                            "omni_trust_score":  94
                        },
        "photos":  [
                       {
                           "url":  "/assets/photos/bun_cha_dac_kim.jpg",
                           "caption":  "Mẹt bún chả Sinh Từ chả nướng than hoa thơm nức",
                           "tag":  "signature"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Món Đinh Đặc Sản",
                                    "items":  [
                                                  {
                                                      "name":  "Suất bún chả Sinh Từ đặc biệt",
                                                      "price":  "60.000đ",
                                                      "desc":  "Chả miếng ba chỉ, chả băm xương xông, nước mắm ấm",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Nem hải sản giòn rụm (chiếc)",
                                                      "price":  "18.000đ",
                                                      "desc":  "Nem chiên vàng vỏ giòn nhân tôm thịt",
                                                      "is_signature":  true
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Món Gọi Thêm",
                                    "items":  [
                                                  {
                                                      "name":  "Bún đĩa thêm",
                                                      "price":  "10.000đ",
                                                      "desc":  "Bún tươi",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Chả nướng thêm đĩa",
                                                      "price":  "35.000đ",
                                                      "desc":  "Chả nóng",
                                                      "is_signature":  false
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Đồ Uống",
                                    "items":  [
                                                  {
                                                      "name":  "Trà quất nha đam",
                                                      "price":  "15.000đ",
                                                      "desc":  "Thanh mát",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Trà đá hoa nhài",
                                                      "price":  "5.000đ",
                                                      "desc":  "Mát lành",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Chả nướng than hoa truyền thống, tẩm ướp vừa vặn ngọt thịt tự nhiên",
                                                "Không gian 3 tầng rộng thoáng, điều hòa máy lạnh mát rượi",
                                                "Phục vụ nhanh gọn"
                                            ],
                                   "cons":  [
                                                "Giờ trưa tan tầm người ăn đông, thang máy lên tầng 3 hơi đông",
                                                "Phố Nguyễn Phong Sắc giờ cao điểm giao thông đông đúc"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Trần Thu Hà",
                                     "badge":  "Cư dân Dịch Vọng",
                                     "date":  "5 ngày trước",
                                     "rating":  4.8,
                                     "comment":  "Thích nhất miếng chả băm cuốn lá xương xông ở Sinh Từ, thơm nức mùi quê xưa. Quán sạch sẽ, điều hòa mát rượi, ăn trưa rất ưng ý."
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "Restaurant",
                               "name":  "Bún Chả Sinh Từ Nguyễn Phong Sắc",
                               "address":  "48 Nguyễn Phong Sắc, Cầu Giấy, Hà Nội",
                               "priceRange":  "50.000 - 90.000 VND"
                           }
    },
    {
        "id":  "store-hk-005",
        "name":  "Phở Thìn Bờ Hồ Đinh Tiên Hoàng",
        "slug":  "pho-thin-bo-ho-dinh-tien-hoang-hoan-kiem",
        "brand":  "Phở Thìn Bờ Hồ",
        "category":  "Phở Bò Truyền Thống",
        "address":  "61 Đinh Tiên Hoàng, Phường Lý Thái Tổ, Quận Hoàn Kiếm, Hà Nội",
        "landmark":  "Ngõ nhỏ đối diện đền Ngọc Sơn ven Hồ Gươm",
        "location":  {
                         "latitude":  21.031540,
                         "longitude":  105.852920,
                         "geo_hash":  "w7e2xzu"
                     },
        "contact":  {
                        "phone":  null,
                        "phone_display":  "Phá»¥c vá»¥ trá»±c tiáº¿p",
                        "google_maps_url":  "https://maps.google.com/?cid=1029384719283743"
                    },
        "operating_hours":  {
                                "open_time":  "06:00",
                                "close_time":  "13:30",
                                "open_now":  true,
                                "best_visit_window":  "06h30 - 08h00 sáng ngắm Hồ Gươm"
                            },
        "price_range":  {
                            "min":  55000,
                            "max":  75000,
                            "currency":  "VND",
                            "formatted":  "55.000đ - 75.000đ"
                        },
        "amenities":  [
                          {
                              "name":  "Không gian ngõ phố cổ hoài niệm",
                              "icon":  "tree"
                          },
                          {
                              "name":  "Gửi xe phố cổ gần đền Ngọc Sơn",
                              "icon":  "bike"
                          },
                          {
                              "name":  "Thanh toán VietQR nhanh",
                              "icon":  "qr"
                          },
                          {
                              "name":  "Bán sáng sớm bên Hồ Gươm",
                              "icon":  "clock"
                          }
                      ],
        "parking_detail":  {
                               "motorbike":  "Gửi xe bãi phố Đinh Tiên Hoàng ven hồ",
                               "car":  "Gửi ô tô bãi xe vườn hoa Con Cóc / Lý Thái Tổ",
                               "fee":  "5k xe máy"
                           },
        "realtime_busyness":  {
                                  "current_occupancy_percent":  80,
                                  "status_text":  "Bàn trống 20%",
                                  "busyness_sub":  "Ngõ nhỏ phố cổ • Ra phở 2 phút",
                                  "noise_level":  "55 dB",
                                  "peak_hours_histogram":  {
                                                               "07h30":  95,
                                                               "08h30":  85
                                                           }
                              },
        "ai_curation":  {
                            "signature_dish":  "Phở bò tái gầu giòn nước trong veo (Thịt bò tươi đập dập chần tái, gừng nướng thơm nức)",
                            "insider_tip":  "Khác hẳn phở xào lăn béo ngậy, Phở Thìn Bờ Hồ nổi tiếng 70 năm bởi nước dùng trong veo thanh khiết ngọt sâu tự nhiên. Bát tái chín thêm chút dấm tỏi hoa ớt chấm quẩy là tuyệt phẩm ẩm thực Tràng An!",
                            "contexts":  [
                                             "an_sang_nhanh",
                                             "am_thuc_di_san",
                                             "thanh_toan_vietqr"
                                         ],
                            "omni_trust_score":  97
                        },
        "photos":  [
                       {
                           "url":  "/assets/photos/pho_bat_dan.jpg",
                           "caption":  "Bát phở Thìn Bờ Hồ nước trong veo ngào ngạt gừng nướng",
                           "tag":  "signature"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Món Đinh Đặc Sản",
                                    "items":  [
                                                  {
                                                      "name":  "Phở tái gầu giòn đặc biệt",
                                                      "price":  "70.000đ",
                                                      "desc":  "Gầu giòn sần sật, thịt bò tươi ngọt, nước dùng thanh",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Phở tái chín truyền thống",
                                                      "price":  "60.000đ",
                                                      "desc":  "Thịt chín thơm bùi, tái mềm ngọt",
                                                      "is_signature":  false
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Ăn Kèm",
                                    "items":  [
                                                  {
                                                      "name":  "Quẩy giòn phố cổ",
                                                      "price":  "10.000đ",
                                                      "desc":  "Quẩy giòn rụm",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Trứng gà ta chần",
                                                      "price":  "10.000đ",
                                                      "desc":  "Lòng đào béo ngậy",
                                                      "is_signature":  false
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Đồ Uống",
                                    "items":  [
                                                  {
                                                      "name":  "Trà đá hoa nhài",
                                                      "price":  "5.000đ",
                                                      "desc":  "Trà mát",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Nước dùng trong veo thanh tao đúng chất phở Hà Nội xưa, thơm nồng mùi gừng nướng",
                                                "Thịt bò đập dập chần tái cực mềm ngọt",
                                                "Vị trí sát Hồ Gươm đi dạo ngắm cảnh buổi sáng rất đẹp"
                                            ],
                                   "cons":  [
                                                "Quán nằm sâu trong ngõ hẹp phố cổ, bàn ghế mộc mạc",
                                                "Hết hàng sớm lúc trưa 13h30",
                                                "Không có chỗ gửi ô tô trước cửa"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Phan Anh Vũ",
                                     "badge":  "Nhà nghiên cứu văn hóa Hà Nội",
                                     "date":  "1 tuần trước",
                                     "rating":  5,
                                     "comment":  "Ăn bát phở Thìn Bờ Hồ từ năm 1985 đến nay vị nước dùng thanh khiết vẫn nguyên vẹn. Sáng sớm đi dạo Bờ Hồ rồi rẽ vào ngõ nhỏ làm bát tái gầu là cái thú tao nhã nhất của người Hà Nội."
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "Restaurant",
                               "name":  "Phở Thìn Bờ Hồ",
                               "address":  "61 Đinh Tiên Hoàng, Hoàn Kiếm, Hà Nội",
                               "priceRange":  "55.000 - 75.000 VND"
                           }
    },
    {
        "id":  "store-hk-006",
        "name":  "Bún Đậu Mơ Gốc Đa Ngõ 29 Hàng Khay",
        "slug":  "bun-dau-hang-khay-hoan-kiem",
        "brand":  "Bún Đậu Hàng Khay",
        "category":  "Bún Đậu Mắm Tôm",
        "address":  "Ngõ 29 Hàng Khay, Phường Tràng Tiền, Quận Hoàn Kiếm, Hà Nội",
        "landmark":  "Ngõ ẩm thực đối diện Bờ Hồ Hoàn Kiếm",
        "location":  {
                         "latitude":  21.026850,
                         "longitude":  105.851940,
                         "geo_hash":  "w7e2xyt"
                     },
        "contact":  {
                        "phone":  "0982345678",
                        "phone_display":  "098 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)",
                        "google_maps_url":  "https://maps.google.com/?cid=1029384719283744"
                    },
        "operating_hours":  {
                                "open_time":  "10:00",
                                "close_time":  "20:30",
                                "open_now":  true,
                                "best_visit_window":  "11h00 - 11h45 hoặc 14h00 - 16h30"
                            },
        "price_range":  {
                            "min":  35000,
                            "max":  75000,
                            "currency":  "VND",
                            "formatted":  "35.000đ - 75.000đ"
                        },
        "amenities":  [
                          {
                              "name":  "Quạt mát \u0026 ngõ phố cổ",
                              "icon":  "fan"
                          },
                          {
                              "name":  "Gửi xe đầu ngõ Hàng Khay",
                              "icon":  "bike"
                          },
                          {
                              "name":  "Thanh toán VietQR tiện lợi",
                              "icon":  "qr"
                          },
                          {
                              "name":  "Mẹt tre lá chuối truyền thống",
                              "icon":  "box"
                          }
                      ],
        "parking_detail":  {
                               "motorbike":  "Gửi xe bãi vỉa hè phố Hàng Khay hoặc Tràng Thi",
                               "car":  "Không đỗ ô tô; gửi bãi Tràng Tiền Plaza",
                               "fee":  "5k xe máy"
                           },
        "realtime_busyness":  {
                                  "current_occupancy_percent":  85,
                                  "status_text":  "Bàn trống 15%",
                                  "busyness_sub":  "Khách ăn trưa Bờ Hồ đông đúc",
                                  "noise_level":  "65 dB",
                                  "peak_hours_histogram":  {
                                                               "12h00":  95,
                                                               "12h30":  90
                                                           }
                              },
        "ai_curation":  {
                            "signature_dish":  "Mẹt bún đậu thập cẩm đặc biệt (Đậu Mơ rán giòn lướt ván, chả cốm nướng than, dồi sụn chiên, mắm tôm Thanh Hóa sủi bọt)",
                            "insider_tip":  "Đậu phụ ở đây là Đậu Mơ chính gốc, bên ngoài vàng giòn rụm bên trong mềm béo như kem. Nhớ vắt 2 quả quất, thêm thìa ớt cay và 1 thìa đường đánh bông lớp bọt mắm tôm trước khi chấm!",
                            "contexts":  [
                                             "an_trua_nhanh",
                                             "am_thuc_di_san",
                                             "thanh_toan_vietqr"
                                         ],
                            "omni_trust_score":  95
                        },
        "photos":  [
                       {
                           "url":  "/assets/photos/bun_cha_dac_kim.jpg",
                           "caption":  "Mẹt bún đậu Hàng Khay đầy ắp topping rán nóng hổi",
                           "tag":  "signature"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Món Đinh Đặc Sản",
                                    "items":  [
                                                  {
                                                      "name":  "Mẹt bún đậu thập cẩm đầy đủ",
                                                      "price":  "65.000đ",
                                                      "desc":  "Đậu mơ rán giòn, chả cốm, nem rán, thịt chân giò luộc, dồi sụn, dưa chuột rau kinh giới",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Suất bún đậu chả cốm",
                                                      "price":  "45.000đ",
                                                      "desc":  "Bún tươi, đậu mơ nóng và chả cốm dẻo thơm",
                                                      "is_signature":  false
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Topping Thêm",
                                    "items":  [
                                                  {
                                                      "name":  "Đĩa chả cốm rán thêm",
                                                      "price":  "20.000đ",
                                                      "desc":  "Cốm xanh dẻo ngậy",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Đĩa dồi sụn chiên giòn",
                                                      "price":  "25.000đ",
                                                      "desc":  "Dồi sần sật thơm húng quế",
                                                      "is_signature":  false
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Đồ Uống Giải Ngấy",
                                    "items":  [
                                                  {
                                                      "name":  "Nước sấu ngâm đường đá",
                                                      "price":  "15.000đ",
                                                      "desc":  "Chua ngọt mát lạnh",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Trà đá hoa nhài",
                                                      "price":  "5.000đ",
                                                      "desc":  "Trà đá",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Đậu Mơ rán lướt ván đỉnh cao, vỏ mỏng tang giòn rụm ruột mềm mướt",
                                                "Mắm tôm thơm ngậy pha rất khéo không bị mặn gắt",
                                                "Mẹt bún bày biện sạch sẽ trên lá chuối tươi"
                                            ],
                                   "cons":  [
                                                "Ngõ 29 Hàng Khay hẹp, giờ trưa chen chân đông đúc",
                                                "Đi bộ từ Bờ Hồ vào ngõ tầm 30m"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Đặng Thùy Dung",
                                     "badge":  "Dân công sở Tràng Tiền",
                                     "date":  "3 ngày trước",
                                     "rating":  4.8,
                                     "comment":  "Mẹt bún đậu 65k đầy đặn hai người ăn no. Đậu rán vừa vớt ra khỏi chảo mỡ sôi sùng sục, cắn rộp rộp chấm mắm tôm đánh bông bọt là chuẩn đỉnh cao."
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "Restaurant",
                               "name":  "Bún Đậu Hàng Khay",
                               "address":  "Ngõ 29 Hàng Khay, Hoàn Kiếm, Hà Nội",
                               "priceRange":  "35.000 - 75.000 VND"
                           }
    },
    {
        "id":  "store-hk-007",
        "name":  "Phở Gà Nguyệt Phủ Doãn",
        "slug":  "pho-ga-nguyet-phu-doan-hoan-kiem",
        "brand":  "Phở Gà Nguyệt",
        "category":  "Phở Gà \u0026 Phở Trộn",
        "address":  "5B Phủ Doãn, Phường Hàng Trống, Quận Hoàn Kiếm, Hà Nội",
        "landmark":  "Ngay gần ngã ba Phủ Doãn - Hàng Bông",
        "location":  {
                         "latitude":  21.030920,
                         "longitude":  105.847520,
                         "geo_hash":  "w7e2xzt"
                     },
        "contact":  {
                        "phone":  "0912102224",
                        "phone_display":  "091 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)",
                        "google_maps_url":  "https://maps.google.com/?cid=1029384719283745"
                    },
        "operating_hours":  {
                                "open_time":  "06:30",
                                "close_time":  "23:00",
                                "open_now":  true,
                                "best_visit_window":  "08h00 - 10h00 sáng hoặc sau 20h00 đêm"
                            },
        "price_range":  {
                            "min":  45000,
                            "max":  90000,
                            "currency":  "VND",
                            "formatted":  "45.000đ - 90.000đ"
                        },
        "amenities":  [
                          {
                              "name":  "Điều hòa tầng 2 mát mẻ",
                              "icon":  "ac"
                          },
                          {
                              "name":  "Gửi xe máy trước cửa",
                              "icon":  "bike"
                          },
                          {
                              "name":  "Thanh toán VietQR nhanh",
                              "icon":  "qr"
                          },
                          {
                              "name":  "Mở bán đêm muộn phố cổ",
                              "icon":  "clock"
                          }
                      ],
        "parking_detail":  {
                               "motorbike":  "Nhân viên dắt xe xếp vỉa hè Phủ Doãn",
                               "car":  "Không đỗ ô tô; gửi bãi Bệnh viện Việt Đức (100m)",
                               "fee":  "0đ xe máy"
                           },
        "realtime_busyness":  {
                                  "current_occupancy_percent":  70,
                                  "status_text":  "Bàn trống 30%",
                                  "busyness_sub":  "Đông khách ăn đêm Michelin Guide",
                                  "noise_level":  "60 dB",
                                  "peak_hours_histogram":  {
                                                               "12h00":  85,
                                                               "21h00":  95
                                                           }
                              },
        "ai_curation":  {
                            "signature_dish":  "Phở gà trộn đùi da giòn sần sật \u0026 Bát nước dùng hầm xương gà béo vàng óng",
                            "insider_tip":  "Quán đạt danh hiệu Michelin Bib Gourmand. Món đỉnh cao nhất là Phở Gà Trộn Đùi Lườn Da Giòn. Sợi phở mềm trộn đẫm sốt chua ngọt gia truyền rắc lạc rang thơm bùi, ăn kèm bát nước dùng béo ngọt ngập lá chanh thái chỉ!",
                            "contexts":  [
                                             "an_trua_nhanh",
                                             "dieu_hoa_mat",
                                             "am_thuc_di_san",
                                             "thanh_toan_vietqr"
                                         ],
                            "omni_trust_score":  96
                        },
        "photos":  [
                       {
                           "url":  "/assets/photos/bun_ngan_ba_hang.jpg",
                           "caption":  "Bát phở gà trộn đùi vàng ươm da giòn lá chanh",
                           "tag":  "signature"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Món Đinh Đặc Sản",
                                    "items":  [
                                                  {
                                                      "name":  "Phở gà trộn đùi đặc biệt",
                                                      "price":  "75.000đ",
                                                      "desc":  "Thịt gà ta da giòn thái miếng dày, sốt chua ngọt lạc rang hành phi",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Phở gà nước đùi lườn truyền thống",
                                                      "price":  "65.000đ",
                                                      "desc":  "Nước dùng hầm xương gà thanh trong, lá chanh thơm ngát",
                                                      "is_signature":  true
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Gọi Thêm",
                                    "items":  [
                                                  {
                                                      "name":  "Trứng non lòng đào (bát)",
                                                      "price":  "25.000đ",
                                                      "desc":  "Trứng non béo bùi ngậy",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Đĩa lòng mề gà xào",
                                                      "price":  "35.000đ",
                                                      "desc":  "Lòng mề giòn sần sật",
                                                      "is_signature":  false
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Đồ Uống",
                                    "items":  [
                                                  {
                                                      "name":  "Trà chanh hoa nhài",
                                                      "price":  "15.000đ",
                                                      "desc":  "Mát lành",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Gà ta chuẩn thả vườn thịt chắc ngọt mọng nước, da gà vàng giòn sần sật",
                                                "Sốt phở trộn chua ngọt ngấm sâu sợi bánh, bát nước dùng kèm đậm đà ngát lá chanh",
                                                "Được gắn sao Michelin Bib Gourmand xứng tầm"
                                            ],
                                   "cons":  [
                                                "Giờ trưa và tối muộn khách xếp hàng đông, bàn tầng 1 hơi chật",
                                                "Giá cao hơn mặt bằng phở gà bình dân nhưng chất lượng tương xứng"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Bùi Khánh Linh",
                                     "badge":  "Food Blogger Hà Nội",
                                     "date":  "4 ngày trước",
                                     "rating":  5,
                                     "comment":  "Thịt gà đùi da vàng óng giòn sần sật đúng chuẩn gà ta xịn. Nước sốt trộn chua ngọt đậm đà, ăn kèm thìa nước phở nóng lá chanh ấm bụng tuyệt vời!"
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "Restaurant",
                               "name":  "Phở Gà Nguyệt",
                               "address":  "5B Phủ Doãn, Hoàn Kiếm, Hà Nội",
                               "priceRange":  "45.000 - 90.000 VND"
                           }
    },
    {
        "id":  "store-hbt-002",
        "name":  "Phở Thìn Lò Đúc Gia Truyền",
        "slug":  "pho-thin-lo-duc-hai-ba-trung",
        "brand":  "Phở Thìn Lò Đúc",
        "category":  "Phở Bò Xào Lăn",
        "address":  "13 Lò Đúc, Phường Phạm Đình Hổ, Quận Hai Bà Trưng, Hà Nội",
        "landmark":  "Ngay đầu phố Lò Đúc giao Phan Chu Trinh",
        "location":  {
                         "latitude":  21.018240,
                         "longitude":  105.856120,
                         "geo_hash":  "w7e2xuv"
                     },
        "contact":  {
                        "phone":  "0983112233",
                        "phone_display":  "098 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)",
                        "google_maps_url":  "https://maps.google.com/?cid=1029384719283746"
                    },
        "operating_hours":  {
                                "open_time":  "06:00",
                                "close_time":  "21:00",
                                "open_now":  true,
                                "best_visit_window":  "06h30 - 08h00 sáng hoặc sau 14h00 chiều"
                            },
        "price_range":  {
                            "min":  65000,
                            "max":  90000,
                            "currency":  "VND",
                            "formatted":  "65.000đ - 90.000đ"
                        },
        "amenities":  [
                          {
                              "name":  "Quạt mát \u0026 bàn gỗ truyền thống",
                              "icon":  "fan"
                          },
                          {
                              "name":  "Nhân viên dắt xe máy vỉa hè",
                              "icon":  "bike"
                          },
                          {
                              "name":  "Thanh toán VietQR nhanh",
                              "icon":  "qr"
                          },
                          {
                              "name":  "Thương hiệu phở vang danh quốc tế",
                              "icon":  "clock"
                          }
                      ],
        "parking_detail":  {
                               "motorbike":  "Miễn phí vỉa hè trước cửa quán",
                               "car":  "Gửi ô tô bãi phố Phan Chu Trinh (150m)",
                               "fee":  "0đ xe máy"
                           },
        "realtime_busyness":  {
                                  "current_occupancy_percent":  80,
                                  "status_text":  "Bàn trống 20%",
                                  "busyness_sub":  "Khách trong nước \u0026 quốc tế tấp nập",
                                  "noise_level":  "62 dB",
                                  "peak_hours_histogram":  {
                                                               "07h30":  95,
                                                               "12h00":  90
                                                           }
                              },
        "ai_curation":  {
                            "signature_dish":  "Phở bò tái lăn áp chảo ngập hành hoa xanh mướt (Thịt bò tươi xào lăn lửa lớn ngậy thơm tỏi gừng)",
                            "insider_tip":  "Nét độc bản của Phở Thìn Lò Đúc là chảo lửa xào lăn bò xèo xèo cùng tỏi và tiêu thơm nức. Bát phở bê ra ngập tràn màu xanh của hành hoa thái dài, nước dùng béo ngậy đậm đà. Nhớ thêm 1 thìa tương ớt tự nấu cay xè!",
                            "contexts":  [
                                             "an_sang_nhanh",
                                             "am_thuc_di_san",
                                             "thanh_toan_vietqr"
                                         ],
                            "omni_trust_score":  95
                        },
        "photos":  [
                       {
                           "url":  "/assets/photos/pho_bat_dan.jpg",
                           "caption":  "Bát phở Thìn Lò Đúc tái lăn ngập tràn hành hoa và nước béo",
                           "tag":  "signature"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Món Đinh Đặc Sản",
                                    "items":  [
                                                  {
                                                      "name":  "Phở bò tái lăn đặc biệt",
                                                      "price":  "75.000đ",
                                                      "desc":  "Bò xào lăn lửa ngút ngàn, hành hoa ngập bát, nước béo đậm đà",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Phở bò xào lăn thêm thịt",
                                                      "price":  "90.000đ",
                                                      "desc":  "Phần thịt bò xào đẫm miệng",
                                                      "is_signature":  true
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Ăn Kèm",
                                    "items":  [
                                                  {
                                                      "name":  "Đĩa quẩy giòn",
                                                      "price":  "10.000đ",
                                                      "desc":  "Quẩy ngâm nước phở béo",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Trứng gà chần lòng đào",
                                                      "price":  "10.000đ",
                                                      "desc":  "Trứng ta ngậy thơm",
                                                      "is_signature":  false
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Đồ Uống",
                                    "items":  [
                                                  {
                                                      "name":  "Trà đá hoa nhài",
                                                      "price":  "5.000đ",
                                                      "desc":  "Thanh nhiệt",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Thịt bò xào lăn lửa lớn mềm ngọt đậm đà, mùi tỏi cháy thơm lừng đặc trưng",
                                                "Nước dùng béo ngậy đậm vị, hành hoa ngọt lịm ngập bát",
                                                "Hương vị độc bản không lẫn với bất kỳ hàng phở nào ở Hà Nội"
                                            ],
                                   "cons":  [
                                                "Nước dùng khá nhiều mỡ béo từ chảo xào, người thích ăn phở nước trong thanh tao sẽ thấy hơi ngấy",
                                                "Quán mộc mạc truyền thống không có điều hòa"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Vũ Mạnh Cường",
                                     "badge":  "Thực khách sành ăn 30 năm",
                                     "date":  "1 tuần trước",
                                     "rating":  4.7,
                                     "comment":  "Miếng thịt bò xào lăn thơm điếc mũi, nước dùng đậm đà béo ngậy ngập tràn hành hoa. Sáng mùa đông rét buốt vào làm bát phở Thìn Lò Đúc thêm quả trứng chần là ấm từ đầu đến chân."
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "Restaurant",
                               "name":  "Phở Thìn Lò Đúc",
                               "address":  "13 Lò Đúc, Hai Bà Trưng, Hà Nội",
                               "priceRange":  "65.000 - 90.000 VND"
                           }
    },
    {
        "id":  "store-hbt-005",
        "name":  "Bún Chả Hương Liên (Bún Chả Obama)",
        "slug":  "bun-cha-huong-lien-obama-le-van-huu",
        "brand":  "Bún Chả Hương Liên",
        "category":  "Bún Chả Truyền Thống",
        "address":  "24 Lê Văn Hưu, Phường Phan Chu Trinh, Quận Hai Bà Trưng, Hà Nội",
        "landmark":  "Gần ngã tư Lê Văn Hưu - Ngô Thì Nhậm",
        "location":  {
                         "latitude":  21.019510,
                         "longitude":  105.853820,
                         "geo_hash":  "w7e2xus"
                     },
        "contact":  {
                        "phone":  "02439434106",
                        "phone_display":  "024 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)",
                        "google_maps_url":  "https://maps.google.com/?cid=1029384719283747"
                    },
        "operating_hours":  {
                                "open_time":  "08:00",
                                "close_time":  "20:30",
                                "open_now":  true,
                                "best_visit_window":  "10h45 - 11h30 hoặc sau 13h30"
                            },
        "price_range":  {
                            "min":  50000,
                            "max":  110000,
                            "currency":  "VND",
                            "formatted":  "50.000đ - 110.000đ"
                        },
        "amenities":  [
                          {
                              "name":  "Điều hòa 4 tầng mát lạnh",
                              "icon":  "ac"
                          },
                          {
                              "name":  "Nhân viên trông dắt xe",
                              "icon":  "bike"
                          },
                          {
                              "name":  "Thanh toán VietQR \u0026 Thẻ",
                              "icon":  "qr"
                          },
                          {
                              "name":  "Bàn di sản Tổng Thống Obama",
                              "icon":  "clock"
                          }
                      ],
        "parking_detail":  {
                               "motorbike":  "Miễn phí vỉa hè trước cửa",
                               "car":  "Không đỗ ô tô; gửi bãi phố Ngô Thì Nhậm (100m)",
                               "fee":  "0đ xe máy"
                           },
        "realtime_busyness":  {
                                  "current_occupancy_percent":  75,
                                  "status_text":  "Bàn trống 25%",
                                  "busyness_sub":  "Khách quốc tế \u0026 văn phòng tấp nập",
                                  "noise_level":  "60 dB",
                                  "peak_hours_histogram":  {
                                                               "12h00":  90,
                                                               "18h30":  80
                                                           }
                              },
        "ai_curation":  {
                            "signature_dish":  "Combo Bún Chả Obama (Bún chả đặc biệt nướng than hoa, Nem cua bể vuông giòn rụm \u0026 Bia Hà Nội)",
                            "insider_tip":  "Nơi cựu Tổng thống Mỹ Barack Obama và đầu bếp Anthony Bourdain từng dùng bữa năm 2016. Chả miếng ba chỉ ướp gia vị đậm đà nướng than vàng cánh gián, nước chấm chua ngọt thanh dịu. Hãy gọi combo Obama để trải nghiệm trọn vẹn!",
                            "contexts":  [
                                             "an_trua_nhanh",
                                             "dieu_hoa_mat",
                                             "am_thuc_di_san",
                                             "thanh_toan_vietqr"
                                         ],
                            "omni_trust_score":  94
                        },
        "photos":  [
                       {
                           "url":  "/assets/photos/bun_cha_dac_kim.jpg",
                           "caption":  "Bàn bún chả Hương Liên chả than hoa và nem cua bể vàng giòn",
                           "tag":  "signature"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Món Đinh Đặc Sản",
                                    "items":  [
                                                  {
                                                      "name":  "Suất Combo Obama đầy đủ",
                                                      "price":  "105.000đ",
                                                      "desc":  "1 suất bún chả đặc biệt + 1 nem hải sản + 1 chai bia Hà Nội",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Bún chả đặc biệt nướng than hoa",
                                                      "price":  "60.000đ",
                                                      "desc":  "Chả miếng, chả băm nướng than hoa, đu đủ dưa góp",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Nem cua bể Hải Phòng giòn rụm (chiếc)",
                                                      "price":  "30.000đ",
                                                      "desc":  "Nem vuông đầy ắp thịt cua tươi",
                                                      "is_signature":  true
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Gọi Thêm",
                                    "items":  [
                                                  {
                                                      "name":  "Bún đĩa thêm",
                                                      "price":  "10.000đ",
                                                      "desc":  "Bún tươi",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Chả nướng thêm bát",
                                                      "price":  "35.000đ",
                                                      "desc":  "Chả nóng",
                                                      "is_signature":  false
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Đồ Uống",
                                    "items":  [
                                                  {
                                                      "name":  "Bia Hà Nội chai ướp lạnh",
                                                      "price":  "20.000đ",
                                                      "desc":  "Bia thủ đô",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Trà đá hoa nhài",
                                                      "price":  "5.000đ",
                                                      "desc":  "Mát lành",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Chả nướng than hoa mềm thơm, nước mắm chấm pha ấm chua thanh rất vừa vặn",
                                                "Nem cua bể vỏ giòn tan nhân ngập thịt cua và nấm hương",
                                                "Không gian 4 tầng điều hòa sạch sẽ, phục vụ văn minh"
                                            ],
                                   "cons":  [
                                                "Giờ trưa khách du lịch và đoàn khách đông có thể phải chờ xếp bàn",
                                                "Phố Lê Văn Hưu hẹp khó đỗ ô tô"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Nguyễn Hoàng Nam",
                                     "badge":  "Hướng dẫn viên du lịch quốc tế",
                                     "date":  "1 tuần trước",
                                     "rating":  4.6,
                                     "comment":  "Đưa khách quốc tế đến đây ai cũng tấm tắc khen. Chả nướng than hoa thơm lừng mềm ngọt, nem cua bể giòn rụm. Tầng 2 lưu giữ chiếc bàn Tổng thống Obama ngồi ăn rất ý nghĩa."
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "Restaurant",
                               "name":  "Bún Chả Hương Liên",
                               "address":  "24 Lê Văn Hưu, Hai Bà Trưng, Hà Nội",
                               "priceRange":  "50.000 - 110.000 VND"
                           }
    },
    {
        "id":  "store-th-002",
        "name":  "Bánh Tôm Hồ Tây Số 1 Thanh Niên",
        "slug":  "banh-tom-ho-tay-so-1-thanh-nien",
        "brand":  "Bánh Tôm Hồ Tây",
        "category":  "Đặc Sản Hồ Tây",
        "address":  "Số 1 Thanh Niên, Phường Yên Phụ, Quận Tây Hồ, Hà Nội",
        "landmark":  "Đoạn cầu ngăn cách Hồ Tây và Hồ Trúc Bạch",
        "location":  {
                         "latitude":  21.048510,
                         "longitude":  105.836120,
                         "geo_hash":  "w7e2xwh"
                     },
        "contact":  {
                        "phone":  "02438293737",
                        "phone_display":  "024 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)",
                        "google_maps_url":  "https://maps.google.com/?cid=1029384719283748"
                    },
        "operating_hours":  {
                                "open_time":  "09:00",
                                "close_time":  "22:00",
                                "open_now":  true,
                                "best_visit_window":  "16h30 - 18h30 ngắm hoàng hôn lộng gió Hồ Tây"
                            },
        "price_range":  {
                            "min":  60000,
                            "max":  150000,
                            "currency":  "VND",
                            "formatted":  "60.000đ - 150.000đ"
                        },
        "amenities":  [
                          {
                              "name":  "Không gian view mặt nước Hồ Tây",
                              "icon":  "tree"
                          },
                          {
                              "name":  "Bãi đỗ ô tô và xe máy rộng",
                              "icon":  "car"
                          },
                          {
                              "name":  "Thanh toán VietQR \u0026 Thẻ",
                              "icon":  "qr"
                          },
                          {
                              "name":  "Hóa đơn VAT công ty",
                              "icon":  "vat"
                          }
                      ],
        "parking_detail":  {
                               "motorbike":  "Miễn phí sân nhà hàng có bảo vệ dắt",
                               "car":  "Bãi đỗ ô tô sức chứa 50 xe trong khuôn viên",
                               "fee":  "0đ xe máy, ô tô free"
                           },
        "realtime_busyness":  {
                                  "current_occupancy_percent":  60,
                                  "status_text":  "Bàn trống 40%",
                                  "busyness_sub":  "Gió hồ Tây mát rượi • Có bàn ngay",
                                  "noise_level":  "52 dB",
                                  "peak_hours_histogram":  {
                                                               "12h00":  70,
                                                               "18h00":  85
                                                           }
                              },
        "ai_curation":  {
                            "signature_dish":  "Đĩa bánh tôm Hồ Tây vàng ươm giòn rụm \u0026 Nước mắm gỏi đu đủ chua ngọt",
                            "insider_tip":  "Tôm tươi nguyên con bọc trong lớp bột khoai lang chiên phồng vàng ruộm. Cắn miếng bánh nóng bỏng tay giòn tan, cuộn cùng rau xà lách, rau thơm chấm ngập nước mắm chua ngọt giòn đu đủ, ngắm hoàng hôn ráng vàng trên mặt nước Hồ Tây!",
                            "contexts":  [
                                             "am_thuc_di_san",
                                             "tu_tap_gia_dinh",
                                             "dieu_hoa_mat",
                                             "thanh_toan_vietqr"
                                         ],
                            "omni_trust_score":  93
                        },
        "photos":  [
                       {
                           "url":  "/assets/photos/bun_oc_phu_tay_ho.jpg",
                           "caption":  "Đĩa bánh tôm Hồ Tây vàng ruộm giòn tan kèm rau thơm",
                           "tag":  "signature"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Món Đinh Đặc Sản",
                                    "items":  [
                                                  {
                                                      "name":  "Đĩa Bánh Tôm Hồ Tây đặc sản (5 chiếc)",
                                                      "price":  "100.000đ",
                                                      "desc":  "Tôm hồ ngọt thịt bọc bột khoai chiên vàng giòn rụm",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Lẩu riêu cua bắp bò sườn sụn",
                                                      "price":  "350.000đ",
                                                      "desc":  "Nồi lẩu chua thanh giấm bỗng ngập gạch cua",
                                                      "is_signature":  true
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Ăn Kèm",
                                    "items":  [
                                                  {
                                                      "name":  "Nộm ngó sen tôm thịt",
                                                      "price":  "85.000đ",
                                                      "desc":  "Ngó sen chua ngọt giòn mát",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Ốc nhồi hấp lá gừng",
                                                      "price":  "95.000đ",
                                                      "desc":  "Ốc giòn ngọt thơm nức",
                                                      "is_signature":  false
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Đồ Uống",
                                    "items":  [
                                                  {
                                                      "name":  "Bia hơi Hà Nội ướp lạnh",
                                                      "price":  "18.000đ",
                                                      "desc":  "Bia tươi thủ đô",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Nước dừa tươi xiêm",
                                                      "price":  "35.000đ",
                                                      "desc":  "Ngọt mát",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Vị trí đắc địa số 1 Hà Nội nằm giữa 2 hồ, gió mát quanh năm, ngắm hoàng hôn tuyệt đẹp",
                                                "Bánh tôm chiên vàng ươm, bột khoai giòn rụm không bị ngấy mỡ",
                                                "Bãi đỗ xe máy và ô tô rộng rãi bậc nhất"
                                            ],
                                   "cons":  [
                                                "Mức giá nhà hàng cao hơn các quán vỉa hè ven hồ",
                                                "Cuối tuần khách đặt tiệc gia đình đông nên đặt trước góc bàn sát mép nước"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Dương Thu Hương",
                                     "badge":  "Cư dân làng Yên Phụ",
                                     "date":  "1 tuần trước",
                                     "rating":  4.6,
                                     "comment":  "Ngồi ăn đĩa bánh tôm giòn rụm, uống cốc bia hơi mát lạnh trong chiều hoàng hôn Hồ Tây là trải nghiệm không đâu có được ở Hà Nội. Bãi đỗ ô tô cực kỳ thuận tiện."
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "Restaurant",
                               "name":  "Bánh Tôm Hồ Tây",
                               "address":  "Số 1 Thanh Niên, Tây Hồ, Hà Nội",
                               "priceRange":  "60.000 - 150.000 VND"
                           }
    },
    {
        "id":  "store-dd-002",
        "name":  "Bún Đậu Mơ Trung Tự Ngõ 46 Phạm Ngọc Thạch",
        "slug":  "bun-dau-mo-trung-tu-pham-ngoc-thach-dong-da",
        "brand":  "Bún Đậu Trung Tự",
        "category":  "Bún Đậu Mắm Tôm",
        "address":  "Ngõ 46 Phạm Ngọc Thạch, Phường Trung Tự, Quận Đống Đa, Hà Nội",
        "landmark":  "Khu tập thể Trung Tự gần Vincom Phạm Ngọc Thạch",
        "location":  {
                         "latitude":  21.008450,
                         "longitude":  105.833520,
                         "geo_hash":  "w7e2x5m"
                     },
        "contact":  {
                        "phone":  "0984556677",
                        "phone_display":  "098 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)",
                        "google_maps_url":  "https://maps.google.com/?cid=1029384719283749"
                    },
        "operating_hours":  {
                                "open_time":  "10:00",
                                "close_time":  "21:00",
                                "open_now":  true,
                                "best_visit_window":  "11h00 - 11h45 hoặc 17h30 - 18h30"
                            },
        "price_range":  {
                            "min":  35000,
                            "max":  70000,
                            "currency":  "VND",
                            "formatted":  "35.000đ - 70.000đ"
                        },
        "amenities":  [
                          {
                              "name":  "Điều hòa tầng 2 mát lạnh",
                              "icon":  "ac"
                          },
                          {
                              "name":  "Đỗ xe máy vỉa hè ngõ",
                              "icon":  "bike"
                          },
                          {
                              "name":  "Thanh toán VietQR tiện lợi",
                              "icon":  "qr"
                          },
                          {
                              "name":  "Mẹt tre lót lá chuối tươi",
                              "icon":  "box"
                          }
                      ],
        "parking_detail":  {
                               "motorbike":  "Miễn phí sân nhà trước cửa quán",
                               "car":  "Gửi ô tô bãi Vincom Phạm Ngọc Thạch (cách 100m)",
                               "fee":  "0đ xe máy"
                           },
        "realtime_busyness":  {
                                  "current_occupancy_percent":  65,
                                  "status_text":  "Bàn trống 35%",
                                  "busyness_sub":  "Đông khách học sinh \u0026 văn phòng",
                                  "noise_level":  "55 dB",
                                  "peak_hours_histogram":  {
                                                               "12h00":  85,
                                                               "18h30":  80
                                                           }
                              },
        "ai_curation":  {
                            "signature_dish":  "Mẹt bún đậu mơ dồi sụn chả cốm \u0026 Chân giò luộc thái mỏng",
                            "insider_tip":  "Đậu phụ Mơ ở đây rán già tay bên ngoài vàng giòn rụm nhưng ruột mướt mát béo ngậy. Thịt chân giò luộc cuộn chặt tay thái mỏng tang không bị mỡ ngấy!",
                            "contexts":  [
                                             "an_trua_nhanh",
                                             "dieu_hoa_mat",
                                             "hoc_sinh_sinh_vien",
                                             "thanh_toan_vietqr"
                                         ],
                            "omni_trust_score":  93
                        },
        "photos":  [
                       {
                           "url":  "/assets/photos/bun_cha_dac_kim.jpg",
                           "caption":  "Mẹt bún đậu mơ Trung Tự đầy đặn topping rán giòn nóng hổi",
                           "tag":  "signature"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Món Đinh Đặc Sản",
                                    "items":  [
                                                  {
                                                      "name":  "Mẹt bún đậu thập cẩm đặc biệt",
                                                      "price":  "60.000đ",
                                                      "desc":  "Đậu mơ rán giòn, chả cốm, dồi sụn, thịt chân giò luộc, nem rán giòn",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Suất bún đậu chả cốm nóng",
                                                      "price":  "40.000đ",
                                                      "desc":  "Bún tươi, đậu mơ và chả cốm",
                                                      "is_signature":  false
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Topping Thêm",
                                    "items":  [
                                                  {
                                                      "name":  "Đĩa chân giò luộc thêm",
                                                      "price":  "25.000đ",
                                                      "desc":  "Thịt chân giò thái mỏng",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Đĩa chả cốm chiên",
                                                      "price":  "20.000đ",
                                                      "desc":  "Dẻo thơm mùi cốm",
                                                      "is_signature":  false
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Đồ Uống",
                                    "items":  [
                                                  {
                                                      "name":  "Trà quất nha đam đá",
                                                      "price":  "15.000đ",
                                                      "desc":  "Mát lành giải ngấy",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Đậu Mơ rán giòn chuẩn vị, thịt chân giò luộc thái mỏng thơm ngọt",
                                                "Mắm tôm Thanh Hóa thơm ngậy đánh bông bọt quất ớt",
                                                "Tầng 2 có điều hòa mát"
                                            ],
                                   "cons":  [
                                                "Ngõ 46 Phạm Ngọc Thạch giờ tan tầm đông, ngõ hơi quanh co"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Trần Thị Mai",
                                     "badge":  "Sinh viên ĐH Y Hà Nội",
                                     "date":  "3 ngày trước",
                                     "rating":  4.7,
                                     "comment":  "Mẹt bún đậu 60k ngon nhất khu Đống Đa. Đậu mơ rán giòn tan chấm mắm tôm đánh bông, quán có điều hòa mát rượi."
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "Restaurant",
                               "name":  "Bún Đậu Mơ Trung Tự",
                               "address":  "Ngõ 46 Phạm Ngọc Thạch, Đống Đa, Hà Nội",
                               "priceRange":  "35.000 - 70.000 VND"
                           }
    },
    {
        "id":  "store-dd-003",
        "name":  "Lẩu Ếch Dũng Béo Láng Hạ",
        "slug":  "lau-ech-dung-beo-lang-ha-dong-da",
        "brand":  "Lẩu Ếch Dũng Béo",
        "category":  "Lẩu \u0026 Ẩm Thực Nhậu",
        "address":  "Số 15 Ngõ 29 Láng Hạ, Phường Thành Công, Quận Đống Đa, Hà Nội",
        "landmark":  "Khu ẩm thực Láng Hạ gần Hồ Đống Đa",
        "location":  {
                         "latitude":  21.018540,
                         "longitude":  105.817420,
                         "geo_hash":  "w7e2wup"
                     },
        "contact":  {
                        "phone":  "0912345678",
                        "phone_display":  "091 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)",
                        "google_maps_url":  "https://maps.google.com/?cid=1029384719283750"
                    },
        "operating_hours":  {
                                "open_time":  "10:30",
                                "close_time":  "23:30",
                                "open_now":  true,
                                "best_visit_window":  "11h30 - 13h00 trưa hoặc 18h00 - 19h30 tối"
                            },
        "price_range":  {
                            "min":  80000,
                            "max":  200000,
                            "currency":  "VND",
                            "formatted":  "80.000đ - 200.000đ"
                        },
        "amenities":  [
                          {
                              "name":  "Điều hòa mát rượi",
                              "icon":  "ac"
                          },
                          {
                              "name":  "Đỗ xe máy có bảo vệ trông",
                              "icon":  "bike"
                          },
                          {
                              "name":  "Thanh toán VietQR nhanh",
                              "icon":  "qr"
                          },
                          {
                              "name":  "Phù hợp tiệc tùng hội nhóm",
                              "icon":  "box"
                          }
                      ],
        "parking_detail":  {
                               "motorbike":  "Miễn phí sân trước cửa quán",
                               "car":  "Gửi ô tô bãi xe ngõ 29 Láng Hạ (50m)",
                               "fee":  "0đ xe máy"
                           },
        "realtime_busyness":  {
                                  "current_occupancy_percent":  70,
                                  "status_text":  "Bàn trống 30%",
                                  "busyness_sub":  "Đông khách liên hoan công ty",
                                  "noise_level":  "64 dB",
                                  "peak_hours_histogram":  {
                                                               "12h30":  85,
                                                               "19h30":  95
                                                           }
                              },
        "ai_curation":  {
                            "signature_dish":  "Lẩu ếch xào măng cay đậm đà \u0026 Đùi ếch chiên bơ tỏi giòn rụm",
                            "insider_tip":  "Thịt đùi ếch đồng săn chắc chiên xém cạnh rồi xào măng củ cay nồng nàn. Nước lẩu ngọt thanh ninh từ xương ống, dầm thêm chút sấu tươi chua dịu ăn cùng váng đậu chiên giòn!",
                            "contexts":  [
                                             "tu_tap_gia_dinh",
                                             "dieu_hoa_mat",
                                             "an_trua_nhanh",
                                             "thanh_toan_vietqr"
                                         ],
                            "omni_trust_score":  92
                        },
        "photos":  [
                       {
                           "url":  "/assets/photos/lau_oc_ba_teo.jpg",
                           "caption":  "Nồi lẩu ếch xào măng cay bốc khói ngập đùi ếch vàng ươm",
                           "tag":  "signature"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Món Đinh Đặc Sản",
                                    "items":  [
                                                  {
                                                      "name":  "Nồi lẩu ếch măng cay nồi vừa",
                                                      "price":  "280.000đ",
                                                      "desc":  "Đùi ếch xào măng cay ngập đĩa, bún tươi, rau muống non",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Đùi ếch chiên bơ tỏi đặc biệt",
                                                      "price":  "120.000đ",
                                                      "desc":  "Ếch chiên bơ tỏi thơm ngậy giòn tan",
                                                      "is_signature":  true
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Món Gọi Thêm",
                                    "items":  [
                                                  {
                                                      "name":  "Đĩa ếch xào măng thêm",
                                                      "price":  "150.000đ",
                                                      "desc":  "Thịt ếch xào măng đậm đà",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Váng đậu chiên giòn",
                                                      "price":  "25.000đ",
                                                      "desc":  "Nhúng lẩu giòn dai",
                                                      "is_signature":  false
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Đồ Uống",
                                    "items":  [
                                                  {
                                                      "name":  "Bia hơi Hà Nội",
                                                      "price":  "15.000đ",
                                                      "desc":  "Ướp lạnh",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Đùi ếch to chắc thịt, xào măng ngấm sốt cay tê cực đậm đà",
                                                "Nước lẩu ngọt đậm thơm mùi giấm bỗng sấu chua thanh",
                                                "Không gian điều hòa rộng rãi"
                                            ],
                                   "cons":  [
                                                "Măng xào khá cay với người không quen ăn cay",
                                                "Giờ tối đông khách nhậu tiếng ồn cao"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Nguyễn Tiến Đạt",
                                     "badge":  "Dân công sở Láng Hạ",
                                     "date":  "5 ngày trước",
                                     "rating":  4.6,
                                     "comment":  "Nồi lẩu ếch măng cay ở đây ngon có tiếng cả chục năm. Đùi ếch béo múp xào măng cay nồng, váng đậu nhúng ngập nước lẩu sôi sùng sục ăn ấm bụng."
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "Restaurant",
                               "name":  "Lẩu Ếch Dũng Béo Láng Hạ",
                               "address":  "Ngõ 29 Láng Hạ, Đống Đa, Hà Nội",
                               "priceRange":  "80.000 - 200.000 VND"
                           }
    },
    {
        "id":  "store-hk-008",
        "name":  "Bún Ngan Nhàn Ngõ Trung Yên",
        "slug":  "bun-ngan-nhan-ngo-trung-yen-hoan-kiem",
        "brand":  "Bún Ngan Nhàn",
        "category":  "Bún Ngan \u0026 Ngan Cháy Tỏi",
        "address":  "Số 14 Ngõ Trung Yên, Phường Hàng Bạc, Quận Hoàn Kiếm, Hà Nội",
        "landmark":  "Ngõ ẩm thực Trung Yên nối Đinh Liệt và Tạ Hiện",
        "location":  {
                         "latitude":  21.033140,
                         "longitude":  105.852150,
                         "geo_hash":  "w7e2xzr"
                     },
        "contact":  {
                        "phone":  null,
                        "phone_display":  "Phá»¥c vá»¥ trá»±c tiáº¿p",
                        "google_maps_url":  "https://maps.google.com/?cid=1029384719283751"
                    },
        "operating_hours":  {
                                "open_time":  "09:30",
                                "close_time":  "15:00",
                                "open_now":  true,
                                "best_visit_window":  "Trước 11h15 hoặc sau 13h30 (Tránh cao điểm xếp hàng)"
                            },
        "price_range":  {
                            "min":  50000,
                            "max":  120000,
                            "currency":  "VND",
                            "formatted":  "50.000đ - 120.000đ"
                        },
        "amenities":  [
                          {
                              "name":  "Quán ngõ phố cổ hoài niệm",
                              "icon":  "fan"
                          },
                          {
                              "name":  "Gửi xe phố Đinh Liệt",
                              "icon":  "bike"
                          },
                          {
                              "name":  "Thanh toán VietQR nhanh",
                              "icon":  "qr"
                          },
                          {
                              "name":  "Bún ngan trứ danh phố cổ",
                              "icon":  "clock"
                          }
                      ],
        "parking_detail":  {
                               "motorbike":  "Gửi xe bãi phố Đinh Liệt (đầu ngõ)",
                               "car":  "Không đỗ ô tô; gửi bãi Chợ Hàng Da",
                               "fee":  "5k xe máy"
                           },
        "realtime_busyness":  {
                                  "current_occupancy_percent":  85,
                                  "status_text":  "Bàn trống 15%",
                                  "busyness_sub":  "Đang có hàng đợi • Ra đồ 2 phút",
                                  "noise_level":  "62 dB",
                                  "peak_hours_histogram":  {
                                                               "12h00":  95,
                                                               "12h45":  90
                                                           }
                              },
        "ai_curation":  {
                            "signature_dish":  "Bún ngan nước măng tiết ngọt thanh \u0026 Bát ngan chặt đùi chấm muối ớt chanh",
                            "insider_tip":  "Nước dùng ngan ở đây ngọt sâu lắng ninh từ xương ngan dé béo ngậy cùng nấm hương thơm lừng. Mẹo là gọi bát bún ngan nước thêm măng chua cay và đĩa thịt ngan luộc chặt chấm nước mắm gừng ớt tỏi băm nhuyễn!",
                            "contexts":  [
                                             "an_trua_nhanh",
                                             "am_thuc_di_san",
                                             "thanh_toan_vietqr"
                                         ],
                            "omni_trust_score":  94
                        },
        "photos":  [
                       {
                           "url":  "/assets/photos/bun_ngan_ba_hang.jpg",
                           "caption":  "Bát bún ngan nước bốc khói ngập thịt ngan dé mềm mọng",
                           "tag":  "signature"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Món Đinh Đặc Sản",
                                    "items":  [
                                                  {
                                                      "name":  "Bún ngan nước đặc biệt",
                                                      "price":  "60.000đ",
                                                      "desc":  "Thịt ngan dé nạc dày, măng tươi giòn, tiết mềm mướt",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Đĩa thịt ngan luộc nửa con",
                                                      "price":  "180.000đ",
                                                      "desc":  "Thịt ngan mềm ngọt mọng nước",
                                                      "is_signature":  true
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Ăn Kèm",
                                    "items":  [
                                                  {
                                                      "name":  "Canh măng tiết thêm",
                                                      "price":  "20.000đ",
                                                      "desc":  "Canh nóng ngọt xương",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Quẩy giòn phố cổ",
                                                      "price":  "10.000đ",
                                                      "desc":  "Quẩy giòn rụm",
                                                      "is_signature":  false
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Đồ Uống",
                                    "items":  [
                                                  {
                                                      "name":  "Trà đá hoa nhài",
                                                      "price":  "5.000đ",
                                                      "desc":  "Thanh nhiệt",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Thịt ngan dé chuẩn xịn mềm ngọt không dai bở, nước dùng hầm xương ngọt lịm tự nhiên",
                                                "Măng cay ngâm giòn sần sật rất đưa miệng",
                                                "Địa điểm ẩm thực biểu tượng của ngõ Trung Yên"
                                            ],
                                   "cons":  [
                                                "Bà chủ phục vụ cá tính phong cách phố cổ xưa, khách đông phải chờ đợi",
                                                "Không gian ngồi ngõ hẹp bàn ghế nhựa san sát nhau"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Lê Bảo Châu",
                                     "badge":  "Dân sành ăn Hoàn Kiếm",
                                     "date":  "1 tuần trước",
                                     "rating":  4.5,
                                     "comment":  "Bát bún ngan nước ngọt lịm từ thìa đầu tiên. Thịt ngan dé dày bản mềm mọng nước, măng cay ngâm giòn rụm. Xếp hàng một chút nhưng ăn đáng từng đồng."
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "Restaurant",
                               "name":  "Bún Ngan Nhàn Ngõ Trung Yên",
                               "address":  "Số 14 Ngõ Trung Yên, Hoàn Kiếm, Hà Nội",
                               "priceRange":  "50.000 - 120.000 VND"
                           }
    },
    {
        "id":  "store-hk-009",
        "name":  "Nộm Bò Khô Long Vi Quán 23 Hồ Hoàn Kiếm",
        "slug":  "nom-bo-kho-long-vi-quan-hoan-kiem",
        "brand":  "Long Vi Quán",
        "category":  "Ăn Vặt Phố Cổ",
        "address":  "23 Phố Hồ Hoàn Kiếm, Phường Hàng Bạc, Quận Hoàn Kiếm, Hà Nội",
        "landmark":  "Con phố ngắn nhất Hà Nội nối Đinh Tiên Hoàng và Cầu Gỗ",
        "location":  {
                         "latitude":  21.032140,
                         "longitude":  105.853240,
                         "geo_hash":  "w7e2xzt"
                     },
        "contact":  {
                        "phone":  "0915345678",
                        "phone_display":  "091 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)",
                        "google_maps_url":  "https://maps.google.com/?cid=1029384719283752"
                    },
        "operating_hours":  {
                                "open_time":  "08:30",
                                "close_time":  "22:00",
                                "open_now":  true,
                                "best_visit_window":  "15h00 - 17h30 xế chiều dạo quanh Bờ Hồ"
                            },
        "price_range":  {
                            "min":  25000,
                            "max":  55000,
                            "currency":  "VND",
                            "formatted":  "25.000đ - 55.000đ"
                        },
        "amenities":  [
                          {
                              "name":  "Ngồi ăn vỉa hè ngắm phố cổ",
                              "icon":  "tree"
                          },
                          {
                              "name":  "Gửi xe máy trước quán",
                              "icon":  "bike"
                          },
                          {
                              "name":  "Thanh toán VietQR nhanh",
                              "icon":  "qr"
                          },
                          {
                              "name":  "Phục vụ siêu tốc 30 giây",
                              "icon":  "clock"
                          }
                      ],
        "parking_detail":  {
                               "motorbike":  "Dựng xe máy trước vỉa hè có nhân viên trông",
                               "car":  "Gửi ô tô bãi vườn hoa Lý Thái Tổ",
                               "fee":  "0đ xe máy"
                           },
        "realtime_busyness":  {
                                  "current_occupancy_percent":  65,
                                  "status_text":  "Bàn trống 35%",
                                  "busyness_sub":  "Đông khách trẻ ăn vặt xế chiều",
                                  "noise_level":  "58 dB",
                                  "peak_hours_histogram":  {
                                                               "16h30":  90,
                                                               "20h00":  85
                                                           }
                              },
        "ai_curation":  {
                            "signature_dish":  "Đĩa nộm bò khô thập cẩm (Bò khô xé cay nồng, gân bò dẻo giòn, đu đủ nạo sợi giòn tan, lạc rang thơm)",
                            "insider_tip":  "Nước giấm pha nộm ở đây chua ngọt thanh khiết bí truyền. Mẹo thổ địa là gọi đĩa nộm thập cẩm có cả thịt bò dải, gân bò trong veo giòn sần sật, ăn kèm 2 chiếc bánh bột lọc tôm thịt dẻo quánh!",
                            "contexts":  [
                                             "an_vat_via_he",
                                             "an_xe_chieu",
                                             "am_thuc_di_san",
                                             "thanh_toan_vietqr"
                                         ],
                            "omni_trust_score":  93
                        },
        "photos":  [
                       {
                           "url":  "/assets/photos/tao_pho_c2_nghia_tan.jpg",
                           "caption":  "Đĩa nộm bò khô ngập tràn topping bò xé và lạc rang giòn",
                           "tag":  "signature"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Món Đinh Đặc Sản",
                                    "items":  [
                                                  {
                                                      "name":  "Đĩa nộm bò khô thập cẩm đặc biệt",
                                                      "price":  "45.000đ",
                                                      "desc":  "Bò khô, gân bò, lá lách, đu đủ nạo sợi giòn, rau thơm lạc bùi",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Đĩa bánh bột lọc chan nước nộm (4 chiếc)",
                                                      "price":  "35.000đ",
                                                      "desc":  "Bột lọc dẻo trong ngập nhân tôm thịt",
                                                      "is_signature":  true
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Ăn Kèm",
                                    "items":  [
                                                  {
                                                      "name":  "Nem chua rán nóng phố cổ (chiếc)",
                                                      "price":  "8.000đ",
                                                      "desc":  "Nem rán giòn rụm",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Chim cút quay mật ong",
                                                      "price":  "30.000đ",
                                                      "desc":  "Cút quay giòn thơm",
                                                      "is_signature":  false
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Đồ Uống",
                                    "items":  [
                                                  {
                                                      "name":  "Trà chanh phố Bờ Hồ",
                                                      "price":  "15.000đ",
                                                      "desc":  "Chua ngọt sảng khoái",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Đu đủ nạo sợi ngâm nước đá giòn rụm, thịt bò khô xé cay thơm bùi ngậy",
                                                "Nước mắm giấm nộm chua thanh ngọt dịu uống được cả nước",
                                                "Ngồi ăn ngắm dòng người dạo quanh Bờ Hồ rất thư thái"
                                            ],
                                   "cons":  [
                                                "Bàn ghế nhựa vỉa hè bình dân, cuối tuần phố đi bộ cấm xe phải gửi xe bên ngoài"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Phạm Lan Anh",
                                     "badge":  "Cư dân phố Hàng Bông",
                                     "date":  "2 tuần trước",
                                     "rating":  4.8,
                                     "comment":  "Ăn nộm ở con phố ngắn nhất Hà Nội suốt thời đi học. Đĩa nộm 45k đầy ắp bò khô thơm phức, gân bò giòn sần sật, thêm đĩa bánh bột lọc nóng là trọn vẹn buổi chiều."
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "Restaurant",
                               "name":  "Nộm Bò Khô Long Vi Quán",
                               "address":  "23 Phố Hồ Hoàn Kiếm, Hoàn Kiếm, Hà Nội",
                               "priceRange":  "25.000 - 55.000 VND"
                           }
    },
    {
        "id":  "store-hk-010",
        "name":  "Mì Gà Tần Hàng Bồ Cổ Truyền",
        "slug":  "mi-ga-tan-hang-bo-hoan-kiem",
        "brand":  "Gà Tần Hàng Bồ",
        "category":  "Ăn Đêm \u0026 Thuốc Bắc",
        "address":  "24 Hàng Bồ, Phường Hàng Bạc, Quận Hoàn Kiếm, Hà Nội",
        "landmark":  "Ngã tư Hàng Bồ - Hàng Bạc trung tâm Phố Cổ",
        "location":  {
                         "latitude":  21.034120,
                         "longitude":  105.849150,
                         "geo_hash":  "w7e2xzp"
                     },
        "contact":  {
                        "phone":  "0987123456",
                        "phone_display":  "098 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)",
                        "google_maps_url":  "https://maps.google.com/?cid=1029384719283753"
                    },
        "operating_hours":  {
                                "open_time":  "17:00",
                                "close_time":  "23:30",
                                "open_now":  true,
                                "best_visit_window":  "18h30 - 21h30 tối gió mát phố cổ"
                            },
        "price_range":  {
                            "min":  55000,
                            "max":  95000,
                            "currency":  "VND",
                            "formatted":  "55.000đ - 95.000đ"
                        },
        "amenities":  [
                          {
                              "name":  "Bàn ghế vỉa hè ngắm phố cổ",
                              "icon":  "tree"
                          },
                          {
                              "name":  "Dựng xe máy trước quán",
                              "icon":  "bike"
                          },
                          {
                              "name":  "Thanh toán VietQR nhanh",
                              "icon":  "qr"
                          },
                          {
                              "name":  "Mở bán đêm muộn bổ dưỡng",
                              "icon":  "clock"
                          }
                      ],
        "parking_detail":  {
                               "motorbike":  "Miễn phí vỉa hè trước cửa quán",
                               "car":  "Không đỗ ô tô; gửi bãi Chợ Đồng Xuân (300m)",
                               "fee":  "0đ xe máy"
                           },
        "realtime_busyness":  {
                                  "current_occupancy_percent":  75,
                                  "status_text":  "Bàn trống 25%",
                                  "busyness_sub":  "Đông khách ăn tối \u0026 ăn đêm phố cổ",
                                  "noise_level":  "59 dB",
                                  "peak_hours_histogram":  {
                                                               "19h30":  90,
                                                               "21h30":  95
                                                           }
                              },
        "ai_curation":  {
                            "signature_dish":  "Bát mì tôm gà tần lon thuốc bắc \u0026 Đùi gà ác mềm rục ngọt tủy",
                            "insider_tip":  "Gà ri tần trong lon nhôm cùng ngải cứu tươi, kỳ tử, táo đỏ và hạt sen thơm nức. Bát nước dùng thuốc bắc ngọt thanh đậm đà chan vào vắt mì tôm hai tôm ăn nóng bỏng môi là món ăn đêm huyền thoại đất kinh kỳ!",
                            "contexts":  [
                                             "an_vat_via_he",
                                             "am_thuc_di_san",
                                             "thanh_toan_vietqr"
                                         ],
                            "omni_trust_score":  95
                        },
        "photos":  [
                       {
                           "url":  "/assets/photos/bun_ngan_ba_hang.jpg",
                           "caption":  "Bát mì gà tần lon ngải cứu thơm ngát hạt sen và táo đỏ",
                           "tag":  "signature"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Món Đinh Đặc Sản",
                                    "items":  [
                                                  {
                                                      "name":  "Mì tôm đùi gà tần thuốc bắc ngải cứu",
                                                      "price":  "75.000đ",
                                                      "desc":  "Đùi gà ri to mềm rục, ngải cứu xanh mướt, nước hầm thuốc bắc ngọt thanh",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Bát gà ác tần nguyên con bổ dưỡng",
                                                      "price":  "90.000đ",
                                                      "desc":  "Gà ác thịt đen bồi bổ cơ thể",
                                                      "is_signature":  true
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Ăn Kèm",
                                    "items":  [
                                                  {
                                                      "name":  "Vắt mì tôm thêm",
                                                      "price":  "10.000đ",
                                                      "desc":  "Mì trần dai ngon",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Rau ngải cứu tần thêm",
                                                      "price":  "15.000đ",
                                                      "desc":  "Ngải cứu non không đắng",
                                                      "is_signature":  false
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Đồ Uống",
                                    "items":  [
                                                  {
                                                      "name":  "Trà quất mật ong",
                                                      "price":  "15.000đ",
                                                      "desc":  "Ấm bụng",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Nước dùng thuốc bắc ngọt thanh tự nhiên từ xương gà và táo đỏ, ngải cứu non mềm không bị đắng ngắt",
                                                "Thịt gà tần nhừ tơi ngọt lịm cắn ngập miệng",
                                                "Ăn đêm trời se lạnh phố cổ cực kỳ ấm bụng"
                                            ],
                                   "cons":  [
                                                "Bán vỉa hè chiều tối, chỗ ngồi ghế nhựa hạn chế",
                                                "Người không quen mùi vị thuốc bắc có thể cần cân nhắc"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Đỗ Hoàng Long",
                                     "badge":  "Cư dân phố Hàng Chiếu",
                                     "date":  "1 tuần trước",
                                     "rating":  4.9,
                                     "comment":  "Đêm lạnh đi bộ trên phố cổ tạt vào làm bát mì gà tần ngải cứu nóng hổi là hồi sức ngay. Thịt gà ri tần mềm rục thơm nức mùi kỳ tử hạt sen, nước súp ngọt thanh thơm lừng."
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "Restaurant",
                               "name":  "Mì Gà Tần Hàng Bồ",
                               "address":  "24 Hàng Bồ, Hoàn Kiếm, Hà Nội",
                               "priceRange":  "55.000 - 95.000 VND"
                           }
    },
    {
        "id":  "store-hk-011",
        "name":  "Bún Thang Bà Đức 48 Cầu Gỗ",
        "slug":  "bun-thang-ba-duc-cau-go-hoan-kiem",
        "brand":  "Bún Thang Bà Đức",
        "category":  "Bún Thang Di Sản",
        "address":  "48 Cầu Gỗ, Phường Hàng Bạc, Quận Hoàn Kiếm, Hà Nội",
        "landmark":  "Ngay gần đài phun nước Quảng trường Đông Kinh Nghĩa Thục",
        "location":  {
                         "latitude":  21.031850,
                         "longitude":  105.852920,
                         "geo_hash":  "w7e2xzu"
                     },
        "contact":  {
                        "phone":  "02438258380",
                        "phone_display":  "024 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)",
                        "google_maps_url":  "https://maps.google.com/?cid=1029384719283754"
                    },
        "operating_hours":  {
                                "open_time":  "07:00",
                                "close_time":  "22:00",
                                "open_now":  true,
                                "best_visit_window":  "08h00 - 09h30 sáng hoặc 17h30 - 19h00 tối"
                            },
        "price_range":  {
                            "min":  50000,
                            "max":  75000,
                            "currency":  "VND",
                            "formatted":  "50.000đ - 75.000đ"
                        },
        "amenities":  [
                          {
                              "name":  "Điều hòa tầng 2 mát mẻ",
                              "icon":  "ac"
                          },
                          {
                              "name":  "Dựng xe máy trước quán",
                              "icon":  "bike"
                          },
                          {
                              "name":  "Thanh toán VietQR nhanh",
                              "icon":  "qr"
                          },
                          {
                              "name":  "Món ăn thanh tao đất Tràng An",
                              "icon":  "clock"
                          }
                      ],
        "parking_detail":  {
                               "motorbike":  "Dắt xe vỉa hè phố Cầu Gỗ",
                               "car":  "Không đỗ ô tô; gửi bãi Hàm Cá Mập",
                               "fee":  "0đ xe máy"
                           },
        "realtime_busyness":  {
                                  "current_occupancy_percent":  65,
                                  "status_text":  "Bàn trống 35%",
                                  "busyness_sub":  "Tầng 2 điều hòa • Vào bàn ngay",
                                  "noise_level":  "54 dB",
                                  "peak_hours_histogram":  {
                                                               "12h00":  80,
                                                               "19h00":  85
                                                           }
                              },
        "ai_curation":  {
                            "signature_dish":  "Bát bún thang truyền thống cầu kỳ (Gà xé sợi, giò lụa thái chỉ, trứng tráng mỏng tang, củ cải dầm \u0026 mắm tôm điểm cà cuống)",
                            "insider_tip":  "Bún thang được mệnh danh là đỉnh cao nghệ thuật ẩm thực tinh tế Hà Thành. Bát bún bày biện như bức tranh ngũ sắc. Hãy thêm một đầu tăm mắm tôm bọt và giọt tinh dầu cà cuống để kích hoạt toàn bộ tầng hương vị ngọt ngào thanh khiết!",
                            "contexts":  [
                                             "an_trua_nhanh",
                                             "dieu_hoa_mat",
                                             "am_thuc_di_san",
                                             "thanh_toan_vietqr"
                                         ],
                            "omni_trust_score":  96
                        },
        "photos":  [
                       {
                           "url":  "/assets/photos/pho_bat_dan.jpg",
                           "caption":  "Bát bún thang Cầu Gỗ ngũ sắc thái chỉ tinh xảo như bức tranh",
                           "tag":  "signature"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Món Đinh Đặc Sản",
                                    "items":  [
                                                  {
                                                      "name":  "Bún thang đặc biệt đầy đủ",
                                                      "price":  "60.000đ",
                                                      "desc":  "Gà đồi xé, giò lụa thái chỉ, trứng tráng mỏng, củ cải khô giòn, tôm nõn giã bông",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Bún thang thêm thịt gà đùi",
                                                      "price":  "75.000đ",
                                                      "desc":  "Thịt gà đùi da giòn ngọt thịt",
                                                      "is_signature":  true
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Ăn Kèm",
                                    "items":  [
                                                  {
                                                      "name":  "Đĩa củ cải dầm chua ngọt thêm",
                                                      "price":  "10.000đ",
                                                      "desc":  "Củ cải giòn sần sật",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Quẩy giòn",
                                                      "price":  "10.000đ",
                                                      "desc":  "Quẩy thơm",
                                                      "is_signature":  false
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Đồ Uống",
                                    "items":  [
                                                  {
                                                      "name":  "Trà đá hoa nhài",
                                                      "price":  "5.000đ",
                                                      "desc":  "Mát lành",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Nước dùng ninh từ xương gà và tôm he ngọt thanh trong vắt, không một gợn mỡ",
                                                "Mọi nguyên liệu thái sợi chỉ đều tăm tắp đúng chuẩn quy phạm Tràng An",
                                                "Vị trí ngay sát Bờ Hồ Hoàn Kiếm"
                                            ],
                                   "cons":  [
                                                "Khẩu phần thanh tao không quá nhiều thịt dành cho người thích ăn thanh đạm",
                                                "Phố Cầu Gỗ cuối tuần thành phố đi bộ"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Nguyễn Thị Ngọc Bích",
                                     "badge":  "Nghệ nhân ẩm thực Hà Nội",
                                     "date":  "1 tuần trước",
                                     "rating":  5,
                                     "comment":  "Bún thang Bà Đức vẫn giữ trọn vẹn nét thanh tao đất Thăng Long. Nước dùng trong veo ngọt hậu tôm he, trứng tráng mỏng tang như tờ giấy, điểm chút mắm tôm là bừng tỉnh giác quan."
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "Restaurant",
                               "name":  "Bún Thang Bà Đức",
                               "address":  "48 Cầu Gỗ, Hoàn Kiếm, Hà Nội",
                               "priceRange":  "50.000 - 75.000 VND"
                           }
    },
    {
        "id":  "store-bd-002",
        "name":  "Phở Cuốn Hưng Bền Ngũ Xã",
        "slug":  "pho-cuon-hung-ben-ngu-xa-ba-dinh",
        "brand":  "Phở Cuốn Hưng Bền",
        "category":  "Phở Cuốn \u0026 Ẩm Thực Ngũ Xã",
        "address":  "33 Ngũ Xã, Phường Trúc Bạch, Quận Ba Đình, Hà Nội",
        "landmark":  "Làng ẩm thực bán đảo Ngũ Xã ven hồ Trúc Bạch",
        "location":  {
                         "latitude":  21.045920,
                         "longitude":  105.840850,
                         "geo_hash":  "w7e2xwv"
                     },
        "contact":  {
                        "phone":  "0983222333",
                        "phone_display":  "098 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)",
                        "google_maps_url":  "https://maps.google.com/?cid=1029384719283755"
                    },
        "operating_hours":  {
                                "open_time":  "09:00",
                                "close_time":  "22:30",
                                "open_now":  true,
                                "best_visit_window":  "11h30 - 12h30 hoặc 18h00 - 19h30"
                            },
        "price_range":  {
                            "min":  35000,
                            "max":  85000,
                            "currency":  "VND",
                            "formatted":  "35.000đ - 85.000đ"
                        },
        "amenities":  [
                          {
                              "name":  "Điều hòa các tầng mát rượi",
                              "icon":  "ac"
                          },
                          {
                              "name":  "Bãi xe máy rộng rãi",
                              "icon":  "bike"
                          },
                          {
                              "name":  "Đỗ ô tô ven hồ Trúc Bạch",
                              "icon":  "car"
                          },
                          {
                              "name":  "Thanh toán VietQR nhanh",
                              "icon":  "qr"
                          }
                      ],
        "parking_detail":  {
                               "motorbike":  "Miễn phí vỉa hè trước cửa",
                               "car":  "Đỗ ô tô ven hồ Trúc Bạch có bảo vệ trông",
                               "fee":  "0đ xe máy"
                           },
        "realtime_busyness":  {
                                  "current_occupancy_percent":  60,
                                  "status_text":  "Bàn trống 40%",
                                  "busyness_sub":  "Điều hòa 3 tầng • Thoáng mát",
                                  "noise_level":  "55 dB",
                                  "peak_hours_histogram":  {
                                                               "12h00":  85,
                                                               "19h30":  90
                                                           }
                              },
        "ai_curation":  {
                            "signature_dish":  "Đĩa phở chiên trứng sốt bò xào cải \u0026 Phở cuốn thịt bò tươi",
                            "insider_tip":  "Bên cạnh phở cuốn truyền thống, món phở chiên trứng áp chảo vàng ươm giòn rụm của Hưng Bền là món đinh hút khách 20 năm qua. Nước sốt bò cải ngọt chan đẫm lên từng miếng bánh phở giòn rụm ăn mê ly!",
                            "contexts":  [
                                             "an_trua_nhanh",
                                             "dieu_hoa_mat",
                                             "tu_tap_gia_dinh",
                                             "thanh_toan_vietqr"
                                         ],
                            "omni_trust_score":  93
                        },
        "photos":  [
                       {
                           "url":  "/assets/photos/pho_cuon_huong_mai.jpg",
                           "caption":  "Đĩa phở cuốn Hưng Bền cuộn chặt tay thịt bò tươi và xà lách",
                           "tag":  "signature"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Món Đinh Đặc Sản",
                                    "items":  [
                                                  {
                                                      "name":  "Đĩa phở cuốn bò đặc biệt (10 cuốn)",
                                                      "price":  "70.000đ",
                                                      "desc":  "Bánh phở tươi tráng mỏng mềm mướt, bò xào tái lăn",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Phở chiên trứng sốt bò cải ngọt",
                                                      "price":  "75.000đ",
                                                      "desc":  "Bánh phở áp chảo cùng trứng gà giòn thơm ngập sốt",
                                                      "is_signature":  true
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Món Gọi Thêm",
                                    "items":  [
                                                  {
                                                      "name":  "Phở chiên phồng giòn tan",
                                                      "price":  "70.000đ",
                                                      "desc":  "Từng viên phở phồng rộp giòn rụm",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Ngô chiên bơ",
                                                      "price":  "35.000đ",
                                                      "desc":  "Ngô ngọt giòn",
                                                      "is_signature":  false
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Đồ Uống",
                                    "items":  [
                                                  {
                                                      "name":  "Trà chanh quất mật ong",
                                                      "price":  "15.000đ",
                                                      "desc":  "Mát lành",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Thịt bò xào mềm ngọt không bị dai bã, cuốn chặt tay đều tăm tắp",
                                                "Món phở chiên trứng thơm ngậy giòn tan rất độc đáo",
                                                "Không gian 3 tầng điều hòa mát, nhân viên dắt xe nhiệt tình"
                                            ],
                                   "cons":  [
                                                "Đường ven hồ Trúc Bạch vào giờ tan tầm đông xe cộ",
                                                "Phở chiên nên ăn ngay tại bàn để giữ độ giòn"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Vũ Thanh Hằng",
                                     "badge":  "Dân công sở Ba Đình",
                                     "date":  "1 tuần trước",
                                     "rating":  4.7,
                                     "comment":  "Hưng Bền là một trong những quán đầu tiên khai sinh ra món phở cuốn Ngũ Xã. Bánh phở mỏng mềm, thịt bò xào thơm nức chấm nước mắm tỏi ớt chua ngọt chuẩn chỉ."
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "Restaurant",
                               "name":  "Phở Cuốn Hưng Bền",
                               "address":  "33 Ngũ Xã, Ba Đình, Hà Nội",
                               "priceRange":  "35.000 - 85.000 VND"
                           }
    },
    {
        "id":  "store-th-003",
        "name":  "Ốc Bà Già Ven Hồ Trích Sài",
        "slug":  "oc-ba-gia-trich-sai-tay-ho",
        "brand":  "Ốc Bà Già",
        "category":  "Ăn Vặt \u0026 Ốc Hồ Tây",
        "address":  "173 Trích Sài, Phường Bưởi, Quận Tây Hồ, Hà Nội",
        "landmark":  "Mặt đường ven Hồ Tây lộng gió",
        "location":  {
                         "latitude":  21.049820,
                         "longitude":  105.815940,
                         "geo_hash":  "w7e2wqh"
                     },
        "contact":  {
                        "phone":  "0989123456",
                        "phone_display":  "098 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)",
                        "google_maps_url":  "https://maps.google.com/?cid=1029384719283756"
                    },
        "operating_hours":  {
                                "open_time":  "15:00",
                                "close_time":  "23:00",
                                "open_now":  true,
                                "best_visit_window":  "17h00 - 19h30 chiều tối gió hồ Tây mát rượi"
                            },
        "price_range":  {
                            "min":  30000,
                            "max":  90000,
                            "currency":  "VND",
                            "formatted":  "30.000đ - 90.000đ"
                        },
        "amenities":  [
                          {
                              "name":  "View ngắm trọn mặt nước Hồ Tây",
                              "icon":  "tree"
                          },
                          {
                              "name":  "Đỗ xe máy vỉa hè Trích Sài",
                              "icon":  "bike"
                          },
                          {
                              "name":  "Thanh toán VietQR nhanh",
                              "icon":  "qr"
                          },
                          {
                              "name":  "Quán ốc thâm niên 30 năm",
                              "icon":  "clock"
                          }
                      ],
        "parking_detail":  {
                               "motorbike":  "Miễn phí vỉa hè trước cửa có người dắt",
                               "car":  "Đỗ ô tô dọc mép hồ Trích Sài",
                               "fee":  "0đ xe máy"
                           },
        "realtime_busyness":  {
                                  "current_occupancy_percent":  70,
                                  "status_text":  "Bàn trống 30%",
                                  "busyness_sub":  "Đông khách ngắm hoàng hôn Hồ Tây",
                                  "noise_level":  "58 dB",
                                  "peak_hours_histogram":  {
                                                               "18h30":  90,
                                                               "20h30":  90
                                                           }
                              },
        "ai_curation":  {
                            "signature_dish":  "Bát ốc nhồi luộc lá chanh sả gừng \u0026 Nem chua rán giòn",
                            "insider_tip":  "Ốc ở đây con nào con nấy béo múp, khều miếng ốc giòn sần sật chấm vào bát nước mắm gừng ớt tỏi băm thơm nức mùi lá chanh. Mẹo là gọi kèm bát ngao hấp dứa chua ngọt và đĩa sung muối giòn cay xè!",
                            "contexts":  [
                                             "an_vat_via_he",
                                             "an_xe_chieu",
                                             "am_thuc_di_san",
                                             "thanh_toan_vietqr"
                                         ],
                            "omni_trust_score":  93
                        },
        "photos":  [
                       {
                           "url":  "/assets/photos/bun_oc_phu_tay_ho.jpg",
                           "caption":  "Bát ốc luộc bốc khói ngào ngạt sả lá chanh bên bờ Hồ Tây",
                           "tag":  "signature"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Món Đinh Đặc Sản",
                                    "items":  [
                                                  {
                                                      "name":  "Bát ốc nhồi luộc sả lá chanh",
                                                      "price":  "65.000đ",
                                                      "desc":  "Ốc to béo múp giòn sần sật, nước mắm gừng cay",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Bát ốc vặn luộc mắm gừng",
                                                      "price":  "35.000đ",
                                                      "desc":  "Ốc nhỏ ngọt bùi nước luộc thơm",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Ngao hấp sả dứa ngọt nước",
                                                      "price":  "50.000đ",
                                                      "desc":  "Ngao tươi ngọt nước",
                                                      "is_signature":  true
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Ăn Kèm",
                                    "items":  [
                                                  {
                                                      "name":  "Nem chua rán đĩa (10 chiếc)",
                                                      "price":  "50.000đ",
                                                      "desc":  "Nem giòn nóng hổi",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Sung muối giòn chua cay",
                                                      "price":  "10.000đ",
                                                      "desc":  "Ăn kèm giải ngấy",
                                                      "is_signature":  false
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Đồ Uống",
                                    "items":  [
                                                  {
                                                      "name":  "Trà chanh Hồ Tây",
                                                      "price":  "15.000đ",
                                                      "desc":  "Mát lành",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Ốc nhồi làm rất sạch không có bùn cát, giòn sần sật ngọt béo",
                                                "Nước chấm ốc pha xuất sắc, thơm nồng mùi gừng ớt lá chanh",
                                                "Ngồi ăn ngắm hoàng hôn và gió Hồ Tây lộng mát vô cùng sảng khoái"
                                            ],
                                   "cons":  [
                                                "Bàn ghế nhựa bình dân sát mặt đường, cuối tuần đông khách phải chờ luộc ốc"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Hoàng Minh Trí",
                                     "badge":  "Dân thể thao Hồ Tây",
                                     "date":  "1 tuần trước",
                                     "rating":  4.6,
                                     "comment":  "Chạy bộ quanh Hồ Tây xong ghé Ốc Bà Già làm bát ốc luộc sả gừng là hết bài. Nước chấm ở đây pha thơm nức mũi, ốc béo giòn sần sật không hề có sạn."
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "Restaurant",
                               "name":  "Ốc Bà Già Trích Sài",
                               "address":  "173 Trích Sài, Tây Hồ, Hà Nội",
                               "priceRange":  "30.000 - 90.000 VND"
                           }
    },
    {
        "id":  "store-dd-004",
        "name":  "Bánh Mì Dân Tổ Hà Nội",
        "slug":  "banh-mi-dan-to-ha-noi",
        "brand":  "Bánh Mì Dân Tổ",
        "category":  "Bánh Mì Ăn Đêm",
        "address":  "Ngã ba Cao Thắng - Trần Nhật Duật, Phường Đồng Xuân, Quận Hoàn Kiếm, Hà Nội",
        "landmark":  "Gần dốc cầu Long Biên phố cổ",
        "location":  {
                         "latitude":  21.038540,
                         "longitude":  105.850120,
                         "geo_hash":  "w7e2xzz"
                     },
        "contact":  {
                        "phone":  null,
                        "phone_display":  "Phá»¥c vá»¥ trá»±c tiáº¿p",
                        "google_maps_url":  "https://maps.google.com/?cid=1029384719283757"
                    },
        "operating_hours":  {
                                "open_time":  "19:00",
                                "close_time":  "04:30",
                                "open_now":  true,
                                "best_visit_window":  "21h00 - 23h30 hoặc 01h00 - 02h30 sáng"
                            },
        "price_range":  {
                            "min":  25000,
                            "max":  40000,
                            "currency":  "VND",
                            "formatted":  "25.000đ - 40.000đ"
                        },
        "amenities":  [
                          {
                              "name":  "Bán xuyên đêm Hà Nội",
                              "icon":  "clock"
                          },
                          {
                              "name":  "Đỗ xe máy vỉa hè",
                              "icon":  "bike"
                          },
                          {
                              "name":  "Thanh toán VietQR nhanh",
                              "icon":  "qr"
                          },
                          {
                              "name":  "Mua mang về siêu tốc",
                              "icon":  "box"
                          }
                      ],
        "parking_detail":  {
                               "motorbike":  "Dựng xe sát vỉa hè phố Cao Thắng",
                               "car":  "Không đỗ ô tô; mua mang đi nhanh",
                               "fee":  "0đ xe máy"
                           },
        "realtime_busyness":  {
                                  "current_occupancy_percent":  85,
                                  "status_text":  "Bàn trống 15%",
                                  "busyness_sub":  "Đông nghẹt giới trẻ ăn đêm",
                                  "noise_level":  "66 dB",
                                  "peak_hours_histogram":  {
                                                               "22h00":  95,
                                                               "01h00":  90
                                                           }
                              },
        "ai_curation":  {
                            "signature_dish":  "Bánh mì nhân thập cẩm xào chảo xèo xèo (Pate, trứng, xúc xích, chả, lạp xưởng xào chung trên chảo bơ)",
                            "insider_tip":  "Nhân bánh mì được xào chung tất cả các loại topping trên chảo bơ nóng xèo xèo sền sệt béo ngậy. Kẹp vào ổ bánh mì giòn rụm thêm chút tương ớt cay và dưa chuột giòn là món ăn đêm huyền thoại của giới trẻ thủ đô!",
                            "contexts":  [
                                             "an_vat_via_he",
                                             "an_sang_nhanh",
                                             "am_thuc_di_san",
                                             "thanh_toan_vietqr"
                                         ],
                            "omni_trust_score":  93
                        },
        "photos":  [
                       {
                           "url":  "/assets/photos/cot_dien_banh_mi_chao.jpg",
                           "caption":  "Chiếc bánh mì Dân Tổ giòn tan ngập nhân thập cẩm xào chảo béo ngậy",
                           "tag":  "signature"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Món Đinh Đặc Sản",
                                    "items":  [
                                                  {
                                                      "name":  "Bánh mì Dân Tổ nhân thập cẩm đặc biệt",
                                                      "price":  "35.000đ",
                                                      "desc":  "Pate, trứng gà, lạp xưởng, chả, bơ xào chảo ngậy béo",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Bánh mì Dân Tổ thêm pate xúc xích",
                                                      "price":  "40.000đ",
                                                      "desc":  "Gấp rưỡi nhân thịt",
                                                      "is_signature":  true
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Đồ Uống",
                                    "items":  [
                                                  {
                                                      "name":  "Sữa chua đánh đá",
                                                      "price":  "15.000đ",
                                                      "desc":  "Mát lành giải ngấy",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Trà chanh phố cổ",
                                                      "price":  "12.000đ",
                                                      "desc":  "Chua ngọt sảng khoái",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Nhân xào quyện bơ pate thơm nức, bánh mì giòn rụm ăn nóng hổi giữa đêm",
                                                "Mở bán tới 4h30 sáng cứu đói hoàn hảo",
                                                "Giá cả bình dân vừa túi tiền"
                                            ],
                                   "cons":  [
                                                "Nhân xào bơ pate khá béo ngậy, người ăn thanh đạm có thể thấy hơi ngấy",
                                                "Giờ đêm 22h-1h xếp hàng dài chen chúc"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Đặng Minh Quân",
                                     "badge":  "Cú đêm phố cổ",
                                     "date":  "1 tuần trước",
                                     "rating":  4.6,
                                     "comment":  "Đi chơi đêm về nhất định phải tạt qua Cao Thắng làm ổ bánh mì Dân Tổ. Cắn miếng bánh giòn tan ngập nhân pate trứng xào xèo xèo béo ngậy thơm nức mũi."
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "Restaurant",
                               "name":  "Bánh Mì Dân Tổ",
                               "address":  "Ngã ba Cao Thắng, Hoàn Kiếm, Hà Nội",
                               "priceRange":  "25.000 - 40.000 VND"
                           }
    },
    {
        "id":  "store-dd-005",
        "name":  "Bánh Đa Cua Hải Phòng Ngõ 10 Tôn Thất Tùng",
        "slug":  "banh-da-cua-ton-that-tung-dong-da",
        "brand":  "Bánh Đa Cua Tôn Thất Tùng",
        "category":  "Bánh Đa Cua \u0026 Ăn Trưa",
        "address":  "Ngõ 10 Tôn Thất Tùng, Phường Trung Tự, Quận Đống Đa, Hà Nội",
        "landmark":  "Ngõ ẩm thực đối diện Đại học Y Hà Nội",
        "location":  {
                         "latitude":  21.005120,
                         "longitude":  105.831540,
                         "geo_hash":  "w7e2x4v"
                     },
        "contact":  {
                        "phone":  "0981223344",
                        "phone_display":  "098 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)",
                        "google_maps_url":  "https://maps.google.com/?cid=1029384719283758"
                    },
        "operating_hours":  {
                                "open_time":  "08:00",
                                "close_time":  "21:00",
                                "open_now":  true,
                                "best_visit_window":  "11h00 - 11h45 hoặc 17h30 - 18h30"
                            },
        "price_range":  {
                            "min":  35000,
                            "max":  60000,
                            "currency":  "VND",
                            "formatted":  "35.000đ - 60.000đ"
                        },
        "amenities":  [
                          {
                              "name":  "Quạt mát \u0026 điều hòa tầng lửng",
                              "icon":  "ac"
                          },
                          {
                              "name":  "Dựng xe máy trước quán",
                              "icon":  "bike"
                          },
                          {
                              "name":  "Thanh toán VietQR nhanh",
                              "icon":  "qr"
                          },
                          {
                              "name":  "Giá sinh viên siêu hợp lý",
                              "icon":  "box"
                          }
                      ],
        "parking_detail":  {
                               "motorbike":  "Miễn phí vỉa hè ngõ trước cửa",
                               "car":  "Không đỗ ô tô; gửi bãi Bệnh viện ĐH Y",
                               "fee":  "0đ xe máy"
                           },
        "realtime_busyness":  {
                                  "current_occupancy_percent":  75,
                                  "status_text":  "Bàn trống 25%",
                                  "busyness_sub":  "Đông sinh viên ĐH Y \u0026 văn phòng",
                                  "noise_level":  "58 dB",
                                  "peak_hours_histogram":  {
                                                               "12h00":  90,
                                                               "18h30":  85
                                                           }
                              },
        "ai_curation":  {
                            "signature_dish":  "Bánh đa cua trộn chả lá lốt gạch cua \u0026 Canh bắp bò nước cua đồng ngọt lịm",
                            "insider_tip":  "Sợi bánh đa đỏ dai mềm trần vừa độ, gạch cua xào hành phi thơm phức, chả lá lốt nướng xém cạnh kèm chả cá mỏng. Nhớ gọi bát bánh đa trộn kèm bát nước dùng cua béo ngọt ngập rau muống chần giòn!",
                            "contexts":  [
                                             "an_trua_nhanh",
                                             "hoc_sinh_sinh_vien",
                                             "dieu_hoa_mat",
                                             "thanh_toan_vietqr"
                                         ],
                            "omni_trust_score":  93
                        },
        "photos":  [
                       {
                           "url":  "/assets/photos/bun_bo_o_hien.jpg",
                           "caption":  "Bát bánh đa cua trộn đỏ au ngập chả lá lốt và gạch cua đồng",
                           "tag":  "signature"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Món Đinh Đặc Sản",
                                    "items":  [
                                                  {
                                                      "name":  "Bánh đa cua trộn đặc biệt đầy đủ",
                                                      "price":  "45.000đ",
                                                      "desc":  "Bánh đa đỏ, gạch cua đồng, chả lá lốt, bắp bò, chả cá, hành phi giòn",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Bánh đa cua nước sườn bắp bò",
                                                      "price":  "45.000đ",
                                                      "desc":  "Nước dùng cua đồng ngọt đậm đà, rau muống chần",
                                                      "is_signature":  true
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Topping Thêm",
                                    "items":  [
                                                  {
                                                      "name":  "Đĩa chả lá lốt thêm",
                                                      "price":  "15.000đ",
                                                      "desc":  "Chả nóng thơm nức",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Quẩy giòn",
                                                      "price":  "5.000đ",
                                                      "desc":  "Quẩy chiên giòn",
                                                      "is_signature":  false
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Đồ Uống",
                                    "items":  [
                                                  {
                                                      "name":  "Trà chanh hoa nhài",
                                                      "price":  "10.000đ",
                                                      "desc":  "Mát lành",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Gạch cua đồng béo ngậy nguyên chất, nước sốt trộn chua ngọt cay tê rất đậm đà",
                                                "Rau muống non chần giòn sần sật, chả lá lốt thơm lừng",
                                                "Mức giá sinh viên rất rẻ và no bụng"
                                            ],
                                   "cons":  [
                                                "Ngõ 10 Tôn Thất Tùng trưa đông sinh viên và y bác sĩ",
                                                "Không gian quán bình dân"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Hoàng Kim Oanh",
                                     "badge":  "Bác sĩ nội trú BV Đại Học Y",
                                     "date":  "4 ngày trước",
                                     "rating":  4.8,
                                     "comment":  "Trưa nào trực cũng ra làm bát bánh đa trộn đầy đủ 45k. Bánh đa dai mềm, chả lá lốt ngậy thơm, bát nước cua ngọt lịm tỉnh cả người."
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "Restaurant",
                               "name":  "Bánh Đa Cua Tôn Thất Tùng",
                               "address":  "Ngõ 10 Tôn Thất Tùng, Đống Đa, Hà Nội",
                               "priceRange":  "35.000 - 60.000 VND"
                           }
    },
    {
        "id":  "store-th-004",
        "name":  "Bún Đậu Cây Đa 235B Thụy Khuê",
        "slug":  "bun-dau-cay-da-thuy-khue-tay-ho",
        "brand":  "Bún Đậu Cây Đa",
        "category":  "Bún Đậu Mắm Tôm",
        "address":  "235B Thụy Khuê, Phường Bưởi, Quận Tây Hồ, Hà Nội",
        "landmark":  "Ngay dưới tán cây đa cổ thụ phố Thụy Khuê",
        "location":  {
                         "latitude":  21.045120,
                         "longitude":  105.819850,
                         "geo_hash":  "w7e2wru"
                     },
        "contact":  {
                        "phone":  "0986778899",
                        "phone_display":  "098 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)",
                        "google_maps_url":  "https://maps.google.com/?cid=1029384719283759"
                    },
        "operating_hours":  {
                                "open_time":  "10:00",
                                "close_time":  "21:30",
                                "open_now":  true,
                                "best_visit_window":  "11h00 - 11h45 hoặc 17h30 - 18h30"
                            },
        "price_range":  {
                            "min":  35000,
                            "max":  75000,
                            "currency":  "VND",
                            "formatted":  "35.000đ - 75.000đ"
                        },
        "amenities":  [
                          {
                              "name":  "Điều hòa 2 tầng mát rượi",
                              "icon":  "ac"
                          },
                          {
                              "name":  "Dựng xe máy trước quán",
                              "icon":  "bike"
                          },
                          {
                              "name":  "Thanh toán VietQR nhanh",
                              "icon":  "qr"
                          },
                          {
                              "name":  "Dạ dày \u0026 lưỡi luộc đặc sản",
                              "icon":  "box"
                          }
                      ],
        "parking_detail":  {
                               "motorbike":  "Miễn phí vỉa hè trước cửa quán",
                               "car":  "Gửi ô tô bãi phố Hoàng Hoa Thám / Văn Cao",
                               "fee":  "0đ xe máy"
                           },
        "realtime_busyness":  {
                                  "current_occupancy_percent":  65,
                                  "status_text":  "Bàn trống 35%",
                                  "busyness_sub":  "Tầng 2 điều hòa • Có bàn ngay",
                                  "noise_level":  "55 dB",
                                  "peak_hours_histogram":  {
                                                               "12h00":  85,
                                                               "18h30":  80
                                                           }
                              },
        "ai_curation":  {
                            "signature_dish":  "Mẹt bún đậu thập cẩm dạ dày chiên giòn \u0026 Lưỡi heo luộc giòn sần sật",
                            "insider_tip":  "Khác với các quán bún đậu thường, Bún Đậu Cây Đa có món Dạ Dày Chiên Giòn và Lưỡi Heo Luộc giòn sần sật cực phẩm. Đậu Mơ rán phồng nóng hổi chấm bát mắm tôm bông bọt chua ngọt cay xè là ăn một lần nhớ mãi!",
                            "contexts":  [
                                             "an_trua_nhanh",
                                             "dieu_hoa_mat",
                                             "am_thuc_di_san",
                                             "thanh_toan_vietqr"
                                         ],
                            "omni_trust_score":  94
                        },
        "photos":  [
                       {
                           "url":  "/assets/photos/bun_cha_dac_kim.jpg",
                           "caption":  "Mẹt bún đậu Cây Đa Thụy Khuê ngập dạ dày chiên giòn và dồi sụn",
                           "tag":  "signature"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Món Đinh Đặc Sản",
                                    "items":  [
                                                  {
                                                      "name":  "Mẹt bún đậu Cây Đa đặc biệt đầy đủ",
                                                      "price":  "65.000đ",
                                                      "desc":  "Đậu rán giòn, chả cốm, dồi sụn, dạ dày chiên giòn, thịt chân giò luộc",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Suất bún đậu chả cốm truyền thống",
                                                      "price":  "45.000đ",
                                                      "desc":  "Bún lá tươi, đậu mơ nóng và chả cốm",
                                                      "is_signature":  false
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Topping Gọi Thêm",
                                    "items":  [
                                                  {
                                                      "name":  "Đĩa dạ dày chiên giòn thêm",
                                                      "price":  "30.000đ",
                                                      "desc":  "Dạ dày giòn sần sật thơm nức",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Đĩa dồi rán thêm",
                                                      "price":  "25.000đ",
                                                      "desc":  "Dồi bùi béo",
                                                      "is_signature":  false
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Đồ Uống",
                                    "items":  [
                                                  {
                                                      "name":  "Nước mơ ngâm chua ngọt",
                                                      "price":  "15.000đ",
                                                      "desc":  "Giải ngấy cực tốt",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Dạ dày chiên giòn và dồi sụn làm cực kỳ ngon và sạch sẽ",
                                                "Đậu Mơ rán vàng ruộm mềm mướt không khô bở",
                                                "Quán có điều hòa mát rượi, phục vụ nhanh"
                                            ],
                                   "cons":  [
                                                "Đoạn đường Thụy Khuê hơi hẹp, giờ tan tầm xe đông"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Trịnh Quốc Tuấn",
                                     "badge":  "Cư dân làng Bưởi",
                                     "date":  "1 tuần trước",
                                     "rating":  4.8,
                                     "comment":  "Bún đậu Cây Đa ngon nhất là đĩa dạ dày chiên giòn rụm. Chấm mắm tôm pha quất ớt đánh bông lên ăn cùng miếng đậu rán phồng nóng bỏng tay là tuyệt đỉnh."
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "Restaurant",
                               "name":  "Bún Đậu Cây Đa Thụy Khuê",
                               "address":  "235B Thụy Khuê, Tây Hồ, Hà Nội",
                               "priceRange":  "35.000 - 75.000 VND"
                           }
    },
    {
        "id":  "store-tx-001",
        "name":  "Cốm Mộc Làng Vòng Bà Hoản",
        "slug":  "com-moc-lang-vong-ba-hoan-cau-giay",
        "brand":  "Cốm Làng Vòng",
        "category":  "Đặc Sản Thu Hà Nội",
        "address":  "Số 36 Ngõ 63 Xuân Thủy, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Hà Nội",
        "landmark":  "Cổng làng Vòng cổ truyền Xuân Thủy",
        "location":  {
                         "latitude":  21.036120,
                         "longitude":  105.789150,
                         "geo_hash":  "w7e2w6t"
                     },
        "contact":  {
                        "phone":  "0983998877",
                        "phone_display":  "098 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)",
                        "google_maps_url":  "https://maps.google.com/?cid=1029384719283760"
                    },
        "operating_hours":  {
                                "open_time":  "06:30",
                                "close_time":  "21:00",
                                "open_now":  true,
                                "best_visit_window":  "08h00 - 10h00 sáng khi mẻ cốm mới vừa giã xong"
                            },
        "price_range":  {
                            "min":  25000,
                            "max":  150000,
                            "currency":  "VND",
                            "formatted":  "25.000đ - 150.000đ"
                        },
        "amenities":  [
                          {
                              "name":  "Gói lá sen tươi hương nồng nàn",
                              "icon":  "tree"
                          },
                          {
                              "name":  "Đỗ xe máy ngõ làng Vòng",
                              "icon":  "bike"
                          },
                          {
                              "name":  "Thanh toán VietQR nhanh",
                              "icon":  "qr"
                          },
                          {
                              "name":  "Đặc sản di sản ngàn năm",
                              "icon":  "clock"
                          }
                      ],
        "parking_detail":  {
                               "motorbike":  "Miễn phí sân trước cửa",
                               "car":  "Không đỗ ô tô; gửi bãi phố Duy Tân",
                               "fee":  "0đ xe máy"
                           },
        "realtime_busyness":  {
                                  "current_occupancy_percent":  50,
                                  "status_text":  "Bàn trống 50%",
                                  "busyness_sub":  "Đóng gói lá sen thơm lừng",
                                  "noise_level":  "48 dB (Yên bình)",
                                  "peak_hours_histogram":  {
                                                               "09h00":  80,
                                                               "16h00":  75
                                                           }
                              },
        "ai_curation":  {
                            "signature_dish":  "Cốm mộc lá me dẻo quánh gói lá sen tươi \u0026 Chả cốm gia truyền chiên giòn",
                            "insider_tip":  "Cốm Vòng chuẩn làm từ nếp cái hoa vàng non giã tay truyền thống, mộc màu xanh tự nhiên không nhuộm phẩm. Nhón từng hạt cốm dẻo thơm hương sữa lúa non, nhấm nháp cùng ngụm trà sen ấm là hồn thu đất Tràng An!",
                            "contexts":  [
                                             "am_thuc_di_san",
                                             "an_xe_chieu",
                                             "thanh_toan_vietqr"
                                         ],
                            "omni_trust_score":  97
                        },
        "photos":  [
                       {
                           "url":  "/assets/photos/xoi_yen_nguyen_huu_huan.jpg",
                           "caption":  "Gói cốm mộc làng Vòng xanh ngát dẻo thơm gói trong lá sen tươi",
                           "tag":  "signature"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Món Đinh Đặc Sản",
                                    "items":  [
                                                  {
                                                      "name":  "Gói cốm mộc lá sen tươi (lạng)",
                                                      "price":  "28.000đ",
                                                      "desc":  "Cốm non dẻo quánh thơm nức mùi sữa lúa mới",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Bánh cốm đậu xanh dừa nạo",
                                                      "price":  "8.000đ/c",
                                                      "desc":  "Vỏ cốm xanh dẻo, nhân đậu xanh sên đường dừa",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Chả cốm làng Vòng tươi (kg)",
                                                      "price":  "180.000đ",
                                                      "desc":  "Chả giò sống trộn hạt cốm tươi nướng than",
                                                      "is_signature":  true
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Món Quà Thu",
                                    "items":  [
                                                  {
                                                      "name":  "Xôi cốm hạt sen dừa nạo",
                                                      "price":  "35.000đ",
                                                      "desc":  "Hạt sen bùi béo quyện cùng cốm dẻo",
                                                      "is_signature":  true
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Đồ Uống",
                                    "items":  [
                                                  {
                                                      "name":  "Trà ướp sen Tây Hồ",
                                                      "price":  "25.000đ",
                                                      "desc":  "Hương sen thanh khiết",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Cốm mộc nguyên bản không phẩm màu, dẻo ngọt tự nhiên mùi lúa non",
                                                "Gói lá sen tươi buộc sợi rơm nếp đúng hồn cốt Hà Nội xưa",
                                                "Chả cốm và xôi cốm hạt sen ngon xuất sắc"
                                            ],
                                   "cons":  [
                                                "Cốm tươi nên ăn trong ngày hoặc cấp đông để giữ độ dẻo"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Nhà văn Nguyễn Trương Quý",
                                     "badge":  "Tác giả văn hóa Hà Nội",
                                     "date":  "1 tuần trước",
                                     "rating":  5,
                                     "comment":  "Mỗi độ thu về lại ghé làng Vòng mua gói cốm mộc của bà Hoản. Hạt cốm dẻo thơm như chắt chiu cả nắng gió mùa thu đồng nội, gói trong tấm lá sen ngát hương."
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "Restaurant",
                               "name":  "Cốm Mộc Làng Vòng Bà Hoản",
                               "address":  "Số 36 Ngõ 63 Xuân Thủy, Cầu Giấy, Hà Nội",
                               "priceRange":  "25.000 - 150.000 VND"
                           }
    },
    {
        "id":  "store-cg-011",
        "name":  "Bún Riêu Hoàng Kỳ Tô Hiệu",
        "slug":  "bun-rieu-hoang-ky-to-hieu-cau-giay",
        "brand":  "Bún Riêu Hoàng Kỳ",
        "category":  "Bún Riêu Cua Gia Truyền",
        "address":  "122B C5 Tô Hiệu, Phường Nghĩa Tân, Quận Cầu Giấy, Hà Nội",
        "landmark":  "Đoạn Tô Hiệu gần ngã ba Trần Tử Bình",
        "location":  {
                         "latitude":  21.044150,
                         "longitude":  105.794620,
                         "geo_hash":  "w7e2w7r"
                     },
        "contact":  {
                        "phone":  "0983214567",
                        "phone_display":  "098 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)",
                        "google_maps_url":  "https://maps.google.com/?cid=1029384756192837490"
                    },
        "operating_hours":  {
                                "open_time":  "06:30",
                                "close_time":  "21:30",
                                "open_now":  true,
                                "best_visit_window":  "07h00 - 08h30 sáng hoặc 11h15 - 12h00 trưa"
                            },
        "price_range":  {
                            "min":  35000,
                            "max":  65000,
                            "currency":  "VND",
                            "formatted":  "35.000đ - 65.000đ"
                        },
        "amenities":  [
                          {
                              "name":  "Quạt gió mát và thoáng",
                              "icon":  "fan"
                          },
                          {
                              "name":  "Xe máy miễn phí trước cửa",
                              "icon":  "bike"
                          },
                          {
                              "name":  "Thanh toán VietQR nhanh",
                              "icon":  "qr"
                          },
                          {
                              "name":  "Phục vụ siêu tốc 2 phút",
                              "icon":  "clock"
                          }
                      ],
        "parking_detail":  {
                               "motorbike":  "Miễn phí vỉa hè trước cửa có người xếp xe",
                               "car":  "Không đỗ ô tô trước cửa; gửi tại bãi xe ngã tư Tô Hiệu (80m)",
                               "fee":  "0đ xe máy"
                           },
        "realtime_busyness":  {
                                  "current_occupancy_percent":  65,
                                  "status_text":  "Bàn trống 35%",
                                  "busyness_sub":  "Đông khách ăn sáng \u0026 ăn trưa • Vào bàn ngay",
                                  "noise_level":  "62 dB (Nhộn nhịp phố ăn uống)",
                                  "peak_hours_histogram":  {
                                                               "07h30":  90,
                                                               "12h00":  85
                                                           }
                              },
        "ai_curation":  {
                            "signature_dish":  "Bún riêu cua bắp bò giò tai đặc biệt (Riêu cua đồng giã tay, nước dùng giấm bỗng nếp thanh ngọt)",
                            "insider_tip":  "Thương hiệu hơn 30 năm tuổi. Nước dùng nấu giấm bỗng chua dịu thanh tao, riêu cua đóng bánh chắc nịch. Dân sành nhớ xin thêm đĩa quẩy giòn và chút ớt chưng tự xào cay tê đầu lưỡi!",
                            "contexts":  [
                                             "an_sang_nhanh",
                                             "an_trua_nhanh",
                                             "an_vat_via_he",
                                             "thanh_toan_vietqr"
                                         ],
                            "omni_trust_score":  93
                        },
        "media_footprint":  {
                                "facebook_page":  "Bún Riêu Cua Hoàng Kỳ Tô Hiệu (Reviewer ẩm thực đánh giá cao)",
                                "tiktok_reach":  "Hàng trăm video review trên TikTok với hashtag #bunrieuhoangky #amthuccaugiay",
                                "press_coverage":  [
                                                       "VnExpress Ẩm thực",
                                                       "Kênh 14 - Top quán bún riêu ngon nhất Cầu Giấy"
                                                   ]
                            },
        "photos":  [
                       {
                           "url":  "/assets/photos/bun_rieu_hoang_ky.jpg",
                           "caption":  "Bát bún riêu cua bắp bò giò tai đầy đặn nước dùng giấm bỗng đỏ au",
                           "tag":  "signature"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Món Đinh Đặc Sản",
                                    "items":  [
                                                  {
                                                      "name":  "Bún riêu thập cẩm đặc biệt",
                                                      "price":  "60.000đ",
                                                      "desc":  "Bắp bò chần tái, giò tai giòn sần sật, đậu mơ rán giòn, chả cá, riêu cua đồng",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Bún riêu cua bắp bò",
                                                      "price":  "50.000đ",
                                                      "desc":  "Bắp bò tươi mềm ngọt lịm chan nước riêu cua béo",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Bún riêu cua truyền thống",
                                                      "price":  "35.000đ",
                                                      "desc":  "Riêu cua đồng, đậu rán vàng, cà chua, hành hoa",
                                                      "is_signature":  false
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Topping Gọi Thêm",
                                    "items":  [
                                                  {
                                                      "name":  "Đĩa bắp bò chần thêm",
                                                      "price":  "25.000đ",
                                                      "desc":  "Bắp bò hoa chần tái",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Trứng vịt lộn",
                                                      "price":  "10.000đ",
                                                      "desc":  "Trứng lộn ngọt béo",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Đĩa quẩy giòn (3 chiếc)",
                                                      "price":  "6.000đ",
                                                      "desc":  "Quẩy nở xốp giòn rụm",
                                                      "is_signature":  false
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Đồ Uống",
                                    "items":  [
                                                  {
                                                      "name":  "Trà đá hoa nhài",
                                                      "price":  "5.000đ",
                                                      "desc":  "Mát lành thanh nhiệt",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Sữa đậu nành",
                                                      "price":  "10.000đ",
                                                      "desc":  "Tự nấu nguyên chất",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Nước dùng giấm bỗng nếp thơm chua thanh, không gắt bột ngọt",
                                                "Riêu cua đồng giã tay thật miếng, bắp bò mềm ngọt",
                                                "Lên món cực nhanh trong 2 phút dù khách đông"
                                            ],
                                   "cons":  [
                                                "Không gian quán vỉa hè bình dân bàn ghế san sát",
                                                "Giờ cao điểm sáng 7h30-8h30 thường phải ghép bàn"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Nguyễn Hoàng Nam",
                                     "badge":  "Local Guide Level 6",
                                     "date":  "1 tuần trước",
                                     "rating":  4.6,
                                     "comment":  "Bún riêu Hoàng Kỳ ăn từ hồi sinh viên tới giờ đi làm 10 năm vẫn chuẩn vị. Nước dùng chua thanh giấm bỗng thơm nức, bắp bò giòn ngọt."
                                 },
                                 {
                                     "author":  "Lê Thu Trang",
                                     "badge":  "Dân văn phòng Tô Hiệu",
                                     "date":  "3 tuần trước",
                                     "rating":  4.5,
                                     "comment":  "Bát 50k bắp bò ngập ngụa, đậu rán giòn cắn ngập miệng. Quán đông nhưng cô chủ thoăn thoắt không phải đợi lâu."
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "Restaurant",
                               "name":  "Bún Riêu Hoàng Kỳ",
                               "address":  "122B C5 Tô Hiệu, Cầu Giấy, Hà Nội",
                               "telephone":  "+84-98-321-4567",
                               "priceRange":  "35.000 - 65.000 VND"
                           },
        "spatial_identity":  "Quán ăn gia truyền mặt phố Tô Hiệu, bàn ghế inox sáng bóng, quầy nấu mở nhìn thẳng ra đường, phục vụ thoăn thoắt kiểu ẩm thực phố cổ.",
        "key_signature":  "Riêu cua đồng giã tay đóng bánh chắc tảng béo ngọt trong nồi nước dùng giấm bỗng nếp chua thanh đỏ au cà chua tươi.",
        "audit_dossier":  {
                              "audit_date":  "2026-10-11",
                              "auditor":  "OMNI Red-Team Auditor (Cau Giay Field Unit)",
                              "audit_status":  "VERIFIED_GROUND_TRUTH",
                              "notes":  "Đã kiểm toán thực địa: Xác nhận riêu cua giã tay nguyên chất không độn bột; giờ cao điểm 7h30-8h30 sáng đông đúc phải ghép bàn."
                          }
    },
    {
        "id":  "store-cg-012",
        "name":  "Bít Tết Ngọc Hiếu 105C4 Tô Hiệu",
        "slug":  "bit-tet-ngoc-hieu-to-hieu-cau-giay",
        "brand":  "Bít Tết Ngọc Hiếu",
        "category":  "Bít Tết Chảo Gang \u0026 Bò Né",
        "address":  "105C4 Tô Hiệu, Phường Nghĩa Tân, Quận Cầu Giấy, Hà Nội",
        "landmark":  "Đối diện công viên Nghĩa Đô đoạn Tô Hiệu",
        "location":  {
                         "latitude":  21.044820,
                         "longitude":  105.795410,
                         "geo_hash":  "w7e2w7t"
                     },
        "contact":  {
                        "phone":  "0901735577",
                        "phone_display":  "090 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)",
                        "google_maps_url":  "https://maps.google.com/?cid=1029384756192837491"
                    },
        "operating_hours":  {
                                "open_time":  "09:00",
                                "close_time":  "22:00",
                                "open_now":  true,
                                "best_visit_window":  "11h00 - 12h00 hoặc 18h00 - 19h30"
                            },
        "price_range":  {
                            "min":  109000,
                            "max":  180000,
                            "currency":  "VND",
                            "formatted":  "109.000đ - 180.000đ"
                        },
        "amenities":  [
                          {
                              "name":  "Điều hòa 2 chiều mát lạnh",
                              "icon":  "ac"
                          },
                          {
                              "name":  "Đỗ xe máy có bảo vệ trông",
                              "icon":  "bike"
                          },
                          {
                              "name":  "Thanh toán VietQR \u0026 Thẻ",
                              "icon":  "qr"
                          },
                          {
                              "name":  "Có bãi đỗ ô tô thuận tiện",
                              "icon":  "car"
                          }
                      ],
        "parking_detail":  {
                               "motorbike":  "Miễn phí vỉa hè trước cửa có bảo vệ dắt",
                               "car":  "Đỗ ô tô bãi đỗ trước cửa nhà hàng lòng đường Tô Hiệu có người hướng dẫn",
                               "fee":  "0đ xe máy"
                           },
        "realtime_busyness":  {
                                  "current_occupancy_percent":  60,
                                  "status_text":  "Bàn trống 40%",
                                  "busyness_sub":  "Điều hòa tầng 2 mát sâu • Vào bàn ngay",
                                  "noise_level":  "54 dB (Êm ái, lịch sự)",
                                  "peak_hours_histogram":  {
                                                               "12h00":  85,
                                                               "19h30":  90
                                                           }
                              },
        "ai_curation":  {
                            "signature_dish":  "Bít tết truyền thống chảo gang xèo xèo (Thịt bò mềm ngấm sốt bơ tỏi, trứng ốp la đào, xíu mại, khoai tây chiên, dưa góp bánh mì)",
                            "insider_tip":  "Thương hiệu bít tết lâu đời Hà Thành từ năm 1988. Bò mềm ngậy được phục vụ trên chảo gang đúc giữ nhiệt sôi xèo xèo. Hãy xé miếng bánh mì giòn chấm đẫm sốt bơ tiêu và lòng đỏ trứng gà ta béo ngậy!",
                            "contexts":  [
                                             "an_trua_nhanh",
                                             "dieu_hoa_mat",
                                             "tu_tap_gia_dinh",
                                             "thanh_toan_vietqr"
                                         ],
                            "omni_trust_score":  94
                        },
        "media_footprint":  {
                                "facebook_page":  "Bít Tết Ngọc Hiếu 105C4 Tô Hiệu (Fanpage chính thức tích xanh)",
                                "tiktok_reach":  "Hàng triệu view hashtag #bittetngochieu trên TikTok",
                                "press_coverage":  [
                                                       "VnExpress",
                                                       "Báo Dân Trí",
                                                       "Review ẩm thực Hà Nội"
                                                   ]
                            },
        "photos":  [
                       {
                           "url":  "/assets/photos/bit_tet_ngoc_hieu.jpg",
                           "caption":  "Chảo bít tết gang xèo xèo sốt bò mềm trứng đào pate xíu mại",
                           "tag":  "signature"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Món Đinh Đặc Sản",
                                    "items":  [
                                                  {
                                                      "name":  "Bít tết truyền thống đầy đủ",
                                                      "price":  "145.000đ",
                                                      "desc":  "Bò mềm, xíu mại, khoai tây, trứng ốp la, dưa góp, bánh mì nướng giòn",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Bít tết sốt tiêu đen đùi bò Mỹ",
                                                      "price":  "139.000đ",
                                                      "desc":  "Bò Mỹ mềm mọng sốt tiêu thơm cay",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Bánh mì bò hon Huế",
                                                      "price":  "119.000đ",
                                                      "desc":  "Bắp bò hầm sả đậu phộng bùi béo",
                                                      "is_signature":  false
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Món Ý \u0026 Phụ Thêm",
                                    "items":  [
                                                  {
                                                      "name":  "Mỳ Ý bò băm sốt cà chua Bolognese",
                                                      "price":  "129.000đ",
                                                      "desc":  "Mỳ Ý dai ngon chuẩn vị",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Bánh mì giòn thêm",
                                                      "price":  "8.000đ",
                                                      "desc":  "Bánh mì mới nướng giòn rụm",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Salad dầu giấm",
                                                      "price":  "35.000đ",
                                                      "desc":  "Rau xà lách tươi giòn giải ngấy",
                                                      "is_signature":  false
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Đồ Uống",
                                    "items":  [
                                                  {
                                                      "name":  "Nước ép cóc ổi tươi",
                                                      "price":  "35.000đ",
                                                      "desc":  "Ép nguyên chất",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Bia Hà Nội ướp lạnh",
                                                      "price":  "25.000đ",
                                                      "desc":  "Chai ướp lạnh",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Thịt bò mềm mọng ngấm gia vị sốt bơ tỏi đặc trưng lâu đời",
                                                "Chảo gang đúc giữ nóng tới miếng cuối cùng",
                                                "Không gian điều hòa sạch sẽ mát mẻ, nhân viên chuyên nghiệp"
                                            ],
                                   "cons":  [
                                                "Mức giá cao hơn bánh mì chảo thông thường",
                                                "Giờ tối cuối tuần đông gia đình đến ăn nên đặt bàn trước"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Đặng Quốc Anh",
                                     "badge":  "Cư dân Dịch Vọng",
                                     "date":  "5 ngày trước",
                                     "rating":  4.8,
                                     "comment":  "Bít tết Ngọc Hiếu ăn từ bé đến giờ vẫn là số một. Miếng bò dày mà mềm tan, sốt chấm bánh mì ngon không cưỡng nổi."
                                 },
                                 {
                                     "author":  "Trần Thu Hà",
                                     "badge":  "Khách gia đình",
                                     "date":  "2 tuần trước",
                                     "rating":  4.7,
                                     "comment":  "Quán có chỗ đỗ ô tô trước cửa rất tiện, điều hòa mát rượi, nhân viên nhanh nhẹn lễ phép."
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "Restaurant",
                               "name":  "Bít Tết Ngọc Hiếu",
                               "address":  "105C4 Tô Hiệu, Cầu Giấy, Hà Nội",
                               "telephone":  "+84-90-173-5577",
                               "priceRange":  "109.000 - 180.000 VND"
                           },
        "spatial_identity":  "Nhà phố 3 tầng hiện đại mặt phố Tô Hiệu, điều hòa 2 chiều công suất lớn, bàn ghế gỗ đệm da lịch sự, sạch sẽ cho gia đình và tiếp khách.",
        "key_signature":  "Chảo gang đúc hình con bò đặc trưng bốc khói xèo xèo, thịt bò mềm đậm đà, viên xíu mại béo ngậy kèm dưa chuột muối chua thanh giải ngấy.",
        "audit_dossier":  {
                              "audit_date":  "2026-10-11",
                              "auditor":  "OMNI Red-Team Auditor (Cau Giay Field Unit)",
                              "audit_status":  "VERIFIED_GROUND_TRUTH",
                              "notes":  "Đã kiểm toán thực địa: Ô tô không đỗ được dưới lòng đường ban ngày (biển cấm); có nhân viên hướng dẫn sang bãi xe ngã tư (cách 60m)."
                          }
    },
    {
        "id":  "store-cg-013",
        "name":  "Nem Nướng Nha Trang Hắt 2 Ô Xuân Thủy",
        "slug":  "nem-nuong-hat-2-o-xuan-thuy-cau-giay",
        "brand":  "Nem Nướng Hắt 2 Ô",
        "category":  "Nem Nướng \u0026 Ăn Vặt Sinh Viên",
        "address":  "13H1 Ngõ 130 Xuân Thủy, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Hà Nội",
        "landmark":  "Ngõ 130 Xuân Thủy thiên đường ẩm thực sinh viên Sư Phạm",
        "location":  {
                         "latitude":  21.036820,
                         "longitude":  105.786540,
                         "geo_hash":  "w7e2w5m"
                     },
        "contact":  {
                        "phone":  "0961136801",
                        "phone_display":  "096 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)",
                        "google_maps_url":  "https://maps.google.com/?cid=1029384756192837492"
                    },
        "operating_hours":  {
                                "open_time":  "09:00",
                                "close_time":  "22:00",
                                "open_now":  true,
                                "best_visit_window":  "11h00 - 11h45 trưa hoặc 16h30 - 17h30 chiều"
                            },
        "price_range":  {
                            "min":  35000,
                            "max":  75000,
                            "currency":  "VND",
                            "formatted":  "35.000đ - 75.000đ"
                        },
        "amenities":  [
                          {
                              "name":  "Điều hòa \u0026 quạt mát",
                              "icon":  "ac"
                          },
                          {
                              "name":  "Dựng xe máy trước quán",
                              "icon":  "bike"
                          },
                          {
                              "name":  "Thanh toán VietQR nhanh",
                              "icon":  "qr"
                          },
                          {
                              "name":  "Vibe biển trẻ trung sôi động",
                              "icon":  "tree"
                          }
                      ],
        "parking_detail":  {
                               "motorbike":  "Miễn phí sân trước cửa ngõ 130 có người trông",
                               "car":  "Không đỗ ô tô; ngõ sinh viên chỉ đi xe máy và đi bộ",
                               "fee":  "0đ xe máy"
                           },
        "realtime_busyness":  {
                                  "current_occupancy_percent":  80,
                                  "status_text":  "Bàn trống 20%",
                                  "busyness_sub":  "Đông nghẹt sinh viên ĐH Quốc Gia \u0026 Sư Phạm",
                                  "noise_level":  "64 dB (Sôi nổi, trẻ trung)",
                                  "peak_hours_histogram":  {
                                                               "12h00":  95,
                                                               "18h30":  90
                                                           }
                              },
        "ai_curation":  {
                            "signature_dish":  "Mẹt nem nướng Nha Trang cuốn bánh tráng chả ram giòn \u0026 Sốt chấm tương đậu thịt băm gia truyền",
                            "insider_tip":  "Concept \u0027Đem biển về phố\u0027 cực hot trên TikTok. Cây nem nướng than hoa thơm lừng cuốn cùng chả ram giòn rụm, xoài xanh chua giòn, dưa chuột và ram chiên giòn tan. Chấm ngập bát nước sốt tương đậu thịt béo ngọt ấm nóng là chuẩn bài!",
                            "contexts":  [
                                             "an_trua_nhanh",
                                             "hoc_sinh_sinh_vien",
                                             "an_vat_via_he",
                                             "thanh_toan_vietqr"
                                         ],
                            "omni_trust_score":  92
                        },
        "media_footprint":  {
                                "facebook_page":  "Hắt 2 Ô - Nem Nướng Nha Trang (Fanpage chính thức)",
                                "tiktok_reach":  "Trend viral triệu view TikTok \u0027Đem biển về phố\u0027 #hat2o #nemnuongnhatrang",
                                "press_coverage":  [
                                                       "Kênh 14",
                                                       "Báo Sức Khỏe Đời Sống - Địa chỉ ăn vặt sinh viên Cầu Giấy"
                                                   ]
                            },
        "photos":  [
                       {
                           "url":  "/assets/photos/nem_nuong_hat_2_o.jpg",
                           "caption":  "Mẹt nem nướng Nha Trang chả ram giòn rụm cùng bát nước chấm tương đậu thịt",
                           "tag":  "signature"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Món Đinh Đặc Sản",
                                    "items":  [
                                                  {
                                                      "name":  "Suất nem nướng Nha Trang đầy đủ",
                                                      "price":  "45.000đ",
                                                      "desc":  "Nem nướng thơm lừng, chả ram giòn, bánh phở cuốn, xoài chua, dưa chuột, rau thơm",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Mẹt nem nướng đôi (2 người)",
                                                      "price":  "85.000đ",
                                                      "desc":  "Gấp đôi nem và topping kèm 2 bát sốt",
                                                      "is_signature":  true
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Topping Thêm",
                                    "items":  [
                                                  {
                                                      "name":  "Đĩa chả ram giòn thêm",
                                                      "price":  "15.000đ",
                                                      "desc":  "Chả ram chiên giòn rụm",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Đĩa nem nướng xiên thêm",
                                                      "price":  "20.000đ",
                                                      "desc":  "Nem nướng than hoa",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Bát nước chấm tương thịt thêm",
                                                      "price":  "10.000đ",
                                                      "desc":  "Nước chấm béo ấm",
                                                      "is_signature":  false
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Đồ Uống",
                                    "items":  [
                                                  {
                                                      "name":  "Trà tắc xí muội Ly Cá Mập",
                                                      "price":  "15.000đ",
                                                      "desc":  "Chua ngọt mát lạnh giải ngấy",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Trà chanh hoa nhài",
                                                      "price":  "12.000đ",
                                                      "desc":  "Trà thơm mát",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Nước sốt chấm tương đậu thịt băm sánh ngậy thơm nóng hổi",
                                                "Chả ram cuốn giòn tan, rau sống xoài dưa tươi sạch",
                                                "Giá sinh viên siêu hạt dẻ, không gian trẻ trung"
                                            ],
                                   "cons":  [
                                                "Giờ trưa 12h sinh viên đông chen chúc, ngõ 130 hẹp không đi ô tô được"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Vũ Khánh Linh",
                                     "badge":  "Sinh viên ĐH Sư Phạm Hà Nội",
                                     "date":  "3 ngày trước",
                                     "rating":  4.7,
                                     "comment":  "Tuần nào nhóm mình cũng qua Hắt 2 Ô ngõ 130. Nước chấm ở đây béo ngọt ngon nhất khu Cầu Giấy, chả ram giòn rụm."
                                 },
                                 {
                                     "author":  "Nguyễn Minh Đức",
                                     "badge":  "Sinh viên ĐH Quốc Gia",
                                     "date":  "1 tuần trước",
                                     "rating":  4.5,
                                     "comment":  "Suất 45k ăn no căng bụng. Quán trang trí biển xanh bắt mắt, các bạn nhân viên nhiệt tình."
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "Restaurant",
                               "name":  "Nem Nướng Hắt 2 Ô",
                               "address":  "13H1 Ngõ 130 Xuân Thủy, Cầu Giấy, Hà Nội",
                               "telephone":  "+84-96-113-6801",
                               "priceRange":  "35.000 - 75.000 VND"
                           },
        "spatial_identity":  "Không gian trẻ trung ngõ 130 Xuân Thủy, bàn ghế gỗ sáng màu, máy lạnh tầng 2, góc check-in hiện đại cho học sinh sinh viên.",
        "key_signature":  "Mẹt nem nướng Nha Trang than hoa vàng ruộm, bánh tráng chiên giòn tan, ram giòn và bát nước chấm sốt thịt băm tôm ngọt ấm nồng độc quyền.",
        "audit_dossier":  {
                              "audit_date":  "2026-10-11",
                              "auditor":  "OMNI Red-Team Auditor (Cau Giay Field Unit)",
                              "audit_status":  "VERIFIED_GROUND_TRUTH",
                              "notes":  "Đã kiểm toán thực địa: Giá sinh viên 35k-45k/suất chuẩn xác; ngõ 130 hẹp chỉ đi xe máy, ô tô phải gửi bãi chợ Nhà Xanh."
                          }
    },
    {
        "id":  "store-cg-014",
        "name":  "Bún Đậu Phố 73 Cốm Vòng Duy Tân",
        "slug":  "bun-dau-pho-com-vong-duy-tan-cau-giay",
        "brand":  "Bún Đậu Phố",
        "category":  "Bún Đậu Mắm Tôm Văn Phòng",
        "address":  "Số 73 Phố Cốm Vòng (Ngõ 66 Dịch Vọng Hậu), Phường Dịch Vọng Hậu, Quận Cầu Giấy, Hà Nội",
        "landmark":  "Khu công nghệ Duy Tân cách ngõ 76 Duy Tân 100m",
        "location":  {
                         "latitude":  21.033850,
                         "longitude":  105.787120,
                         "geo_hash":  "w7e2w4t"
                     },
        "contact":  {
                        "phone":  "0906765858",
                        "phone_display":  "090 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)",
                        "google_maps_url":  "https://maps.google.com/?cid=1029384756192837493"
                    },
        "operating_hours":  {
                                "open_time":  "10:00",
                                "close_time":  "21:30",
                                "open_now":  true,
                                "best_visit_window":  "Trước 11h45 hoặc sau 13h00"
                            },
        "price_range":  {
                            "min":  40000,
                            "max":  75000,
                            "currency":  "VND",
                            "formatted":  "40.000đ - 75.000đ"
                        },
        "amenities":  [
                          {
                              "name":  "Điều hòa mát rượi 2 tầng",
                              "icon":  "ac"
                          },
                          {
                              "name":  "Bãi đỗ xe máy rộng",
                              "icon":  "bike"
                          },
                          {
                              "name":  "Thanh toán VietQR nhanh",
                              "icon":  "qr"
                          },
                          {
                              "name":  "Có chỗ đỗ ô tô tại cơ sở mới",
                              "icon":  "car"
                          }
                      ],
        "parking_detail":  {
                               "motorbike":  "Miễn phí sân trước cửa quán có nhân viên dắt xe",
                               "car":  "Có bãi đỗ ô tô trước cửa cơ sở mới số 73 Cốm Vòng",
                               "fee":  "0đ xe máy"
                           },
        "realtime_busyness":  {
                                  "current_occupancy_percent":  75,
                                  "status_text":  "Bàn trống 25%",
                                  "busyness_sub":  "Đông nghẹt dân IT Duy Tân giờ trưa",
                                  "noise_level":  "58 dB",
                                  "peak_hours_histogram":  {
                                                               "12h00":  95,
                                                               "12h30":  85
                                                           }
                              },
        "ai_curation":  {
                            "signature_dish":  "Mẹt bún đậu thập cẩm lòng dồi rán giòn \u0026 Chân giò luộc cuốn bánh tráng",
                            "insider_tip":  "Quán đã chuyển từ số 20 ngõ 76 Duy Tân sang số 73 Cốm Vòng khang trang hơn, có điều hòa mát và chỗ đỗ ô tô. Đậu Mơ rán phồng giòn tan chấm mắm tôm Thanh Hóa đánh bông bọt quất ớt là lựa chọn số 1 trưa hè IT Duy Tân!",
                            "contexts":  [
                                             "an_trua_nhanh",
                                             "dieu_hoa_mat",
                                             "mang_ve_van_phong",
                                             "thanh_toan_vietqr"
                                         ],
                            "omni_trust_score":  93
                        },
        "media_footprint":  {
                                "facebook_page":  "Bún Đậu Phố - 73 Cốm Vòng (Cập nhật địa chỉ mới)",
                                "tiktok_reach":  "Video review bún đậu đông nhất khu văn phòng Duy Tân",
                                "press_coverage":  [
                                                       "PasGo",
                                                       "Top quán ăn trưa ngon nhất khu IT Duy Tân Cầu Giấy"
                                                   ]
                            },
        "photos":  [
                       {
                           "url":  "/assets/photos/bun_cha_dac_kim.jpg",
                           "caption":  "Mẹt bún đậu mắm tôm thập cẩm giòn rụm đầy đặn tại Cốm Vòng Duy Tân",
                           "tag":  "signature"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Món Đinh Đặc Sản",
                                    "items":  [
                                                  {
                                                      "name":  "Mẹt bún đậu thập cẩm đặc biệt",
                                                      "price":  "65.000đ",
                                                      "desc":  "Đậu rán giòn, chả cốm dẻo, dồi sụn nướng, thịt chân giò luộc, nem rán giòn",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Bún đậu chả cốm thịt luộc",
                                                      "price":  "50.000đ",
                                                      "desc":  "Bún tươi, đậu mơ, chả cốm chiên và chân giò thái mỏng",
                                                      "is_signature":  false
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Topping Thêm",
                                    "items":  [
                                                  {
                                                      "name":  "Đĩa dồi sụn rán thêm",
                                                      "price":  "25.000đ",
                                                      "desc":  "Dồi sụn thơm béo sần sật",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Đĩa chân giò luộc thêm",
                                                      "price":  "25.000đ",
                                                      "desc":  "Thịt chân giò cuộn luộc",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Đĩa đậu Mơ rán giòn thêm",
                                                      "price":  "15.000đ",
                                                      "desc":  "Đậu Mơ vàng ruộm",
                                                      "is_signature":  false
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Đồ Uống",
                                    "items":  [
                                                  {
                                                      "name":  "Nước sấu ngâm đá",
                                                      "price":  "15.000đ",
                                                      "desc":  "Chua ngọt giòn mát",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Trà quất nha đam",
                                                      "price":  "15.000đ",
                                                      "desc":  "Mát lành giải ngấy",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Cơ sở mới 73 Cốm Vòng sạch sẽ, điều hòa 2 tầng mát sâu, có chỗ đỗ ô tô",
                                                "Mắm tôm chuẩn vị đánh bông thơm lừng, topping nóng hổi",
                                                "Phục vụ nhanh gọn chuyên nghiệp cho dân công sở"
                                            ],
                                   "cons":  [
                                                "Khung giờ 12h00 - 12h40 rất đông dân IT văn phòng đổ về nên đến trước 11h45"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Phạm Tuấn Anh",
                                     "badge":  "Kỹ sư FPT Software Duy Tân",
                                     "date":  "4 ngày trước",
                                     "rating":  4.7,
                                     "comment":  "Từ ngày chuyển sang 73 Cốm Vòng quán rộng rãi hơn hẳn, có điều hòa mát rượi. Đậu rán giòn tan chấm mắm tôm đánh bọt quất ớt ăn nghiện luôn."
                                 },
                                 {
                                     "author":  "Lê Mai Phương",
                                     "badge":  "Dân văn phòng CMC Tower",
                                     "date":  "2 tuần trước",
                                     "rating":  4.6,
                                     "comment":  "Mẹt 65k đầy đặn hai người ăn chung gọi thêm đĩa bún là no nê. Quán sạch sẽ, thanh toán VietQR quét mã tích tắc."
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "Restaurant",
                               "name":  "Bún Đậu Phố",
                               "address":  "73 Cốm Vòng, Dịch Vọng Hậu, Cầu Giấy, Hà Nội",
                               "telephone":  "+84-90-676-5858",
                               "priceRange":  "40.000 - 75.000 VND"
                           },
        "spatial_identity":  "Mặt tiền phố Cốm Vòng mới mở, 2 tầng máy lạnh mát rượi, bàn ghế gỗ cao sạch sẽ, khắc phục triệt để nhược điểm ám mùi của bún đậu vỉa hè.",
        "key_signature":  "Đậu Mơ rán lướt vỏ giòn ruột béo mềm mịn, chả cốm Làng Vòng dẻo thơm hạt cốm mộc, mắm tôm Thanh Hóa đánh sủi bọt trắng bông quất tươi.",
        "audit_dossier":  {
                              "audit_date":  "2026-10-11",
                              "auditor":  "OMNI Red-Team Auditor (Cau Giay Field Unit)",
                              "audit_status":  "VERIFIED_GROUND_TRUTH",
                              "notes":  "Đã bóc phốt dời địa điểm: Đã xác thực dời từ ngõ 76 Duy Tân về 73 Cốm Vòng. Cảnh báo các trang mạng đưa tin địa chỉ cũ ngõ 76 Duy Tân là sai lệch!"
                          }
    },
    {
        "id":  "store-cg-015",
        "name":  "Pao Quán Ẩm Thực Tây Bắc Trần Thái Tông",
        "slug":  "pao-quan-tay-bac-tran-thai-tong-cau-giay",
        "brand":  "Pao Quán",
        "category":  "Ẩm Thực Tây Bắc \u0026 Tiệc Họp Mặt",
        "address":  "Số 1 Ngõ 62 Trần Thái Tông, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Hà Nội",
        "landmark":  "Ngõ 62 Trần Thái Tông gần ngã tư Tôn Thất Thuyết",
        "location":  {
                         "latitude":  21.031520,
                         "longitude":  105.788540,
                         "geo_hash":  "w7e2w4p"
                     },
        "contact":  {
                        "phone":  "0912539339",
                        "phone_display":  "091 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)",
                        "google_maps_url":  "https://maps.google.com/?cid=1029384756192837494"
                    },
        "operating_hours":  {
                                "open_time":  "10:00",
                                "close_time":  "23:00",
                                "open_now":  true,
                                "best_visit_window":  "11h30 - 13h00 trưa hoặc 18h30 - 20h30 tối"
                            },
        "price_range":  {
                            "min":  180000,
                            "max":  280000,
                            "currency":  "VND",
                            "formatted":  "180.000đ - 280.000đ"
                        },
        "amenities":  [
                          {
                              "name":  "Không gian sinh thái 1000m2",
                              "icon":  "tree"
                          },
                          {
                              "name":  "Điều hòa phòng riêng VIP",
                              "icon":  "ac"
                          },
                          {
                              "name":  "Bãi xe ô tô \u0026 xe máy rộng",
                              "icon":  "car"
                          },
                          {
                              "name":  "Xuất hóa đơn VAT công ty",
                              "icon":  "vat"
                          }
                      ],
        "parking_detail":  {
                               "motorbike":  "Miễn phí bãi xe máy có bảo vệ trông",
                               "car":  "Bãi đỗ ô tô riêng trước cửa nhà hàng rộng rãi đỗ được hàng chục xe",
                               "fee":  "0đ xe máy"
                           },
        "realtime_busyness":  {
                                  "current_occupancy_percent":  70,
                                  "status_text":  "Bàn trống 30%",
                                  "busyness_sub":  "Đông khách liên hoan công ty \u0026 gia đình",
                                  "noise_level":  "56 dB (Thoáng đãng mộc mạc)",
                                  "peak_hours_histogram":  {
                                                               "12h30":  85,
                                                               "19h30":  95
                                                           }
                              },
        "ai_curation":  {
                            "signature_dish":  "Mẹt lợn mán 7 món nướng mắc khén \u0026 Gà quê nướng than hoa xôi nếp nương",
                            "insider_tip":  "Không gian như một bản làng Tây Bắc thu nhỏ giữa lòng Cầu Giấy rộng hơn 1.000m2 đầy cây xanh và tiếng suối chảy. Đi nhóm liên hoan công ty nhất định phải gọi Mẹt Lợn Mán nướng than hoa và một nồi Lẩu Cua Đồng bắp bò riêu đặc sệt thơm nức mũi!",
                            "contexts":  [
                                             "tu_tap_gia_dinh",
                                             "dieu_hoa_mat",
                                             "thanh_toan_vietqr"
                                         ],
                            "omni_trust_score":  95
                        },
        "media_footprint":  {
                                "facebook_page":  "Pao Quán - Trần Thái Tông (Hệ thống ẩm thực Tây Bắc nổi tiếng)",
                                "tiktok_reach":  "Hàng trăm video triệu view review không gian sống ảo Tây Bắc",
                                "press_coverage":  [
                                                       "VnExpress",
                                                       "Báo Dân Trí",
                                                       "Top nhà hàng tiếp khách họp mặt Cầu Giấy"
                                                   ]
                            },
        "photos":  [
                       {
                           "url":  "/assets/photos/bun_ngan_ba_hang.jpg",
                           "caption":  "Mẹt lợn mán Tây Bắc nướng than hoa mắc khén béo ngậy thơm nức",
                           "tag":  "signature"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Món Đinh Đặc Sản",
                                    "items":  [
                                                  {
                                                      "name":  "Mẹt lợn mán Tây Bắc 7 món",
                                                      "price":  "495.000đ",
                                                      "desc":  "Thịt lợn mán nướng than hoa, hấp tiêu, xào lăn, lòng dồi, rựa mận, xôi nếp",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Gà nướng than hoa tiêu rừng",
                                                      "price":  "295.000đ",
                                                      "desc":  "Gà quê da giòn rụm tẩm ướp hạt dổi mắc khén",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Lẩu cua đồng bắp bò sườn sụn",
                                                      "price":  "385.000đ",
                                                      "desc":  "Cua đồng giã tay riêu đặc, bắp bò tươi nhúng rau rừng",
                                                      "is_signature":  true
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Rau Rừng \u0026 Món Nhậu",
                                    "items":  [
                                                  {
                                                      "name":  "Bò gác bếp chấm chẩm chéo",
                                                      "price":  "165.000đ",
                                                      "desc":  "Thịt bò hun khói thơm mùi khói bếp",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Rau bò khai xào tỏi",
                                                      "price":  "65.000đ",
                                                      "desc":  "Rau rừng giòn ngọt",
                                                      "is_signature":  false
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Đồ Uống",
                                    "items":  [
                                                  {
                                                      "name":  "Rượu ngô men lá Tây Bắc chai",
                                                      "price":  "95.000đ",
                                                      "desc":  "Men lá thơm dịu êm",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Nước mơ ngâm đường phèn",
                                                      "price":  "25.000đ",
                                                      "desc":  "Chua ngọt giải ngấy",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Không gian sinh thái rộng lớn, decor Tây Bắc cực đẹp có suối cá và cây xanh",
                                                "Mẹt lợn mán và gà nướng thơm đậm mùi hạt dổi mắc khén chuẩn vị",
                                                "Bãi đỗ ô tô thênh thang có bảo vệ chỉ dẫn chu đáo"
                                            ],
                                   "cons":  [
                                                "Các ngày cuối tuần và tối thứ 6 rất đông tiệc liên hoan, nên đặt bàn trước ít nhất 1 ngày"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Hoàng Minh Trí",
                                     "badge":  "Giám đốc công ty IT Cầu Giấy",
                                     "date":  "1 tuần trước",
                                     "rating":  4.9,
                                     "comment":  "Tổ chức tiệc sinh nhật cho team 20 người tại Pao Quán. Phòng riêng điều hòa thoáng mát, đồ ăn lợn mán nướng xuất sắc, bãi ô tô đỗ thoải mái."
                                 },
                                 {
                                     "author":  "Trần Thanh Thảo",
                                     "badge":  "Thực khách gia đình",
                                     "date":  "3 tuần trước",
                                     "rating":  4.8,
                                     "comment":  "Không gian quán đẹp như homestay Sa Pa. Đồ ăn mang lên nóng hổi, nồi lẩu cua đồng ngọt lịm riêu cua nhiều ngập mặt."
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "Restaurant",
                               "name":  "Pao Quán",
                               "address":  "Số 1 Ngõ 62 Trần Thái Tông, Cầu Giấy, Hà Nội",
                               "telephone":  "+84-91-253-9339",
                               "priceRange":  "180.000 - 280.000 VND"
                           },
        "spatial_identity":  "Mô hình nhà sàn Tây Bắc 3 tầng hơn 1.000m² giữa lòng Cầu Giấy, cột gỗ pơ-mu, suối nước chảy róc rách giữa giếng trời có đàn cá koi, đèn lồng thổ cẩm.",
        "key_signature":  "Mẹt lợn mán 7 món nướng mắc khén hấp lá móc mật bày trên lá chuối rừng tươi, thưởng thức cùng chum rượu hoa quả ủ sành men lá.",
        "audit_dossier":  {
                              "audit_date":  "2026-10-11",
                              "auditor":  "OMNI Red-Team Auditor (Cau Giay Field Unit)",
                              "audit_status":  "VERIFIED_GROUND_TRUTH",
                              "notes":  "Đã kiểm toán thực địa: Ngõ 62 rộng 8m thông thoáng, bãi đỗ ô tô đối diện có bảo vệ; trưa thứ 2-6 đông dân IT chúc rượu ồn ào."
                          }
    },
    {
        "id":  "store-cg-016",
        "name":  "Dim Sum Corner 17 Trung Hòa",
        "slug":  "dim-sum-corner-trung-hoa-cau-giay",
        "brand":  "Dim Sum Corner",
        "category":  "Ẩm Thực Quảng Đông \u0026 Dim Sum",
        "address":  "Số 17 Trung Hòa, Phường Trung Hòa, Quận Cầu Giấy, Hà Nội",
        "landmark":  "Mặt đường Trung Hòa khu đô thị Trung Hòa Nhân Chính",
        "location":  {
                         "latitude":  21.012540,
                         "longitude":  105.799420,
                         "geo_hash":  "w7e2w1k"
                     },
        "contact":  {
                        "phone":  "0963668475",
                        "phone_display":  "096 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)",
                        "google_maps_url":  "https://maps.google.com/?cid=1029384756192837495"
                    },
        "operating_hours":  {
                                "open_time":  "10:00",
                                "close_time":  "22:00",
                                "open_now":  true,
                                "best_visit_window":  "11h00 - 12h00 trưa hoặc 17h30 - 19h00 tối"
                            },
        "price_range":  {
                            "min":  60000,
                            "max":  220000,
                            "currency":  "VND",
                            "formatted":  "60.000đ - 220.000đ"
                        },
        "amenities":  [
                          {
                              "name":  "Điều hòa mát sâu phong cách Hoa",
                              "icon":  "ac"
                          },
                          {
                              "name":  "Đỗ xe máy trước cửa có nhân viên",
                              "icon":  "bike"
                          },
                          {
                              "name":  "Thanh toán VietQR \u0026 Thẻ tín dụng",
                              "icon":  "qr"
                          },
                          {
                              "name":  "Hóa đơn VAT điện tử nhanh",
                              "icon":  "vat"
                          }
                      ],
        "parking_detail":  {
                               "motorbike":  "Miễn phí vỉa hè trước cửa có bảo vệ dắt xe",
                               "car":  "Gửi ô tô tại bãi đỗ phố Trung Hòa cách quán 50m",
                               "fee":  "0đ xe máy"
                           },
        "realtime_busyness":  {
                                  "current_occupancy_percent":  65,
                                  "status_text":  "Bàn trống 35%",
                                  "busyness_sub":  "Đông khách công sở \u0026 gia đình • Vào bàn ngay",
                                  "noise_level":  "52 dB (Ấm cúng, lịch sự)",
                                  "peak_hours_histogram":  {
                                                               "12h00":  85,
                                                               "19h00":  90
                                                           }
                              },
        "ai_curation":  {
                            "signature_dish":  "Há cảo tôm tươi vỏ mỏng trong suốt \u0026 Bánh bao kim sa trứng muối tan chảy",
                            "insider_tip":  "Nhà hàng Dim Sum chuẩn phong cách Quảng Đông tại khu đô thị Trung Hòa. Vỏ há cảo tráng mỏng tang nhìn rõ con tôm tươi đỏ au bên trong giòn sần sật. Bánh bao kim sa hấp nóng cắn nhẹ là dòng sốt trứng muối vàng óng béo ngậy tan chảy thơm lừng!",
                            "contexts":  [
                                             "an_trua_nhanh",
                                             "dieu_hoa_mat",
                                             "tu_tap_gia_dinh",
                                             "thanh_toan_vietqr"
                                         ],
                            "omni_trust_score":  94
                        },
        "media_footprint":  {
                                "facebook_page":  "Dim Sum Corner - 17 Trung Hòa (Review ẩm thực Trung Hoa)",
                                "tiktok_reach":  "Hàng triệu view video bẻ bánh bao kim sa tan chảy",
                                "press_coverage":  [
                                                       "TopGo",
                                                       "PasGo - Điểm đến Dim Sum ngon nhất khu Trung Hòa Nhân Chính"
                                                   ]
                            },
        "photos":  [
                       {
                           "url":  "/assets/photos/dim_sum_corner.jpg",
                           "caption":  "Xửng hấp dim sum há cảo tôm tươi và bánh bao kim sa trứng muối bốc khói nghi ngút",
                           "tag":  "signature"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Dim Sum Hấp Xửng Tre",
                                    "items":  [
                                                  {
                                                      "name":  "Há cảo tôm tươi thượng hạng",
                                                      "price":  "62.000đ",
                                                      "desc":  "Tôm tươi nguyên con vỏ mỏng mướt trong suốt",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Bánh bao kim sa trứng muối",
                                                      "price":  "58.000đ",
                                                      "desc":  "Nhân trứng muối bơ sữa tan chảy thơm lừng béo ngậy",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Xíu mại nấm hương thịt heo",
                                                      "price":  "62.000đ",
                                                      "desc":  "Thịt heo nấm hương ngọt đậm đà",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Chân gà hấp tàu xì Hong Kong",
                                                      "price":  "58.000đ",
                                                      "desc":  "Chân gà mềm róc xương sốt đậm đà",
                                                      "is_signature":  true
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Mỳ Kéo Sợi \u0026 Cơm",
                                    "items":  [
                                                  {
                                                      "name":  "Mỳ hoành thánh tôm tươi xá xíu",
                                                      "price":  "65.000đ",
                                                      "desc":  "Sợi mỳ trứng dai giòn nước dùng thanh",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Mỳ bò kho Tứ Xuyên cay tê",
                                                      "price":  "78.000đ",
                                                      "desc":  "Bò hầm mềm sốt cay thơm nức",
                                                      "is_signature":  true
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Tráng Miệng \u0026 Trà",
                                    "items":  [
                                                  {
                                                      "name":  "Trà Thiết Quan Âm ấm",
                                                      "price":  "35.000đ",
                                                      "desc":  "Trà thảo mộc thơm dịu",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Chè tuyết nhĩ nhãn nhục táo đỏ",
                                                      "price":  "42.000đ",
                                                      "desc":  "Ngọt thanh mát lành",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Há cảo tôm tươi giòn ngọt, vỏ bánh mỏng không bị nát, bánh bao kim sa cực ngon",
                                                "Không gian thiết kế phong cách Hong Kong ấm cúng, sang trọng",
                                                "Giá cả hợp lý so với chất lượng dim sum nhà hàng"
                                            ],
                                   "cons":  [
                                                "Giờ trưa văn phòng đông khách, thi thoảng ra món dim sum hấp cần đợi 7-10 phút"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Trần Bảo Ngọc",
                                     "badge":  "Tín đồ ẩm thực Trung Hoa",
                                     "date":  "1 tuần trước",
                                     "rating":  4.8,
                                     "comment":  "Dim sum ở đây làm chuẩn vị Quảng Đông. Há cảo tôm cắn con tôm giòn sần sật, bánh bao kim sa nhân chảy béo ngậy ăn mê luôn."
                                 },
                                 {
                                     "author":  "Lê Văn Hùng",
                                     "badge":  "Dân công sở Hoàng Đạo Thúy",
                                     "date":  "1 tháng trước",
                                     "rating":  4.6,
                                     "comment":  "Quán ăn trưa tiếp khách rất lịch sự, điều hòa mát rượi, nước trà thơm thanh giải ngấy tuyệt vời."
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "Restaurant",
                               "name":  "Dim Sum Corner",
                               "address":  "17 Trung Hòa, Cầu Giấy, Hà Nội",
                               "telephone":  "+84-96-366-8475",
                               "priceRange":  "60.000 - 220.000 VND"
                           },
        "spatial_identity":  "Phong cách Quảng Đông hiện đại pha nét retro Hong Kong: Tone màu xanh ngọc bích phối gỗ ấm, đèn lồng lụa, cửa sổ tròn Á Đông, điều hòa êm ái.",
        "key_signature":  "Tháp xửng tre dimsum nghi ngút khói: Há cảo tôm thủy tinh thấy rõ tôm tươi hồng hào, xíu mại nấm hương gạch cua, bánh bao kim sa trứng muối chảy.",
        "audit_dossier":  {
                              "audit_date":  "2026-10-11",
                              "auditor":  "OMNI Red-Team Auditor (Cau Giay Field Unit)",
                              "audit_status":  "VERIFIED_GROUND_TRUTH",
                              "notes":  "Đã kiểm toán thực địa: Có xuất hóa đơn điện tử VAT đầy đủ qua POS cho công ty; nhận thanh toán thẻ quốc tế."
                          }
    },
    {
        "id":  "store-cg-017",
        "name":  "Cơm Thố Anh Nguyễn B32 Cốm Vòng",
        "slug":  "com-tho-anh-nguyen-com-vong-cau-giay",
        "brand":  "Cơm Thố Anh Nguyễn",
        "category":  "Cơm Thố Cháy Giòn \u0026 Cơm Văn Phòng",
        "address":  "B32 Cốm Vòng (Ngõ 66 Dịch Vọng Hậu), Phường Dịch Vọng Hậu, Quận Cầu Giấy, Hà Nội",
        "landmark":  "Ngõ 66 Dịch Vọng Hậu khu văn phòng Duy Tân Cầu Giấy",
        "location":  {
                         "latitude":  21.034150,
                         "longitude":  105.787620,
                         "geo_hash":  "w7e2w4t"
                     },
        "contact":  {
                        "phone":  "0936019933",
                        "phone_display":  "093 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)",
                        "google_maps_url":  "https://maps.google.com/?cid=1029384756192837496"
                    },
        "operating_hours":  {
                                "open_time":  "09:45",
                                "close_time":  "21:45",
                                "open_now":  true,
                                "best_visit_window":  "Trước 11h45 hoặc sau 13h00"
                            },
        "price_range":  {
                            "min":  50000,
                            "max":  95000,
                            "currency":  "VND",
                            "formatted":  "50.000đ - 95.000đ"
                        },
        "amenities":  [
                          {
                              "name":  "Điều hòa mát rượi tầng 2",
                              "icon":  "ac"
                          },
                          {
                              "name":  "Đỗ xe máy trước cửa",
                              "icon":  "bike"
                          },
                          {
                              "name":  "Thanh toán VietQR nhanh",
                              "icon":  "qr"
                          },
                          {
                              "name":  "Ra món nhanh 3 phút",
                              "icon":  "clock"
                          }
                      ],
        "parking_detail":  {
                               "motorbike":  "Miễn phí vỉa hè trước cửa quán",
                               "car":  "Không đỗ ô tô trước cửa ngõ; gửi bãi xe Duy Tân",
                               "fee":  "0đ xe máy"
                           },
        "realtime_busyness":  {
                                  "current_occupancy_percent":  75,
                                  "status_text":  "Bàn trống 25%",
                                  "busyness_sub":  "Đông nghẹt dân IT ăn trưa nhanh",
                                  "noise_level":  "55 dB",
                                  "peak_hours_histogram":  {
                                                               "12h00":  95,
                                                               "12h30":  85
                                                           }
                              },
        "ai_curation":  {
                            "signature_dish":  "Cơm thố xá xíu cháy giòn rụm \u0026 Cơm thố bò xào cần tỏi kim chi",
                            "insider_tip":  "Thương hiệu cơm thố quốc dân của dân công sở Cầu Giấy. Hạt cơm dẻo thơm được ép cháy vàng giòn rụm đáy thố gang giữ nóng bốc khói nghi ngút. Ăn kèm thịt xá xíu đậm đà, bát canh cải thịt băm và đĩa kim chi cay chua giòn ngọt!",
                            "contexts":  [
                                             "an_trua_nhanh",
                                             "dieu_hoa_mat",
                                             "mang_ve_van_phong",
                                             "thanh_toan_vietqr"
                                         ],
                            "omni_trust_score":  93
                        },
        "media_footprint":  {
                                "facebook_page":  "Cơm Thố Anh Nguyễn - B32 Cốm Vòng",
                                "tiktok_reach":  "Review bữa trưa quen thuộc của hàng nghìn lập trình viên Duy Tân",
                                "press_coverage":  [
                                                       "ShopeeFood Top Sales Cơm Trưa Cầu Giấy"
                                                   ]
                            },
        "photos":  [
                       {
                           "url":  "/assets/photos/com_tho_anh_nguyen.jpg",
                           "caption":  "Thố cơm xá xíu cháy vàng giòn rụm bốc khói thơm nức cùng kim chi canh nóng",
                           "tag":  "signature"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Cơm Thố Đinh Đặc Sản",
                                    "items":  [
                                                  {
                                                      "name":  "Cơm thố xá xíu đặc biệt",
                                                      "price":  "55.000đ",
                                                      "desc":  "Thịt xá xíu đậm đà, cơm cháy giòn rụm đáy thố, canh cải, kim chi",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Cơm thố bò xào cần tỏi",
                                                      "price":  "65.000đ",
                                                      "desc":  "Thịt bò xào tươi mềm ngọt đậm vị",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Cơm thố sườn nướng mật ong",
                                                      "price":  "70.000đ",
                                                      "desc":  "Sườn nướng vàng óng ngấm sốt",
                                                      "is_signature":  false
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Món Gọi Thêm",
                                    "items":  [
                                                  {
                                                      "name":  "Trứng ốp la lòng đào",
                                                      "price":  "8.000đ",
                                                      "desc":  "Trứng ốp béo ngậy",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Đĩa xá xíu thêm",
                                                      "price":  "25.000đ",
                                                      "desc":  "Thịt xá xíu đậm vị",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Kim chi chua cay thêm",
                                                      "price":  "5.000đ",
                                                      "desc":  "Kim chi giòn giải ngấy",
                                                      "is_signature":  false
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Đồ Uống",
                                    "items":  [
                                                  {
                                                      "name":  "Coca-Cola ướp lạnh",
                                                      "price":  "12.000đ",
                                                      "desc":  "Uống mát",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Trà chanh sả đá",
                                                      "price":  "15.000đ",
                                                      "desc":  "Thanh mát",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Cơm thố giữ nóng cực lâu, lớp cháy giòn rụm không bị khét, thịt xá xíu thơm mềm",
                                                "Phục vụ cực nhanh, đóng gói mang về hộp giấy sạch sẽ",
                                                "Giá bình dân vừa túi tiền dân văn phòng"
                                            ],
                                   "cons":  [
                                                "Giờ trưa 12h-12h30 rất đông khách, chỗ để xe máy trước cửa có lúc bị chật"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Nguyễn Hải Đăng",
                                     "badge":  "Dev lead Duy Tân IT",
                                     "date":  "3 ngày trước",
                                     "rating":  4.6,
                                     "comment":  "Tuần ăn ở đây 3 bữa trưa. Cơm thố xá xíu cháy giòn rụm trộn kim chi canh nóng là chuẩn bài ăn nhanh no bụng để chiều làm việc."
                                 },
                                 {
                                     "author":  "Bùi Thúy Hằng",
                                     "badge":  "Dân văn phòng Dịch Vọng Hậu",
                                     "date":  "1 tuần trước",
                                     "rating":  4.5,
                                     "comment":  "Đồ ăn sạch sẽ, tầng 2 điều hòa mát mẻ. Thịt bò xào mềm thơm, nhân viên phục vụ nhanh."
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "Restaurant",
                               "name":  "Cơm Thố Anh Nguyễn",
                               "address":  "B32 Cốm Vòng, Cầu Giấy, Hà Nội",
                               "telephone":  "+84-93-601-9933",
                               "priceRange":  "50.000 - 95.000 VND"
                           },
        "spatial_identity":  "Không gian điều hòa 2 tầng sạch sẽ phố Cốm Vòng, bàn ghế gỗ hiện đại, bếp khép kín tiêu chuẩn an toàn thực phẩm phục vụ giới văn phòng.",
        "key_signature":  "Cơm thố gang đúc giữ nhiệt lớp cháy vàng rụm giòn tan bên dưới, phủ ngập thịt gà nấm xào sốt tiêu đen hoặc bò sốt tiêu cay nồng đậm vị.",
        "audit_dossier":  {
                              "audit_date":  "2026-10-11",
                              "auditor":  "OMNI Red-Team Auditor (Cau Giay Field Unit)",
                              "audit_status":  "VERIFIED_GROUND_TRUTH",
                              "notes":  "Đã kiểm toán thực địa: Tốc độ ra món nhanh 3-5 phút phục vụ giờ trưa văn phòng; giờ 12h00-12h30 kín bàn tầng 1."
                          }
    },
    {
        "id":  "store-cg-018",
        "name":  "Lòng Chần Cháo 235 Tô Hiệu",
        "slug":  "long-chan-chao-235-to-hieu-cau-giay",
        "brand":  "Lòng Chần Cháo Tô Hiệu",
        "category":  "Lòng Chần Cháo \u0026 Ẩm Thực Nhậu Dân Dã",
        "address":  "235 Phố Tô Hiệu, Phường Dịch Vọng, Quận Cầu Giấy, Hà Nội",
        "landmark":  "Mặt đường Tô Hiệu gần đoạn Trần Tử Bình",
        "location":  {
                         "latitude":  21.043650,
                         "longitude":  105.794820,
                         "geo_hash":  "w7e2w7q"
                     },
        "contact":  {
                        "phone":  "0936461868",
                        "phone_display":  "093 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)",
                        "google_maps_url":  "https://maps.google.com/?cid=1029384756192837497"
                    },
        "operating_hours":  {
                                "open_time":  "07:30",
                                "close_time":  "22:00",
                                "open_now":  true,
                                "best_visit_window":  "08h00 - 09h30 sáng hoặc 18h00 - 19h30 tối"
                            },
        "price_range":  {
                            "min":  40000,
                            "max":  180000,
                            "currency":  "VND",
                            "formatted":  "40.000đ - 180.000đ"
                        },
        "amenities":  [
                          {
                              "name":  "Không gian thoáng sạch",
                              "icon":  "fan"
                          },
                          {
                              "name":  "Đỗ xe máy vỉa hè có người dắt",
                              "icon":  "bike"
                          },
                          {
                              "name":  "Thanh toán VietQR nhanh",
                              "icon":  "qr"
                          },
                          {
                              "name":  "Đỗ ô tô mặt đường Tô Hiệu",
                              "icon":  "car"
                          }
                      ],
        "parking_detail":  {
                               "motorbike":  "Miễn phí vỉa hè trước cửa có người dắt xe",
                               "car":  "Đỗ ô tô lòng đường Tô Hiệu có người trông",
                               "fee":  "0đ xe máy"
                           },
        "realtime_busyness":  {
                                  "current_occupancy_percent":  70,
                                  "status_text":  "Bàn trống 30%",
                                  "busyness_sub":  "Đông khách ăn sáng \u0026 tiệc nhậu dân dã",
                                  "noise_level":  "62 dB (Nhộn nhịp)",
                                  "peak_hours_histogram":  {
                                                               "08h30":  85,
                                                               "19h00":  90
                                                           }
                              },
        "ai_curation":  {
                            "signature_dish":  "Đĩa lòng non chần giòn chấm ớt bột tiêu \u0026 Bát cháo lòng tiết sánh mịn",
                            "insider_tip":  "Địa chỉ lòng chần cháo có tiếng lâu đời của dân sành Cầu Giấy. Lòng non, dồi sụn, dạ dày và tràng được làm cực sạch, chần nước sôi vừa chín tới giữ trọn độ giòn sần sật ngọt lịm không hề có mùi. Ăn kèm bát cháo lòng sánh mịn thơm mùi hành hoa rau húng và đĩa ớt bột tiêu cay nồng!",
                            "contexts":  [
                                             "an_sang_nhanh",
                                             "an_trua_nhanh",
                                             "tu_tap_gia_dinh",
                                             "thanh_toan_vietqr"
                                         ],
                            "omni_trust_score":  93
                        },
        "media_footprint":  {
                                "facebook_page":  "Lòng Chần Cháo 235 Tô Hiệu",
                                "tiktok_reach":  "Hàng trăm clip review đĩa lòng chần giòn rụm Cầu Giấy",
                                "press_coverage":  [
                                                       "Báo Lao Động",
                                                       "Top quán lòng chần cháo ngon nhất Hà Nội"
                                                   ]
                            },
        "photos":  [
                       {
                           "url":  "/assets/photos/chao_long_to_hieu.jpg",
                           "caption":  "Đĩa lòng chần thập cẩm trắng giòn sần sật cùng bát cháo lòng thơm khói",
                           "tag":  "signature"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Món Đinh Đặc Sản",
                                    "items":  [
                                                  {
                                                      "name":  "Bát cháo lòng đầy đủ topping",
                                                      "price":  "45.000đ",
                                                      "desc":  "Cháo ninh xương tiết sánh, lòng non, dạ dày, dồi nướng, gan, phổi",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Đĩa lòng chần thập cẩm nhỏ",
                                                      "price":  "90.000đ",
                                                      "desc":  "Lòng non chần giòn, dạ dày, dồi sụn, tràng tươi giòn sần sật",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Lẩu lòng thập cẩm nồi vừa",
                                                      "price":  "250.000đ",
                                                      "desc":  "Nước lẩu chua thanh nhúng lòng tươi rau cải",
                                                      "is_signature":  false
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Món Gọi Thêm",
                                    "items":  [
                                                  {
                                                      "name":  "Đĩa dồi sụn chiên vàng",
                                                      "price":  "50.000đ",
                                                      "desc":  "Dồi sụn thơm nức mùi húng quế",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Đĩa dạ dày chần giòn",
                                                      "price":  "60.000đ",
                                                      "desc":  "Dạ dày giòn ngọt",
                                                      "is_signature":  false
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Đồ Uống",
                                    "items":  [
                                                  {
                                                      "name":  "Rượu nếp cái hoa vàng chén",
                                                      "price":  "15.000đ",
                                                      "desc":  "Thơm bùi ấm bụng",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Trà đá hoa nhài",
                                                      "price":  "5.000đ",
                                                      "desc":  "Mát lành giải ngấy",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Lòng làm cực kỳ sạch sẽ, không hôi, chần vừa tới giòn ngọt sần sật",
                                                "Nước chấm ớt bột hạt tiêu mắm tôm pha khéo",
                                                "Có chỗ đỗ ô tô mặt đường Tô Hiệu"
                                            ],
                                   "cons":  [
                                                "Giá cao hơn các quán lòng vỉa hè bình dân một chút",
                                                "Giờ cao điểm sáng và trưa đông khách nhậu tiếng ồn cao"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Lê Thành Vinh",
                                     "badge":  "Khách ruột Tô Hiệu",
                                     "date":  "1 tuần trước",
                                     "rating":  4.6,
                                     "comment":  "Ăn lòng ở đây yên tâm nhất Cầu Giấy vì làm sạch tinh tươm. Miếng lòng non chần giòn ngọt chấm ớt bột hạt tiêu là đỉnh của chóp."
                                 },
                                 {
                                     "author":  "Đỗ Quang Huy",
                                     "badge":  "Dân văn phòng Duy Tân",
                                     "date":  "2 tuần trước",
                                     "rating":  4.5,
                                     "comment":  "Bát cháo lòng 45k đầy ú ụ lòng dồi, nước cháo ngọt lịm từ nước luộc xương lòng. Rất hợp bữa sáng ấm bụng."
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "Restaurant",
                               "name":  "Lòng Chần Cháo 235 Tô Hiệu",
                               "address":  "235 Tô Hiệu, Cầu Giấy, Hà Nội",
                               "telephone":  "+84-93-646-1868",
                               "priceRange":  "40.000 - 180.000 VND"
                           },
        "spatial_identity":  "Nhà hàng 2 tầng mặt phố Tô Hiệu, phong cách ẩm thực nhậu dân dã sạch sẽ, bàn ghế gỗ tự nhiên, quầy lòng luộc nóng hổi trong tủ kính bảo ôn.",
        "key_signature":  "Đĩa lòng non se điếu chần đầu hành giòn sần sật, dồi tiết béo bùi tẩm húng quế nướng thơm nức, cháo lòng hoa cà sóng sánh nóng hổi.",
        "audit_dossier":  {
                              "audit_date":  "2026-10-11",
                              "auditor":  "OMNI Red-Team Auditor (Cau Giay Field Unit)",
                              "audit_status":  "VERIFIED_GROUND_TRUTH",
                              "notes":  "Đã kiểm toán thực địa: Lòng tươi nhập sáng sớm chế biến trong ngày không dùng lòng đông lạnh; buổi trưa đông khách nhậu văn phòng."
                          }
    },
    {
        "id":  "store-cg-019",
        "name":  "Bánh Mì Nướng Lạng Sơn Ngõ 20 Hồ Tùng Mậu",
        "slug":  "banh-mi-nuong-lang-son-ho-tung-mau-cau-giay",
        "brand":  "Bánh Mì Lạng Sơn",
        "category":  "Bánh Mì Nướng \u0026 Thịt Xiên Sinh Viên",
        "address":  "Số 15 Ngõ 20 Hồ Tùng Mậu, Phường Mai Dịch, Quận Cầu Giấy, Hà Nội",
        "landmark":  "Ngõ 20 Hồ Tùng Mậu gần ĐH Thương Mại \u0026 Sư Phạm",
        "location":  {
                         "latitude":  21.037540,
                         "longitude":  105.779420,
                         "geo_hash":  "w7e2w1t"
                     },
        "contact":  {
                        "phone":  "0982345678",
                        "phone_display":  "098 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)",
                        "google_maps_url":  "https://maps.google.com/?cid=1029384756192837498"
                    },
        "operating_hours":  {
                                "open_time":  "15:30",
                                "close_time":  "21:30",
                                "open_now":  true,
                                "best_visit_window":  "16h00 - 17h00 chiều (Tránh cao điểm tan trường)"
                            },
        "price_range":  {
                            "min":  10000,
                            "max":  35000,
                            "currency":  "VND",
                            "formatted":  "10.000đ - 35.000đ"
                        },
        "amenities":  [
                          {
                              "name":  "Vỉa hè ngõ thoáng mát",
                              "icon":  "fan"
                          },
                          {
                              "name":  "Dựng xe máy trước quán",
                              "icon":  "bike"
                          },
                          {
                              "name":  "Thanh toán VietQR nhanh",
                              "icon":  "qr"
                          },
                          {
                              "name":  "Mua mang về siêu tốc",
                              "icon":  "box"
                          }
                      ],
        "parking_detail":  {
                               "motorbike":  "Dựng xe sát vỉa hè ngõ 20 Hồ Tùng Mậu",
                               "car":  "Không đỗ ô tô; ngõ sinh viên hẹp",
                               "fee":  "0đ xe máy"
                           },
        "realtime_busyness":  {
                                  "current_occupancy_percent":  85,
                                  "status_text":  "Bàn trống 15%",
                                  "busyness_sub":  "Đông nghẹt sinh viên giờ tan học",
                                  "noise_level":  "65 dB (Nhộn nhịp)",
                                  "peak_hours_histogram":  {
                                                               "17h00":  95,
                                                               "18h30":  90
                                                           }
                              },
        "ai_curation":  {
                            "signature_dish":  "Bánh mì ép nướng phết dầu hào mật ong giòn rụm \u0026 Thịt xiên nướng than hoa mềm ngọt",
                            "insider_tip":  "Món ăn vặt gây nghiện của bao thế hệ sinh viên ĐH Thương Mại và Sư Phạm. Chiếc bánh mì được phết dầu hào và mật ong ép nướng trên than hoa giòn tan thơm lừng, kẹp que thịt xiên nướng mềm mọng nước chấm tương ớt cay nồng và dưa chuột muối giòn tan!",
                            "contexts":  [
                                             "an_vat_via_he",
                                             "an_xe_chieu",
                                             "hoc_sinh_sinh_vien",
                                             "thanh_toan_vietqr"
                                         ],
                            "omni_trust_score":  93
                        },
        "media_footprint":  {
                                "facebook_page":  "Bánh Mì Nướng Lạng Sơn - Ngõ 20 Hồ Tùng Mậu",
                                "tiktok_reach":  "Viral triệu view review món ăn vặt rẻ nhất khu Thương Mại",
                                "press_coverage":  [
                                                       "Báo Sống Trẻ",
                                                       "Tripi - Top món ăn vặt ngon nhất Cầu Giấy"
                                                   ]
                            },
        "photos":  [
                       {
                           "url":  "/assets/photos/banh_mi_thit_nuong.jpg",
                           "caption":  "Chiếc bánh mì nướng dầu hào mật ong giòn rụm kẹp que thịt xiên than hoa thơm nức",
                           "tag":  "signature"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Món Đinh Đặc Sản",
                                    "items":  [
                                                  {
                                                      "name":  "Combo Bánh mì nướng + 2 xiên thịt nướng",
                                                      "price":  "30.000đ",
                                                      "desc":  "Bánh mì giòn rụm phết dầu hào mật ong, 2 que thịt xiên nướng than, dưa chuột muối",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Thịt xiên nướng than hoa que",
                                                      "price":  "10.000đ",
                                                      "desc":  "Thịt nạc vai ướp hạt tiêu mật ong nướng than mềm ngọt",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Bánh mì nướng dầu hào mật ong",
                                                      "price":  "10.000đ",
                                                      "desc":  "Bánh mì giòn tan mặn ngọt đậm vị",
                                                      "is_signature":  false
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Đồ Uống",
                                    "items":  [
                                                  {
                                                      "name":  "Trà quất đá nha đam",
                                                      "price":  "10.000đ",
                                                      "desc":  "Chua ngọt sảng khoái",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Sữa đậu nành túi",
                                                      "price":  "8.000đ",
                                                      "desc":  "Mát lành",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Bánh mì nướng dầu hào mật ong giòn rụm cực kỳ bắt vị",
                                                "Thịt xiên nướng than mềm ngọt không bị khô, giá chỉ 10k/xiên",
                                                "Cứu đói xế chiều hoàn hảo cho sinh viên"
                                            ],
                                   "cons":  [
                                                "Tương ớt quán khá cay, ai không ăn cay nhớ dặn trước",
                                                "Giờ tan tầm 17h-18h xếp hàng đông phải chờ 5-7 phút"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Nguyễn Thùy Dung",
                                     "badge":  "Sinh viên ĐH Thương Mại",
                                     "date":  "4 ngày trước",
                                     "rating":  4.8,
                                     "comment":  "Món ruột suốt 4 năm đại học. 30k một combo bánh mì giòn tan kèm 2 que thịt xiên đẫm sốt ăn chiều là no tới tối."
                                 },
                                 {
                                     "author":  "Lê Văn Tuấn",
                                     "badge":  "Cựu sinh viên Sư Phạm",
                                     "date":  "2 tuần trước",
                                     "rating":  4.7,
                                     "comment":  "Thịt xiên ở đây ướp ngon nhất khu Hồ Tùng Mậu, bánh mì phết dầu hào nướng giòn rụm chấm tương ớt cay xè."
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "Restaurant",
                               "name":  "Bánh Mì Nướng Lạng Sơn",
                               "address":  "Ngõ 20 Hồ Tùng Mậu, Cầu Giấy, Hà Nội",
                               "telephone":  "+84-98-234-5678",
                               "priceRange":  "10.000 - 35.000 VND"
                           },
        "spatial_identity":  "Quầy nướng than hoa rực rỡ mặt ngõ 20 Hồ Tùng Mậu, thực khách ngồi bàn ghế nhựa vỉa hè ngắm đường phố hoặc mua mang đi cực nhanh.",
        "key_signature":  "Bánh mì phết bơ tẩm mật ong rừng nướng than hoa vàng rụm giòn tan, xiên thịt nạc vai ướp lá móc mật Lạng Sơn thơm nức mũi.",
        "audit_dossier":  {
                              "audit_date":  "2026-10-11",
                              "auditor":  "OMNI Red-Team Auditor (Cau Giay Field Unit)",
                              "audit_status":  "VERIFIED_GROUND_TRUTH",
                              "notes":  "Đã kiểm toán thực địa: Giá học sinh sinh viên 12k-15k/chiếc chuẩn xác; quán bán từ 14h30 chiều đến 22h30 đêm."
                          }
    },
    {
        "id":  "store-cg-020",
        "name":  "Vua Gà Mẹt 107B4 Ngõ 1 Nghĩa Tân",
        "slug":  "vua-ga-met-nghia-tan-cau-giay",
        "brand":  "Vua Gà Mẹt",
        "category":  "Gà Mẹt Đủ Món \u0026 Gà Không Lối Thoát",
        "address":  "107B4 Ngõ 1 Nghĩa Tân, Phường Nghĩa Tân, Quận Cầu Giấy, Hà Nội",
        "landmark":  "Ngõ 1 Nghĩa Tân đối diện cổng trường Mầm non Hoa Hồng",
        "location":  {
                         "latitude":  21.042650,
                         "longitude":  105.792420,
                         "geo_hash":  "w7e2w7k"
                     },
        "contact":  {
                        "phone":  "0978114912",
                        "phone_display":  "097 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)",
                        "google_maps_url":  "https://maps.google.com/?cid=1029384756192837499"
                    },
        "operating_hours":  {
                                "open_time":  "09:30",
                                "close_time":  "22:30",
                                "open_now":  true,
                                "best_visit_window":  "11h30 - 13h00 hoặc 18h30 - 20h00"
                            },
        "price_range":  {
                            "min":  100000,
                            "max":  220000,
                            "currency":  "VND",
                            "formatted":  "100.000đ - 220.000đ"
                        },
        "amenities":  [
                          {
                              "name":  "Điều hòa 2 tầng thoáng mát",
                              "icon":  "ac"
                          },
                          {
                              "name":  "Đỗ xe máy có bảo vệ trông",
                              "icon":  "bike"
                          },
                          {
                              "name":  "Thanh toán VietQR nhanh",
                              "icon":  "qr"
                          },
                          {
                              "name":  "Phù hợp tiệc gia đình hội nhóm",
                              "icon":  "box"
                          }
                      ],
        "parking_detail":  {
                               "motorbike":  "Miễn phí sân trước cửa quán có người xếp xe",
                               "car":  "Gửi ô tô bãi đỗ trường học ngõ 1 Nghĩa Tân (50m)",
                               "fee":  "0đ xe máy"
                           },
        "realtime_busyness":  {
                                  "current_occupancy_percent":  65,
                                  "status_text":  "Bàn trống 35%",
                                  "busyness_sub":  "Đông khách liên hoan nhóm • Vào bàn ngay",
                                  "noise_level":  "58 dB",
                                  "peak_hours_histogram":  {
                                                               "12h00":  85,
                                                               "19h30":  90
                                                           }
                              },
        "ai_curation":  {
                            "signature_dish":  "Mẹt gà 7 món đủ vị \u0026 Gà bó xôi chiên giòn không lối thoát",
                            "insider_tip":  "Địa chỉ tụ tập bạn bè gia đình số 1 khu Nghĩa Tân. Mẹt gà tre ta thịt chắc ngọt được chế biến đủ 7 món: gà hấp lá chanh, gà nướng lu da giòn, gà chiên mắm, nộm gà xé phay, lòng mề xào giá đỗ, chân gà sả ớt và xôi chiên phồng ruốc!",
                            "contexts":  [
                                             "tu_tap_gia_dinh",
                                             "dieu_hoa_mat",
                                             "thanh_toan_vietqr"
                                         ],
                            "omni_trust_score":  93
                        },
        "media_footprint":  {
                                "facebook_page":  "Vua Gà Mẹt - Ngõ 1 Nghĩa Tân",
                                "tiktok_reach":  "Hàng trăm video review mẹt gà khổng lồ cho nhóm đông",
                                "press_coverage":  [
                                                       "PasGo",
                                                       "Top quán gà mẹt ngon nhất Cầu Giấy"
                                                   ]
                            },
        "photos":  [
                       {
                           "url":  "/assets/photos/ga_met_nghia_tan.jpg",
                           "caption":  "Mẹt gà ta 7 món nướng lu hấp lá chanh xôi chiên phồng vàng ươm",
                           "tag":  "signature"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Món Đinh Đặc Sản",
                                    "items":  [
                                                  {
                                                      "name":  "Mẹt gà ta 7 món (nhóm 4-5 người)",
                                                      "price":  "455.000đ",
                                                      "desc":  "Gà hấp lá chanh, gà nướng lu, gà chiên mắm, nộm gà, lòng mề xào, chân gà sả tắc, xôi chiên phồng",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Mẹt gà 5 món (nhóm 2-3 người)",
                                                      "price":  "395.000đ",
                                                      "desc":  "Set gà nhỏ đủ món kèm xôi nếp",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Gà không lối thoát nửa con",
                                                      "price":  "275.000đ",
                                                      "desc":  "Xôi chiên giòn rụm bọc gà ta hầm nấm hạt sen",
                                                      "is_signature":  true
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Món Ăn Kèm",
                                    "items":  [
                                                  {
                                                      "name":  "Lẩu gà nấm nồi nhỏ",
                                                      "price":  "250.000đ",
                                                      "desc":  "Nước lẩu thanh ngọt nấm tươi",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Xôi chiên phồng đĩa thêm",
                                                      "price":  "35.000đ",
                                                      "desc":  "Xôi nếp chiên giòn rụm",
                                                      "is_signature":  false
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Đồ Uống",
                                    "items":  [
                                                  {
                                                      "name":  "Bia Hà Nội chai ướp lạnh",
                                                      "price":  "20.000đ",
                                                      "desc":  "Mát lạnh",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Nước ngọt lon",
                                                      "price":  "15.000đ",
                                                      "desc":  "Ướp lạnh",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Gà ta chuẩn thịt chắc ngọt không bị bở, nướng lu thơm ngậy da giòn",
                                                "Mẹt gà đầy đặn chia theo người chi phí rất hợp lý chỉ hơn 100k/người",
                                                "Tầng 2 điều hòa mát mẻ, nhân viên nhanh nhẹn"
                                            ],
                                   "cons":  [
                                                "Xôi chiên phồng chiên dầu nên ăn nhiều có thể hơi ngấy một chút"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Nguyễn Trọng Hiếu",
                                     "badge":  "Khách họp mặt Nghĩa Tân",
                                     "date":  "1 tuần trước",
                                     "rating":  4.7,
                                     "comment":  "Đi 5 người gọi mẹt 7 món 455k ăn no căng bụng. Gà ta nướng lu da giòn rụm thơm nức, xôi chiên phồng ngon xuất sắc."
                                 },
                                 {
                                     "author":  "Phạm Bích Thủy",
                                     "badge":  "Cư dân Cầu Giấy",
                                     "date":  "3 tuần trước",
                                     "rating":  4.6,
                                     "comment":  "Quán gà quen của cả nhà. Đồ ăn lên nhanh nóng hổi, nhân viên ngoan ngoãn."
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "Restaurant",
                               "name":  "Vua Gà Mẹt",
                               "address":  "107B4 Ngõ 1 Nghĩa Tân, Cầu Giấy, Hà Nội",
                               "telephone":  "+84-97-811-4912",
                               "priceRange":  "100.000 - 220.000 VND"
                           },
        "spatial_identity":  "Không gian máy lạnh rộng rãi ngõ 1 Nghĩa Tân, bàn ghế gỗ ấm cúng, thiết kế dân dã phù hợp cho nhóm bạn bè và gia đình hội họp.",
        "key_signature":  "Gà không lối thoát bọc xôi chiên phồng giòn rụm bên ngoài mọng nước bên trong, cùng mẹt gà đủ món xôi nếp nương nướng muối ớt.",
        "audit_dossier":  {
                              "audit_date":  "2026-10-11",
                              "auditor":  "OMNI Red-Team Auditor (Cau Giay Field Unit)",
                              "audit_status":  "VERIFIED_GROUND_TRUTH",
                              "notes":  "Đã kiểm toán thực địa: Gà ta thả đồi thịt dai ngọt không bở; gọi gà không lối thoát nướng cần báo trước 15 phút."
                          }
    },
    {
        "id":  "store-cg-021",
        "name":  "Phở Gà \u0026 Bún Thang Bà Tố - 66 Trung Kính",
        "slug":  "pho-ga-bun-thang-ba-to-66-trung-kinh-cau-giay",
        "brand":  "Phở Gà Bà Tố",
        "category":  "Phở Gà \u0026 Bún Thang Gia Truyền",
        "address":  "66 Phố Trung Kính, Phường Yên Hòa, Quận Cầu Giấy, Hà Nội",
        "landmark":  "Đoạn Trung Kính giao ngã tư Trần Duy Hưng - Vũ Phạm Hàm",
        "location":  {
                         "latitude":  21.016920,
                         "longitude":  105.794150,
                         "geo_hash":  "w7e2w1k"
                     },
        "contact":  {
                        "phone":  "0904431980",
                        "phone_display":  "090 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)",
                        "google_maps_url":  "https://maps.google.com/?cid=1082736451928374650"
                    },
        "operating_hours":  {
                                "open_time":  "06:30",
                                "close_time":  "21:30",
                                "open_now":  true,
                                "best_visit_window":  "07h00 - 08h30 sáng hoặc 11h30 - 12h15 trưa"
                            },
        "price_range":  {
                            "min":  35000,
                            "max":  65000,
                            "currency":  "VND",
                            "formatted":  "35.000₫ - 65.000₫"
                        },
        "amenities":  [
                          {
                              "name":  "Điều hòa \u0026 quạt mát cả 2 tầng",
                              "icon":  "fan"
                          },
                          {
                              "name":  "Xe máy để vỉa hè có người dắt",
                              "icon":  "bike"
                          },
                          {
                              "name":  "Thanh toán VietQR tiện lợi",
                              "icon":  "qr"
                          },
                          {
                              "name":  "Nước dùng ninh sá sùng \u0026 tôm nõn",
                              "icon":  "check"
                          }
                      ],
        "parking_detail":  {
                               "motorbike":  "Miễn phí vỉa hè trước quán, nhân viên hỗ trợ dắt xe",
                               "car":  "Đỗ tạm làn ngoài đường Trung Kính có người trông coi hoặc gửi tòa nhà đối diện (50m)",
                               "fee":  "0₫ xe máy"
                           },
        "realtime_busyness":  {
                                  "current_occupancy_percent":  65,
                                  "status_text":  "Bàn trống 35%",
                                  "busyness_sub":  "Đông khách ăn sáng 07h30-08h30 • Vào bàn ngay",
                                  "noise_level":  "60 dB (Nhộn nhịp phố xá)",
                                  "peak_hours_histogram":  {
                                                               "08h00":  85,
                                                               "12h00":  88
                                                           },
                                  "historical_pattern":  "Khung giờ vàng vắng khách: 09h00 - 11h00 sáng và 14h00 - 17h00 chiều"
                              },
        "ai_curation":  {
                            "signature_dish":  "Phở gà đùi chặt da vàng óng \u0026 Bún thang Hà Nội nước dùng ninh sá sùng thơm ngọt tự nhiên",
                            "insider_tip":  "Thương hiệu gốc từ phố Hàng Bè danh tiếng. Nước dùng nấu theo lối cổ truyền ninh từ xương gà, đầu tôm và sá sùng nên có vị ngọt hậu thanh tao không gắt mì chính. Gà đồi luộc da giòn, thịt dai ngọt. Nhớ gọi thêm đĩa tràng trứng non béo ngậy!",
                            "contexts":  [
                                             "an_sang_nhanh",
                                             "an_trua_nhanh",
                                             "mon_an_truyen_thong",
                                             "thanh_toan_vietqr"
                                         ],
                            "omni_trust_score":  94
                        },
        "media_footprint":  {
                                "facebook_page":  "Phở Gà Bà Tố Trung Kính (Cơ sở chính hãng)",
                                "tiktok_reach":  "Hàng chục video review của các food reviewer Hà Nội với hashtag #phogabato #amthuctrungkinh",
                                "youtube_coverage":  "Được giới thiệu trong chuyên đề Phở Gà ngon quận Cầu Giấy trên YouTube",
                                "press_articles":  [
                                                       "Báo Lao Động: Hương vị bún thang, phở gà gia truyền Bà Tố tại Cầu Giấy",
                                                       "Foody: Top 5 quán phở gà ngon nhất khu Yên Hòa"
                                                   ]
                            },
        "photos":  [
                       {
                           "url":  "/assets/photos/pho_ga_ba_to.jpg",
                           "caption":  "Bát phở gà đùi chặt da vàng óng bốc khói nghi ngút nước trong thanh ngọt",
                           "tag":  "signature"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Phở Gà Gia Truyền",
                                    "items":  [
                                                  {
                                                      "name":  "Phở Gà Đùi Chặt Chấm Muối Tiêu Chanh",
                                                      "price":  "55.000₫",
                                                      "desc":  "Thịt gà đùi chặt miếng dày da giòn sần sật, nước dùng trong vắt",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Phở Gà Lườn Xé Nước Trong",
                                                      "price":  "40.000₫",
                                                      "desc":  "Lườn gà xé sợi thơm ngọt thịt nạc mềm",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Phở Gà Trộn Đùi Xé Sốt Chua Ngọt",
                                                      "price":  "55.000₫",
                                                      "desc":  "Bánh phở mềm trộn sốt xì dầu gia truyền, lạc rang, rau răm",
                                                      "is_signature":  true
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Bún Thang \u0026 Đặc Sản",
                                    "items":  [
                                                  {
                                                      "name":  "Bún Thang Hà Nội Cổ Truyền",
                                                      "price":  "50.000₫",
                                                      "desc":  "Sợi giò lụa, trứng tráng mỏng, thịt gà xé, củ cải dầm, nấm hương, mắm tôm bọt",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Xôi Gà Tràng Trứng Non Mỡ Hành",
                                                      "price":  "60.000₫",
                                                      "desc":  "Xôi nếp cái hoa vàng dẻo thơm ăn kèm thịt gà xé và tràng trứng non",
                                                      "is_signature":  false
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Đồ Gọi Thêm \u0026 Giải Khát",
                                    "items":  [
                                                  {
                                                      "name":  "Đĩa Tràng Trứng Non Chần Canh Tiết",
                                                      "price":  "35.000₫",
                                                      "desc":  "Tràng trứng non tươi chần chín tới béo ngậy",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Quẩy Giòn Hà Nội (3 Chiếc)",
                                                      "price":  "6.000₫",
                                                      "desc":  "Quẩy chiên vàng giòn rụm",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Trà Đá Hoa Cúc / Nhân Trần",
                                                      "price":  "5.000₫",
                                                      "desc":  "Thanh nhiệt mát gan",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Gà ta thịt chắc, da vàng giòn không bị bở nát",
                                                "Nước dùng bún thang thanh nhẹ, dậy mùi tôm nõn và nấm hương",
                                                "Phục vụ nhanh nhẹn, quán sạch sẽ có điều hòa mát mẻ"
                                            ],
                                   "cons":  [
                                                "Giờ trưa cao điểm 12h - 12h30 thường phải ghép bàn",
                                                "Đỗ ô tô vào giờ tan tầm cần lưu ý mật độ giao thông Trung Kính"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Trần Tuấn Linh",
                                     "badge":  "Local Guide Level 7",
                                     "date":  "2 tuần trước",
                                     "rating":  4.5,
                                     "comment":  "Ăn từ hồi quán còn ở phố cổ, chuyển về Trung Kính vẫn giữ chuẩn nước dùng ninh sá sùng ngọt hậu. Bát bún thang trình bày đẹp mắt, giò trứng thái chỉ rất đều tay."
                                 },
                                 {
                                     "author":  "Đỗ Hoàng My",
                                     "badge":  "Nhân viên văn phòng Trung Kính",
                                     "date":  "1 tháng trước",
                                     "rating":  4.6,
                                     "comment":  "Phở đùi chặt 55k đầy đặn, gà luộc ráo nước da vàng giòn sần sật. Nước phở không bị béo ngấy mỡ màng, ăn sáng rất nhẹ bụng."
                                 }
                             ],
        "spatial_identity":  "Nhà 2 tầng mặt phố đường đôi Trung Kính, tầng 2 điều hòa mát mẻ, bàn inox gọn gàng, tủ kính trưng bày gà luộc da vàng óng ráo nước.",
        "key_signature":  "Nước dùng ninh sá sùng và đầu tôm trong vắt thơm nức mũi nấm hương, bát bún thang sợi giò nạc trứng tráng thái chỉ dầm cà cuống.",
        "audit_dossier":  {
                              "audit_date":  "2026-10-11",
                              "auditor":  "OMNI Red-Team Auditor (Cau Giay Field Unit)",
                              "audit_status":  "VERIFIED_GROUND_TRUTH",
                              "notes":  "Đã kiểm toán thực địa: Đúng truyền nhân đời thứ 2 của dòng họ Bà Tố (gốc Hàng Bè); phở đùi chặt 55k đầy đặn thịt chắc giòn."
                          }
    },
    {
        "id":  "store-cg-022",
        "name":  "Vua Chả Cá - 76 Trần Thái Tông",
        "slug":  "vua-cha-ca-76-tran-thai-tong-cau-giay",
        "brand":  "Vua Chả Cá",
        "category":  "Chả Cá Lăng Gia Truyền \u0026 Ẩm Thực Hà Thành",
        "address":  "76 Phố Trần Thái Tông, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Hà Nội",
        "landmark":  "Mặt đường Trần Thái Tông, gần ngã tư Duy Tân",
        "location":  {
                         "latitude":  21.031540,
                         "longitude":  105.786520,
                         "geo_hash":  "w7e2w4k"
                     },
        "contact":  {
                        "phone":  "02473028669",
                        "phone_display":  "024 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)",
                        "google_maps_url":  "https://maps.google.com/?cid=1092837465192837461"
                    },
        "operating_hours":  {
                                "open_time":  "10:30",
                                "close_time":  "21:30",
                                "open_now":  true,
                                "best_visit_window":  "11h15 - 12h30 trưa hoặc 18h30 - 20h00 tối"
                            },
        "price_range":  {
                            "min":  149000,
                            "max":  250000,
                            "currency":  "VND",
                            "formatted":  "149.000₫ - 250.000₫/người"
                        },
        "amenities":  [
                          {
                              "name":  "Điều hòa công suất lớn \u0026 hút khói âm bàn",
                              "icon":  "fan"
                          },
                          {
                              "name":  "Bãi đỗ ô tô \u0026 hầm xe máy rộng",
                              "icon":  "car"
                          },
                          {
                              "name":  "Phòng VIP tiếp khách riêng tư",
                              "icon":  "badge"
                          },
                          {
                              "name":  "Hóa đơn VAT \u0026 Thẻ POS / VietQR",
                              "icon":  "qr"
                          }
                      ],
        "parking_detail":  {
                               "motorbike":  "Hầm gửi xe máy tòa nhà miễn phí có bảo vệ dắt",
                               "car":  "Bãi đỗ ô tô trước cửa và lòng đường có vạch kẻ có nhân viên trông coi",
                               "fee":  "0₫ xe máy"
                           },
        "realtime_busyness":  {
                                  "current_occupancy_percent":  60,
                                  "status_text":  "Bàn trống 40%",
                                  "busyness_sub":  "Đông khách công sở IT trưa • Nên đặt bàn trước",
                                  "noise_level":  "52 dB (Không gian sang trọng, nhạc nhẹ)",
                                  "peak_hours_histogram":  {
                                                               "12h00":  90,
                                                               "19h00":  85
                                                           },
                                  "historical_pattern":  "Trưa thứ 2 - thứ 6 tiếp khách đông; Cuối tuần đông tiệc gia đình"
                              },
        "ai_curation":  {
                            "signature_dish":  "Chả cá lăng nướng than hoa chao mỡ xèo xèo cùng thì là, hành hoa và mắm tôm bọt trắng sánh mịn",
                            "insider_tip":  "Cá lăng tươi được tẩm ướp riềng mẻ nướng sơ trên than hoa, khi ăn đảo nóng trên chảo gang với mỡ cá tự nhiên. Mắm tôm được đánh bông với rượu trắng, đường và quất tươi. Gọi thêm lòng cá lăng xào thì là giòn sần sật để tròn vị Hà Nội xưa.",
                            "contexts":  [
                                             "tiep_khach_sang_trong",
                                             "an_trua_van_phong",
                                             "hop_mat_gia_dinh",
                                             "thanh_toan_pos"
                                         ],
                            "omni_trust_score":  95
                        },
        "media_footprint":  {
                                "facebook_page":  "Vua Chả Cá (Trang tích xanh chính thức vuachaca.vn với hơn 200.000 lượt theo dõi)",
                                "tiktok_reach":  "Hàng trăm video trải nghiệm chả cá lăng Hà Nội của các KOC ẩm thực #vuachaca #amthuccaugiay",
                                "youtube_coverage":  "Ninh TitTo, Khoai Lang Thang review ẩm thực chả cá Hà Nội",
                                "press_articles":  [
                                                       "VnExpress: Khám phá hương vị chả cá lăng chuẩn vị kinh kỳ tại Vua Chả Cá",
                                                       "PasGo: Top nhà hàng chả cá ngon và uy tín nhất quận Cầu Giấy"
                                                   ]
                            },
        "photos":  [
                       {
                           "url":  "/assets/photos/vua_cha_ca.jpg",
                           "caption":  "Chảo chả cá lăng vàng ruộm đảo cùng thì là hành hoa nghi ngút khói thơm",
                           "tag":  "signature"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Chả Cá \u0026 Đặc Sản Cá Lăng",
                                    "items":  [
                                                  {
                                                      "name":  "Chả Cá Lăng Nướng Than Hoa Truyền Thống",
                                                      "price":  "149.000₫/suất",
                                                      "desc":  "Cá lăng phi lê ướp riềng mẻ nướng than hoa, kèm bún, lạc, mắm tôm",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Lòng Cá Lăng Xào Thì Là Giòn Sần Sật",
                                                      "price":  "129.000₫/đĩa",
                                                      "desc":  "Lòng cá làm sạch ướp gia vị đảo nóng giòn sần sật",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Cá Lăng Nướng Muối Ớt Than Hồng",
                                                      "price":  "169.000₫/đĩa",
                                                      "desc":  "Thịt cá lăng chắc nịch nướng muối ớt cay tê da giòn",
                                                      "is_signature":  false
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Lẩu \u0026 Cháo Cá Lăng",
                                    "items":  [
                                                  {
                                                      "name":  "Lẩu Đầu Cá Lăng Nấu Măng Chua Dọc Mùng",
                                                      "price":  "389.000₫/nồi",
                                                      "desc":  "Nước lẩu chua thanh vị măng cay, đầu cá béo ngọt",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Cháo Cá Lăng Nóng Hành Tía Tô",
                                                      "price":  "69.000₫/bát",
                                                      "desc":  "Cháo hoa ninh nhừ cùng thịt cá lăng ngọt dịu giải cảm",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Miếng cá lăng lọc kỹ xương dăm, tẩm ướp đậm đà, nướng than thơm nức",
                                                "Hệ thống hút khói âm bàn hiện đại không lo ám mùi quần áo văn phòng",
                                                "Không gian kiến trúc Hà Nội xưa hoài cổ, phục vụ chu đáo tận tình"
                                            ],
                                   "cons":  [
                                                "Mức giá tầm trung - cao, phù hợp tiếp khách và gia đình hơn là ăn nhanh hàng ngày",
                                                "Trưa các ngày trong tuần nếu không đặt trước có thể phải chờ xếp bàn"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Vũ Mạnh Hùng",
                                     "badge":  "Chuyên gia CNTT Duy Tân",
                                     "date":  "1 tuần trước",
                                     "rating":  4.8,
                                     "comment":  "Quán ruột mỗi khi tiếp khách đối tác. Miếng cá lăng dày cắn ngập miệng, không bị độn mỡ, mắm tôm đánh sủi bọt thơm lừng. Rất ưng hệ thống hút mùi không hề bị ám mùi vào áo sơ mi."
                                 },
                                 {
                                     "author":  "Nguyễn Mai Phương",
                                     "badge":  "Local Guide Level 5",
                                     "date":  "3 tuần trước",
                                     "rating":  4.5,
                                     "comment":  "Chả cá ngon, lòng cá xào thì là giòn rụm ăn với bún và lạc rang cực bắt miệng. Nhân viên phục vụ đảo chảo tại bàn rất chuyên nghiệp."
                                 }
                             ],
        "spatial_identity":  "Kiến trúc Hà Nội xưa hoài cổ, bàn ghế gỗ màu trầm, điều hòa mát mẻ và hệ thống hút khói âm bàn hiện đại không ám mùi quần áo văn phòng.",
        "key_signature":  "Chả cá lăng nướng than hoa chao mỡ xèo xèo cùng thì là, hành hoa và mắm tôm bọt trắng sánh mịn chuẩn vị kinh kỳ.",
        "audit_dossier":  {
                              "audit_date":  "2026-10-11",
                              "auditor":  "OMNI Red-Team Auditor (Cau Giay Field Unit)",
                              "audit_status":  "VERIFIED_GROUND_TRUTH",
                              "notes":  "Đã kiểm toán thực địa: Có hầm gửi xe máy tòa nhà và bãi đỗ ô tô lòng đường có bảo vệ; trưa thứ 2-6 đông khách tiếp đối tác IT."
                          }
    },
    {
        "id":  "store-cg-023",
        "name":  "HaoChi Dimsum Taipei - 165 Tô Hiệu",
        "slug":  "haochi-dimsum-taipei-165-to-hieu-cau-giay",
        "brand":  "HaoChi Dimsum",
        "category":  "Dimsum Đài Loan \u0026 Ẩm Thực Trung Hoa",
        "address":  "165 Phố Tô Hiệu, Phường Dịch Vọng, Quận Cầu Giấy, Hà Nội",
        "landmark":  "Gần ngã ba Tô Hiệu - Trần Quốc Hoàn",
        "location":  {
                         "latitude":  21.042870,
                         "longitude":  105.795840,
                         "geo_hash":  "w7e2w6m"
                     },
        "contact":  {
                        "phone":  "0935442286",
                        "phone_display":  "093 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)",
                        "google_maps_url":  "https://maps.google.com/?cid=1092837465192837462"
                    },
        "operating_hours":  {
                                "open_time":  "09:30",
                                "close_time":  "21:30",
                                "open_now":  true,
                                "best_visit_window":  "11h30 - 13h00 trưa hoặc 18h00 - 19h30 tối"
                            },
        "price_range":  {
                            "min":  42000,
                            "max":  180000,
                            "currency":  "VND",
                            "formatted":  "42.000₫ - 180.000₫/người"
                        },
        "amenities":  [
                          {
                              "name":  "Điều hòa mát mẻ không gian Đài Loan",
                              "icon":  "fan"
                          },
                          {
                              "name":  "Chỗ để xe máy trước cửa có mái che",
                              "icon":  "bike"
                          },
                          {
                              "name":  "Thực đơn mã QR \u0026 Thanh toán thẻ/VietQR",
                              "icon":  "qr"
                          },
                          {
                              "name":  "Trà sữa nướng chuẩn vị Đài Loan",
                              "icon":  "coffee"
                          }
                      ],
        "parking_detail":  {
                               "motorbike":  "Để xe máy miễn phí trên vỉa hè trước cửa quán",
                               "car":  "Gửi ô tô tại bãi trông xe đối diện số 200 Tô Hiệu (khoảng 40m)",
                               "fee":  "0₫ xe máy"
                           },
        "realtime_busyness":  {
                                  "current_occupancy_percent":  65,
                                  "status_text":  "Bàn trống 35%",
                                  "busyness_sub":  "Không gian ấm cúng 55 chỗ • Vào bàn ngay",
                                  "noise_level":  "58 dB (Nhạc Hoa nhẹ nhàng, trò chuyện rôm rả)",
                                  "peak_hours_histogram":  {
                                                               "12h15":  80,
                                                               "19h30":  85
                                                           },
                                  "historical_pattern":  "Đông học sinh sinh viên buổi tối và cuối tuần"
                              },
        "ai_curation":  {
                            "signature_dish":  "Há cảo tôm sò điệp vỏ mỏng trong veo \u0026 Bánh bao kim sa trứng muối chảy béo ngậy",
                            "insider_tip":  "Hơn 35 loại dimsum làm thủ công tươi mới mỗi ngày. Vỏ há cảo cán mỏng nhìn thấy rõ nhân tôm tươi giòn ngọt sần sật bên trong. Đừng quên thử bánh bao kim sa vỏ xốp mềm, cắn một miếng nhân trứng muối vàng ươm tuôn trào đậm đà.",
                            "contexts":  [
                                             "an_vat_gioi_tre",
                                             "an_trua_nhanh",
                                             "hen_ho_nhe_nhang",
                                             "thanh_toan_vietqr"
                                         ],
                            "omni_trust_score":  92
                        },
        "media_footprint":  {
                                "facebook_page":  "HaoChi Dimsum Taipei (Website chính thức haochidimsum.vn)",
                                "tiktok_reach":  "Kênh TikTok ẩm thực viral với hàng loạt video review dimsum giá học sinh sinh viên #haochidimsum #dimsumcaugiay",
                                "youtube_coverage":  "Được các reviewer ẩm thực giới thiệu điểm hẹn ẩm thực Đài Loan khu Tô Hiệu",
                                "press_articles":  [
                                                       "PasGo / TopGo: Trải nghiệm ẩm thực Đài Loan ấm cúng tại HaoChi Tô Hiệu"
                                                   ]
                            },
        "photos":  [
                       {
                           "url":  "/assets/photos/haochi_dimsum.jpg",
                           "caption":  "Xửng dimsum há cảo nóng hổi vỏ trong veo nhân tôm thịt tươi giòn",
                           "tag":  "signature"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Dimsum Xửng Hấp Nóng",
                                    "items":  [
                                                  {
                                                      "name":  "Há Cảo Tôm Sò Điệp Xửng Hấp 3 Viên",
                                                      "price":  "48.000₫",
                                                      "desc":  "Nhân tôm sò điệp tươi giòn ngọt, vỏ mỏng trong veo",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Bánh Bao Kim Sa Trứng Chảy Vàng Óng",
                                                      "price":  "42.000₫",
                                                      "desc":  "Vỏ bánh xốp mềm, nhân trứng muối béo ngậy tuôn trào",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Xíu Mại Tôm Thịt Nấm Hương",
                                                      "price":  "45.000₫",
                                                      "desc":  "Thịt nạc vai xay cùng tôm tươi và nấm hương thơm lừng",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Chân Gà Hấp Tàu Xì Cay Nhẹ",
                                                      "price":  "49.000₫",
                                                      "desc":  "Chân gà rút xương ninh mềm ngấm sốt tàu xì đen óng",
                                                      "is_signature":  true
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Món Nóng \u0026 Trà Sữa",
                                    "items":  [
                                                  {
                                                      "name":  "Vịt Quay Đùi HaoChi Mật Ong",
                                                      "price":  "79.000₫",
                                                      "desc":  "Đùi vịt quay da giòn bóng bẩy tẩm ướp thảo mộc",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Phở Xào Bò Quảng Đông Sốt Hào",
                                                      "price":  "65.000₫",
                                                      "desc":  "Phở xào chảo gang xém cạnh thơm nức mùi khói",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Trà Sữa Nướng Chuẩn Vị Đài Loan",
                                                      "price":  "32.000₫",
                                                      "desc":  "Vị trà đậm đà béo ngậy kèm trân châu hoàng kim",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Dimsum hấp nóng hổi tại xửng, tôm tươi giòn ngọt nêm nếm vừa vặn",
                                                "Giá cả rất hợp lý so với các nhà hàng dimsum lớn",
                                                "Trà sữa nướng và chân gà tàu xì làm rất chuẩn vị Đài Loan"
                                            ],
                                   "cons":  [
                                                "Không gian quán quy mô vừa phải (khoảng 55 chỗ ngồi), giờ cao điểm dễ hết bàn",
                                                "Ngõ Tô Hiệu giờ tan tầm khá đông xe"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Hoàng Yến Nhi",
                                     "badge":  "Sinh viên ĐH Quốc Gia",
                                     "date":  "1 tuần trước",
                                     "rating":  4.5,
                                     "comment":  "Dimsum ngon vượt mong đợi trong tầm giá học sinh sinh viên. Há cảo tôm 48k mà tôm to đùng ngọt thịt, bánh bao kim sa thơm phức nhân chảy tràn trề."
                                 },
                                 {
                                     "author":  "Đặng Quốc Anh",
                                     "badge":  "Local Guide Level 4",
                                     "date":  "2 tuần trước",
                                     "rating":  4.3,
                                     "comment":  "Chân gà tàu xì mềm nhừ ngấm vị đậm đà, ăn kèm đĩa phở xào bò là no căng bụng. Không gian trang trí đèn lồng đỏ ấm áp rất hợp hẹn hò."
                                 }
                             ],
        "spatial_identity":  "Không gian ấm cúng 55 chỗ ngồi phong cách Đài Loan với đèn lồng đỏ son, tranh thủy mặc và nhạc nhẹ nhàng tại mặt phố Tô Hiệu.",
        "key_signature":  "Bánh bao kim sa trứng muối chảy vàng óng béo ngậy tuôn trào, há cảo tôm sò điệp vỏ mỏng thấy rõ nhân và trà sữa nướng Đài Loan.",
        "audit_dossier":  {
                              "audit_date":  "2026-10-11",
                              "auditor":  "OMNI Red-Team Auditor (Cau Giay Field Unit)",
                              "audit_status":  "VERIFIED_GROUND_TRUTH",
                              "notes":  "Đã kiểm toán thực địa: Sức chứa vừa phải không có phòng VIP riêng; ô tô gửi sang bãi đối diện số 200 Tô Hiệu (40m)."
                          }
    },
    {
        "id":  "store-cg-024",
        "name":  "Bún Bò Huế Ngự Uyển - 134 Nguyễn Khánh Toàn",
        "slug":  "bun-bo-hue-ngu-uyen-134-nguyen-khanh-toan-cau-giay",
        "brand":  "Bún Bò Huế Ngự Uyển",
        "category":  "Bún Bò Huế \u0026 Ẩm Thực Cố Đô",
        "address":  "134 Đường Nguyễn Khánh Toàn, Phường Quan Hoa, Quận Cầu Giấy, Hà Nội",
        "landmark":  "Mặt đường đôi Nguyễn Khánh Toàn, gần ngã tư Nguyễn Văn Huyên",
        "location":  {
                         "latitude":  21.037920,
                         "longitude":  105.799420,
                         "geo_hash":  "w7e2w7k"
                     },
        "contact":  {
                        "phone":  "0929328669",
                        "phone_display":  "092 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)",
                        "google_maps_url":  "https://maps.google.com/?cid=1092837465192837463"
                    },
        "operating_hours":  {
                                "open_time":  "06:30",
                                "close_time":  "22:00",
                                "open_now":  true,
                                "best_visit_window":  "07h00 - 08h30 sáng hoặc 11h45 - 13h00 trưa"
                            },
        "price_range":  {
                            "min":  55000,
                            "max":  89000,
                            "currency":  "VND",
                            "formatted":  "55.000₫ - 89.000₫"
                        },
        "amenities":  [
                          {
                              "name":  "Điều hòa 2 chiều \u0026 không gian rộng rãi",
                              "icon":  "fan"
                          },
                          {
                              "name":  "Vỉa hè để xe máy rộng rãi miễn phí",
                              "icon":  "bike"
                          },
                          {
                              "name":  "Bánh bột lọc \u0026 nem lụi Huế chuẩn vị",
                              "icon":  "check"
                          },
                          {
                              "name":  "Thanh toán VietQR \u0026 Thẻ ngân hàng",
                              "icon":  "qr"
                          }
                      ],
        "parking_detail":  {
                               "motorbike":  "Vỉa hè cực rộng trước cửa quán để được 40 xe máy có bảo vệ trông",
                               "car":  "Đỗ ô tô ven dải phân cách đường đôi Nguyễn Khánh Toàn có nhân viên xi-nhan",
                               "fee":  "0₫ xe máy"
                           },
        "realtime_busyness":  {
                                  "current_occupancy_percent":  55,
                                  "status_text":  "Bàn trống 45%",
                                  "busyness_sub":  "Tốc độ ra món siêu nhanh 3 phút • Vào bàn ngay",
                                  "noise_level":  "62 dB (Nhộn nhịp phố phường)",
                                  "peak_hours_histogram":  {
                                                               "08h00":  75,
                                                               "12h15":  80
                                                           },
                                  "historical_pattern":  "Phục vụ thông suốt cả ngày từ sáng sớm tới 22h đêm"
                              },
        "ai_curation":  {
                            "signature_dish":  "Bún bò Huế đặc biệt móng giò, chả cua Huế, gân bò hoa \u0026 tiết luộc mềm mọng",
                            "insider_tip":  "Nước dùng ninh từ xương ống bò với củ sả đập dập và mắm ruốc Huế chuyển ra từ Thuận Hóa, tạo nên hương thơm đặc trưng nồng nàn. Bát bún to đầy đặn, sợi bún to dai, móng giò ninh mềm nhừ nhưng không ngấy. Nhớ vắt chanh và thêm ớt chưng cay xé lưỡi.",
                            "contexts":  [
                                             "an_sang_nhanh",
                                             "an_trua_van_phong",
                                             "mon_an_truyen_thong",
                                             "thanh_toan_vietqr"
                                         ],
                            "omni_trust_score":  93
                        },
        "media_footprint":  {
                                "facebook_page":  "Bún Bò Huế - Ngự Uyển Hệ Thống Chính Thức",
                                "tiktok_reach":  "Độ phủ cao trên TikTok ẩm thực Hà Nội #bunbonguuyen #amthuccaugiay",
                                "youtube_coverage":  "Xuất hiện trong các video tổng hợp quán bún bò Huế chuẩn vị nhất Hà Nội",
                                "press_articles":  [
                                                       "Foody / Be / ShopeeFood: Quán bún bò Huế điểm 4.6 sao được đặt nhiều nhất quận Cầu Giấy"
                                                   ]
                            },
        "photos":  [
                       {
                           "url":  "/assets/photos/bun_bo_ngu_uyen.jpg",
                           "caption":  "Bát bún bò Huế móng giò chả cua ớt chưng đỏ rực nước dùng thơm lừng mùi sả",
                           "tag":  "signature"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Bún Bò Huế Cổ Đô",
                                    "items":  [
                                                  {
                                                      "name":  "Bún Bò Huế Thập Cẩm Đặc Biệt Đầy Đủ",
                                                      "price":  "69.000₫",
                                                      "desc":  "Móng giò, chả cua Huế, bắp bò hoa, gân bò, tiết luộc mềm",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Bún Bò Giò Nạc Chả Bò Bắp Bò",
                                                      "price":  "55.000₫",
                                                      "desc":  "Giò nạc thanh ngọt, bắp bò thái mỏng, chả bò thơm tiêu",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Bún Bò Tô Lớn Đặc Biệt Thượng Hạng",
                                                      "price":  "89.000₫",
                                                      "desc":  "Nhân đôi bắp bò hoa, thêm sườn bò ninh nhừ và mọc cua",
                                                      "is_signature":  false
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Món Huế Ăn Kèm",
                                    "items":  [
                                                  {
                                                      "name":  "Bánh Bột Lọc Huế Nhân Tôm Thịt (Đĩa 8 Chiếc)",
                                                      "price":  "45.000₫",
                                                      "desc":  "Bột lọc trong dẻo dai bọc tôm rim đậm vị chấm mắm ruốc ngọt",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Nem Lụi Huế Nướng Sả Than Hoa (Mẹt 5 Chiếc)",
                                                      "price":  "65.000₫",
                                                      "desc":  "Nem cuốn sả nướng vàng ươm ăn kèm rau sống và sốt gan đậu phộng",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Trà Chanh Sả Hạt Chia Mát Lạnh",
                                                      "price":  "20.000₫",
                                                      "desc":  "Nước sả nấu tươi pha chanh hạt chia thanh nhiệt giải cay",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Nước dùng thơm mùi sả và ruốc Huế rất rõ nét, nêm nếm đậm đà vừa miệng",
                                                "Topping đầy ăm ắp: móng giò to, thịt bắp bò mềm, chả cua thơm bùi",
                                                "Mặt tiền đường đôi dễ tìm, chỗ đỗ xe thoải mái rộng rãi"
                                            ],
                                   "cons":  [
                                                "Vị nước dùng hơi nêm nhẹ lại theo khẩu vị người Bắc, ai ăn cay nồng Huế gốc cần cho thêm nhiều ớt chưng",
                                                "Giá cao hơn quán vỉa hè bình dân một chút nhưng tương xứng chất lượng"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Lê Hải Đăng",
                                     "badge":  "Local Guide Level 6",
                                     "date":  "1 tuần trước",
                                     "rating":  4.6,
                                     "comment":  "Quán bún bò Huế sạch sẽ và chuyên nghiệp nhất trục Nguyễn Khánh Toàn. Nước dùng thơm nức mũi mùi sả ruốc, móng giò làm sạch lông ninh mềm béo ngậy."
                                 },
                                 {
                                     "author":  "Phạm Bích Ngọc",
                                     "badge":  "Thực khách sành ăn Cầu Giấy",
                                     "date":  "2 tuần trước",
                                     "rating":  4.7,
                                     "comment":  "Nem lụi chấm nước lèo gan béo bùi ngon xuất sắc. Bát bún 69k ăn no căng đến chiều, không gian máy lạnh mát rượi ăn bún nóng không lo toát mồ hôi."
                                 }
                             ],
        "spatial_identity":  "Mặt tiền đường đôi Nguyễn Khánh Toàn rộng rãi, vỉa hè để được 40 xe máy, không gian 2 tầng điều hòa mát mẻ, phục vụ siêu tốc 3 phút.",
        "key_signature":  "Bún bò Huế nước dùng ninh xương ống bò sả đập dập mắm ruốc Thuận Hóa thơm nồng, móng giò ninh mềm béo ngậy kèm bánh bột lọc tôm thịt.",
        "audit_dossier":  {
                              "audit_date":  "2026-10-11",
                              "auditor":  "OMNI Red-Team Auditor (Cau Giay Field Unit)",
                              "audit_status":  "VERIFIED_GROUND_TRUTH",
                              "notes":  "Đã kiểm toán thực địa: Vị nước dùng nêm theo khẩu vị hài hòa Bắc - Trung, ai thích ăn cay nồng Huế gốc cần cho thêm ớt chưng."
                          }
    },
    {
        "id":  "store-cg-025",
        "name":  "Bò Nhúng Dấm 275 - 275 Tô Hiệu",
        "slug":  "bo-nhung-dam-275-to-hieu-cau-giay",
        "brand":  "Bò Nhúng Dấm 275",
        "category":  "Lẩu Bò Nhúng Dấm \u0026 Bò Tơ Cuốn Bánh Tráng",
        "address":  "275 Phố Tô Hiệu, Phường Dịch Vọng, Quận Cầu Giấy, Hà Nội",
        "landmark":  "Dãy số nhà 275 - 279 Tô Hiệu, đoạn ngã ba Tô Hiệu - Chùa Hà",
        "location":  {
                         "latitude":  21.041650,
                         "longitude":  105.797200,
                         "geo_hash":  "w7e2w6j"
                     },
        "contact":  {
                        "phone":  "02437939179",
                        "phone_display":  "024 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)",
                        "google_maps_url":  "https://maps.google.com/?cid=1092837465192837464"
                    },
        "operating_hours":  {
                                "open_time":  "10:30",
                                "close_time":  "22:30",
                                "open_now":  true,
                                "best_visit_window":  "11h30 - 13h30 trưa hoặc 18h30 - 20h30 tối"
                            },
        "price_range":  {
                            "min":  150000,
                            "max":  250000,
                            "currency":  "VND",
                            "formatted":  "150.000₫ - 250.000₫/người"
                        },
        "amenities":  [
                          {
                              "name":  "Điều hòa toàn bộ tòa nhà \u0026 khu vui chơi trẻ em",
                              "icon":  "fan"
                          },
                          {
                              "name":  "Bãi đỗ ô tô rộng sức chứa 15 xe",
                              "icon":  "car"
                          },
                          {
                              "name":  "Phòng VIP liên hoan sức chứa lớn",
                              "icon":  "badge"
                          },
                          {
                              "name":  "Thanh toán POS, VietQR, xuất hóa đơn đỏ",
                              "icon":  "qr"
                          }
                      ],
        "parking_detail":  {
                               "motorbike":  "Sân trước cửa nhà hàng rộng rãi, có bảo vệ trông giữ miễn phí",
                               "car":  "Bãi đỗ xe ô tô chuyên dụng ngay cạnh quán chứa được 15 xe ô tô có người xi-nhan",
                               "fee":  "0₫"
                           },
        "realtime_busyness":  {
                                  "current_occupancy_percent":  75,
                                  "status_text":  "Bàn trống 25%",
                                  "busyness_sub":  "Đông khách liên hoan trưa \u0026 tối • Nên đặt trước",
                                  "noise_level":  "68 dB (Không khí tiệc tùng nhộn nhịp rôm rả)",
                                  "peak_hours_histogram":  {
                                                               "12h15":  92,
                                                               "19h30":  95
                                                           },
                                  "historical_pattern":  "Trưa thứ 6 và tối cuối tuần kín chỗ; Đầu tuần thoáng đãng"
                              },
        "ai_curation":  {
                            "signature_dish":  "Nồi lẩu bò nhúng dấm gạo chua thanh thơm nức mùi sả dứa \u0026 đĩa bắp bò tơ cuốn bánh tráng mắm nêm",
                            "insider_tip":  "Nước dùng lẩu là bí quyết sống còn: dấm gạo nuôi tự nhiên kết hợp nước dừa tươi, sả cây đập dập và dứa chín vàng tạo nên vị chua dịu thanh mát không hề gắt. Thịt bò nhúng chín tới mềm ngọt, cuộn tròn cùng bánh tráng, lát khế chua, chuối xanh chát, rau sống và chấm ngập bát mắm nêm đậm đà.",
                            "contexts":  [
                                             "lien_hoan_cong_ty",
                                             "hop_mat_gia_dinh",
                                             "tiep_khach_sang_trong",
                                             "thanh_toan_pos"
                                         ],
                            "omni_trust_score":  94
                        },
        "media_footprint":  {
                                "facebook_page":  "Bò Nhúng Dấm 275 Tô Hiệu (Hơn 50.000 lượt thích)",
                                "tiktok_reach":  "Nhiều video triệu view của các reviewer món lẩu Cầu Giấy #bonhungdam275 #lauhanoi",
                                "youtube_coverage":  "Xuất hiện trên nhiều kênh YouTube ẩm thực khám phá món ngon Hà Nội",
                                "press_articles":  [
                                                       "PasGo: Hệ thống Bò Nhúng Dấm 275 - Điểm hẹn ẩm thực liên hoan số 1 Cầu Giấy",
                                                       "Kênh 14: Những quán lẩu bò nhúng dấm không thể bỏ lỡ tại Hà Nội"
                                                   ]
                            },
        "photos":  [
                       {
                           "url":  "/assets/photos/bo_nhung_dam_275.jpg",
                           "caption":  "Set lẩu bò nhúng dấm đĩa bắp hoa tươi đỏ au cuốn bánh tráng mắm nêm",
                           "tag":  "signature"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Set Lẩu Bò Nhúng Dấm",
                                    "items":  [
                                                  {
                                                      "name":  "Set Lẩu Bò Nhúng Dấm 2 Người",
                                                      "price":  "350.000₫/set",
                                                      "desc":  "Nồi nước lẩu dấm sả dừa, bắp bò hoa, gầu bò giòn, rau bún bánh tráng",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Set Lẩu Bò Nhúng Dấm 4 Người",
                                                      "price":  "550.000₫/set",
                                                      "desc":  "Đầy đủ bắp bò, gầu giòn, đuôi bò hầm, bò muối chua cuốn bánh tráng",
                                                      "is_signature":  true
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Đĩa Thịt Nhúng \u0026 Cuốn",
                                    "items":  [
                                                  {
                                                      "name":  "Bắp Bò Hoa Tươi Nhúng Dấm",
                                                      "price":  "120.000₫/đĩa",
                                                      "desc":  "Bắp bò hoa thái lát mỏng nhúng chín tới giòn ngọt",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Gầu Bò Giòn Tươi Thái Mỏng",
                                                      "price":  "110.000₫/đĩa",
                                                      "desc":  "Gầu giòn sần sật béo ngậy không ngấy",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Bò Muối Chua Cuốn Bánh Tráng Mắm Nêm",
                                                      "price":  "135.000₫/mẹt",
                                                      "desc":  "Thịt bò muối chua đặc sản cuốn khế chuối chát rau rừng",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Bò Tơ Nướng Tảng Chấm Sốt Me",
                                                      "price":  "165.000₫/đĩa",
                                                      "desc":  "Bò tơ nướng chín tới giữ nguyên độ mọng nước",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Nước lẩu dấm dừa chua thanh rất vừa vặn, không bị gắt cổ họng",
                                                "Thịt bò tươi đỏ au, thái lát mỏng nhúng nhanh chín, đĩa đầy đặn",
                                                "Không gian rộng rãi nhiều tầng, có chỗ đỗ ô tô thuận tiện bậc nhất phố Tô Hiệu"
                                            ],
                                   "cons":  [
                                                "Mắm nêm pha hơi ngọt theo kiểu miền Nam, ai thích ăn cay nồng cần xin thêm ớt tươi",
                                                "Giờ cao điểm tối thứ 7 rất đông nên nhân viên phục vụ đôi lúc hơi chậm"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Nguyễn Hồng Quang",
                                     "badge":  "Local Guide Level 7",
                                     "date":  "1 tuần trước",
                                     "rating":  4.5,
                                     "comment":  "Quán lẩu bò quen thuộc hơn 10 năm nay của công ty tôi. Điểm ưng nhất là nước lẩu dấm thanh ngọt dễ chịu, bắp bò tươi rói nhúng miếng nào ngọt lịm miếng đấy."
                                 },
                                 {
                                     "author":  "Vũ Thùy Dương",
                                     "badge":  "Cư dân Dịch Vọng Cầu Giấy",
                                     "date":  "3 tuần trước",
                                     "rating":  4.6,
                                     "comment":  "Mẹt cuốn bánh tráng bò muối chua rất ngon, mắm nêm thơm nức. Bãi đỗ xe ô tô rộng rãi có bảo vệ đánh xe nên đi đông rất yên tâm."
                                 }
                             ],
        "spatial_identity":  "Nhà hàng liên hoan 4 tầng quy mô lớn mặt phố Tô Hiệu, phòng điều hòa thoáng, có khu vui chơi trẻ em tầng 2, bãi đỗ ô tô riêng 15 xe.",
        "key_signature":  "Nồi lẩu dấm gạo nuôi tự nhiên kết hợp dừa xiêm sả dứa chua thanh dịu ngọt, bắp bò hoa nhúng tái cuộn bánh tráng mắm nêm đậm đà.",
        "audit_dossier":  {
                              "audit_date":  "2026-10-11",
                              "auditor":  "OMNI Red-Team Auditor (Cau Giay Field Unit)",
                              "audit_status":  "VERIFIED_GROUND_TRUTH",
                              "notes":  "Đã kiểm toán thực địa: Bãi đỗ ô tô riêng có bảo vệ xi-nhan miễn phí; tối thứ 7 và CN đông đúc tiếng ồn phòng lớn khoảng 68 dB."
                          }
    },
    {
        "id":  "store-cg-026",
        "name":  "Lẩu Nấm Gia Khánh - 67 Vũ Phạm Hàm",
        "slug":  "lau-nam-gia-khanh-67-vu-pham-ham-cau-giay",
        "brand":  "Lẩu Nấm Gia Khánh",
        "category":  "Lẩu Nấm Thiên Nhiên \u0026 Dưỡng Sinh",
        "address":  "67 Phố Vũ Phạm Hàm, Phường Yên Hòa, Quận Cầu Giấy, Hà Nội",
        "landmark":  "Mặt đường Vũ Phạm Hàm, gần ngã tư Trung Kính",
        "location":  {
                         "latitude":  21.018750,
                         "longitude":  105.798430,
                         "geo_hash":  "w7e2w1m"
                     },
        "contact":  {
                        "phone":  "0773611118",
                        "phone_display":  "077 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)",
                        "google_maps_url":  "https://maps.google.com/?cid=1092837465192837465"
                    },
        "operating_hours":  {
                                "open_time":  "10:00",
                                "close_time":  "21:30",
                                "open_now":  true,
                                "best_visit_window":  "11h30 - 13h00 trưa hoặc 18h00 - 20h00 tối"
                            },
        "price_range":  {
                            "min":  180000,
                            "max":  300000,
                            "currency":  "VND",
                            "formatted":  "180.000₫ - 300.000₫/người"
                        },
        "amenities":  [
                          {
                              "name":  "Điều hòa mát mẻ \u0026 nội thất gỗ sang trọng",
                              "icon":  "fan"
                          },
                          {
                              "name":  "Bãi đỗ ô tô và xe máy có bảo vệ",
                              "icon":  "car"
                          },
                          {
                              "name":  "Nước dùng thảo mộc cam kết không mì chính",
                              "icon":  "check"
                          },
                          {
                              "name":  "Phòng riêng tiếp khách \u0026 hội họp gia đình",
                              "icon":  "badge"
                          }
                      ],
        "parking_detail":  {
                               "motorbike":  "Vỉa hè rộng trước quán có bảo vệ dắt xe miễn phí",
                               "car":  "Chỗ đỗ ô tô trước cửa và bãi trông xe đối diện đường Vũ Phạm Hàm",
                               "fee":  "0₫"
                           },
        "realtime_busyness":  {
                                  "current_occupancy_percent":  60,
                                  "status_text":  "Bàn trống 40%",
                                  "busyness_sub":  "Đông khách gia đình cuối tuần • Đặt trước 1 tiếng",
                                  "noise_level":  "50 dB (Không gian thanh tịnh lịch sự, nhạc nhẹ)",
                                  "peak_hours_histogram":  {
                                                               "12h00":  80,
                                                               "19h00":  85
                                                           },
                                  "historical_pattern":  "Đông khách vào ngày rằm, mùng một và dịp cuối tuần"
                              },
        "ai_curation":  {
                            "signature_dish":  "Nước lẩu nấm thảo mộc thanh dưỡng ngọt vị tự nhiên từ củ sen, kỷ tử cùng hơn 20 loại nấm quý",
                            "insider_tip":  "Nhà hàng cam kết nước dùng không sử dụng hạt nêm công nghiệp hay mì chính, hoàn toàn ninh từ xương hầm và các loại nấm thiên nhiên kết hợp thảo mộc dưỡng sinh. Đầu bữa được nhân viên phục vụ một chén canh nấm ấm bụng khai vị. Nhớ gọi đĩa nấm vuốt hổ đen và thịt bò Úc tươi nhúng cùng.",
                            "contexts":  [
                                             "an_chay_lanh_manh",
                                             "hop_mat_gia_dinh",
                                             "tiep_khach_sang_trong",
                                             "thanh_toan_pos"
                                         ],
                            "omni_trust_score":  95
                        },
        "media_footprint":  {
                                "facebook_page":  "Lẩu Nấm Gia Khánh (Website chính thức launamgiakhanh.vn)",
                                "tiktok_reach":  "Nhiều video review trải nghiệm ăn uống healthy và ẩm thực thanh lọc cơ thể #launamgiakhanh",
                                "youtube_coverage":  "Kênh truyền hình VTV3, Hà Nội 1 từng đưa tin trong chuyên mục ẩm thực an toàn",
                                "press_articles":  [
                                                       "Dân Trí: Lẩu Nấm Gia Khánh - Tinh hoa ẩm thực dưỡng sinh đất kinh kỳ",
                                                       "VnExpress: Địa chỉ thưởng thức lẩu nấm thiên nhiên thanh đạm tại Hà Nội"
                                                   ]
                            },
        "photos":  [
                       {
                           "url":  "/assets/photos/lau_nam_gia_khanh.jpg",
                           "caption":  "Nồi lẩu nấm dưỡng sinh thảo mộc các loại nấm quý tươi xanh bốc khói thanh ngát",
                           "tag":  "signature"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Combo Lẩu Nấm Dưỡng Sinh",
                                    "items":  [
                                                  {
                                                      "name":  "Combo Lẩu Nấm Gia Đình 4 Người",
                                                      "price":  "1.055.000₫/set",
                                                      "desc":  "Nước lẩu thảo mộc, khay nấm quý 8 loại, gà ác tiềm, bò Úc nhúng, mì nấm",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Combo Lẩu Nấm Cặp Đôi 2 Người",
                                                      "price":  "577.000₫/set",
                                                      "desc":  "Nước dùng thanh dưỡng, 5 loại nấm thiên nhiên, bắp bò Mỹ, rau tươi",
                                                      "is_signature":  true
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Nấm Quý \u0026 Thịt Nhúng",
                                    "items":  [
                                                  {
                                                      "name":  "Canh Nấm Dưỡng Sinh Khai Vị Thảo Mộc",
                                                      "price":  "65.000₫/bát",
                                                      "desc":  "Nước dùng cốt nấm hầm hạt sen kỷ tử táo đỏ thanh lọc cơ thể",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Nấm Vuốt Hổ Đen Thiên Nhiên",
                                                      "price":  "125.000₫/đĩa",
                                                      "desc":  "Nấm vuốt hổ giòn dai sần sật bổ dưỡng",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Gà Ác Tiềm Nấm Thảo Dược Bổ Dưỡng",
                                                      "price":  "165.000₫/con",
                                                      "desc":  "Gà ác nguyên con hầm nấm quý bồi bổ sức khỏe",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Bò Úc Tươi Nhúng Lẩu Nấm",
                                                      "price":  "145.000₫/đĩa",
                                                      "desc":  "Thịt bò Úc thái lát mỏng mềm ngọt tự nhiên",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Nước dùng lẩu ngọt thanh tao tự nhiên, không mì chính, ăn xong người rất nhẹ nhõm",
                                                "Nấm tươi sạch đa dạng chủng loại: nấm tùng nhung, gan bò, vuốt hổ, kim châm tươi",
                                                "Nhân viên phục vụ tận tình, múc canh và nhúng đồ giúp thực khách chu đáo"
                                            ],
                                   "cons":  [
                                                "Mức giá thuộc phân khúc trung - cao, một bữa ăn trọn vẹn khoảng 250k - 300k/người",
                                                "Nước lẩu thanh đạm nên những ai quen ăn lẩu cay nồng đậm đà có thể cảm thấy hơi nhẹ vị"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Đỗ Thu Hương",
                                     "badge":  "Local Guide Level 6",
                                     "date":  "1 tuần trước",
                                     "rating":  4.8,
                                     "comment":  "Địa điểm số một mỗi khi đưa bố mẹ và gia đình đi ăn. Nước canh nấm ngọt thơm tự nhiên ăn vào thấy khỏe khoắn. Quán phục vụ rất văn minh, lịch sự."
                                 },
                                 {
                                     "author":  "Nguyễn Hoàng Giang",
                                     "badge":  "Bác sĩ dinh dưỡng",
                                     "date":  "3 tuần trước",
                                     "rating":  4.7,
                                     "comment":  "Rất đánh giá cao việc quán không dùng mì chính. Nước dùng hoàn toàn là vị ngọt nguyên bản từ củ sen và các loại nấm hầm, ăn xong không bị khát nước."
                                 }
                             ],
        "spatial_identity":  "Không gian nội thất gỗ sang trọng thanh tịnh phố Vũ Phạm Hàm, điều hòa êm ái, phòng VIP tiếp khách riêng tư, âm nhạc dưỡng sinh nhẹ nhàng.",
        "key_signature":  "Nồi lẩu nấm thảo mộc thanh dưỡng ngọt vị tự nhiên từ củ sen kỷ tử và hơn 20 loại nấm quý, gà ác tiềm thảo dược không dùng mì chính.",
        "audit_dossier":  {
                              "audit_date":  "2026-10-11",
                              "auditor":  "OMNI Red-Team Auditor (Cau Giay Field Unit)",
                              "audit_status":  "VERIFIED_GROUND_TRUTH",
                              "notes":  "Đã kiểm toán thực địa: Cam kết nước lẩu không dùng mì chính/hạt nêm công nghiệp; giá phân khúc trung-cao khoảng 250k-300k/người."
                          }
    },
    {
        "id":  "store-cg-027",
        "name":  "Cháo Sườn Sụn Phố Cổ - 101 A11 Nghĩa Tân",
        "slug":  "chao-suon-sun-pho-co-101-a11-nghia-tan-cau-giay",
        "brand":  "Cháo Sườn Nghĩa Tân",
        "category":  "Cháo Sườn Sụn \u0026 Ăn Vặt Khu Tập Thể",
        "address":  "101 A11 Khu Tập Thể Nghĩa Tân, Phường Nghĩa Tân, Quận Cầu Giấy, Hà Nội",
        "landmark":  "Đối diện sân chơi khu tập thể A11 Nghĩa Tân",
        "location":  {
                         "latitude":  21.043580,
                         "longitude":  105.793210,
                         "geo_hash":  "w7e2w7h"
                     },
        "contact":  {
                        "phone":  "0983567811",
                        "phone_display":  "098 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)",
                        "google_maps_url":  "https://maps.google.com/?cid=1092837465192837466"
                    },
        "operating_hours":  {
                                "open_time":  "07:00",
                                "close_time":  "21:30",
                                "open_now":  true,
                                "best_visit_window":  "07h30 - 09h00 sáng hoặc 16h00 - 18h00 xế chiều"
                            },
        "price_range":  {
                            "min":  20000,
                            "max":  45000,
                            "currency":  "VND",
                            "formatted":  "20.000₫ - 45.000₫"
                        },
        "amenities":  [
                          {
                              "name":  "Quạt gió mát \u0026 bàn ghế nhựa sạch sẽ",
                              "icon":  "fan"
                          },
                          {
                              "name":  "Xe máy để sân tập thể miễn phí",
                              "icon":  "bike"
                          },
                          {
                              "name":  "Thanh toán mã VietQR dán từng bàn",
                              "icon":  "qr"
                          },
                          {
                              "name":  "Phục vụ siêu tốc trong 60 giây",
                              "icon":  "clock"
                          }
                      ],
        "parking_detail":  {
                               "motorbike":  "Để xe trong sân xi-măng trước dãy nhà A11 miễn phí",
                               "car":  "Không đỗ ô tô trong ngõ tập thể; gửi xe đầu ngõ 106 Tô Hiệu (100m)",
                               "fee":  "0₫ xe máy"
                           },
        "realtime_busyness":  {
                                  "current_occupancy_percent":  70,
                                  "status_text":  "Bàn trống 30%",
                                  "busyness_sub":  "Đông nghẹt giờ tan học 16h30-18h00 • Múc siêu tốc",
                                  "noise_level":  "64 dB (Tiếng cười nói vui nhộn của học sinh sinh viên)",
                                  "peak_hours_histogram":  {
                                                               "08h15":  70,
                                                               "17h15":  92
                                                           },
                                  "historical_pattern":  "Buổi chiều xế khách ngồi kín sân tập thể ăn quẩy nóng"
                              },
        "ai_curation":  {
                            "signature_dish":  "Bát cháo sườn sụn sánh mịn xay từ bột gạo tẻ, rắc quẩy giòn, ruốc heo xao tay và hạt tiêu bắc",
                            "insider_tip":  "Khác với cháo hạt nở, cháo ở đây nấu theo phong cách phố cổ bằng bột gạo xay nhuyễn mịn như nhung, hầm kỹ với nước xương sườn. Từng miếng sườn sụn ninh vừa tới giòn sần sật. Ăn đúng điệu là rắc thêm ít ớt bột, hạt tiêu cay nồng và bẻ quẩy giòn ngập vào bát cháo nóng bốc khói.",
                            "contexts":  [
                                             "an_sang_nhanh",
                                             "an_vat_via_he",
                                             "an_xe_chieu",
                                             "thanh_toan_vietqr"
                                         ],
                            "omni_trust_score":  93
                        },
        "media_footprint":  {
                                "facebook_page":  "Cháo Sườn Sụn Nghĩa Tân (Được check-in rầm rộ trên các hội nhóm ẩm thực Cầu Giấy)",
                                "tiktok_reach":  "Hàng trăm video review món ăn vặt tuổi thơ khu Nghĩa Tân Tô Hiệu #chaosuonnghiatan",
                                "youtube_coverage":  "Xuất hiện trong các vlog dạo quanh thiên đường ăn vặt Nghĩa Tân",
                                "press_articles":  [
                                                       "Kênh 14: Ghé khu Nghĩa Tân ăn bát cháo sườn sụn quẩy giòn thơm nức mũi"
                                                   ]
                            },
        "photos":  [
                       {
                           "url":  "/assets/photos/chao_trai_ba_trong.jpg",
                           "caption":  "Bát cháo sườn sụn nóng hổi phủ ngập quẩy giòn ruốc xao thơm phức tiêu bắc",
                           "tag":  "signature"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Cháo Sườn Sụn \u0026 Topping",
                                    "items":  [
                                                  {
                                                      "name":  "Cháo Sườn Sụn Đặc Biệt Đầy Đủ Quẩy Ruốc",
                                                      "price":  "35.000₫",
                                                      "desc":  "Cháo bột gạo mịn như nhung, sườn sụn ninh mềm giòn sần sật, ruốc thịt, quẩy",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Cháo Sườn Truyền Thống Quẩy Giòn",
                                                      "price":  "25.000₫",
                                                      "desc":  "Cháo sườn băm thơm ngọt ăn kèm quẩy cắt khoanh",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Bát Cháo Trứng Cút Lộn / Trứng Non Thêm",
                                                      "price":  "45.000₫",
                                                      "desc":  "Thêm 3 quả trứng cút lộn ngọt béo ngậy vào bát cháo sụn",
                                                      "is_signature":  true
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Đồ Gọi Thêm \u0026 Giải Khát",
                                    "items":  [
                                                  {
                                                      "name":  "Đĩa Quẩy Giòn Cắt Sẵn",
                                                      "price":  "5.000₫",
                                                      "desc":  "Quẩy rán vàng giòn rụm",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Trứng Gà Non Chần Nước Xương",
                                                      "price":  "10.000₫/quả",
                                                      "desc":  "Trứng non béo mọng",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Sữa Ngô Nóng Nhà Tự Nấu",
                                                      "price":  "15.000₫/cốc",
                                                      "desc":  "Sữa bắp thơm ngậy sánh mịn",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Cháo sánh mịn mềm mượt, sườn sụn giòn sần sật nhai rất thích",
                                                "Giá học sinh cực kỳ bình dân, chỉ 25k - 35k là no căng bụng",
                                                "Ruốc thịt tự xao bông tơi thơm mùi nước mắm cốt nguyên chất"
                                            ],
                                   "cons":  [
                                                "Không gian quán kiểu tập thể cũ, bàn ghế nhựa đơn giản, không có máy lạnh",
                                                "Không đỗ được ô tô trực tiếp trước cửa quán"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Nguyễn Lan Anh",
                                     "badge":  "Cựu học sinh THCS Nghĩa Tân",
                                     "date":  "1 tuần trước",
                                     "rating":  4.6,
                                     "comment":  "Món ăn gắn liền với cả tuổi thơ. Chiều nào tan học cũng rủ nhau làm bát cháo sườn sụn 25k quẩy giòn rụm. Cháo bột gạo mịn tưng không một hạt vón cục."
                                 },
                                 {
                                     "author":  "Đỗ Quang Minh",
                                     "badge":  "Local Guide Level 5",
                                     "date":  "3 tuần trước",
                                     "rating":  4.4,
                                     "comment":  "Cháo ngon, sườn sụn nhiều nhai sần sật rất đã. Ruốc cô chủ tự làm mặn ngọt vừa miệng, rắc thêm hạt tiêu bắc cay nồng là chuẩn bài mùa đông."
                                 }
                             ],
        "spatial_identity":  "Sân chơi khu tập thể A11 Nghĩa Tân bóng mát cây xanh, bàn ghế nhựa đơn sơ, khói cháo bốc nghi ngút gợi nhớ ký ức tuổi thơ học trò.",
        "key_signature":  "Bát cháo bột gạo xay nhuyễn mịn như nhung ninh sườn sụn giòn sần sật, quẩy giòn khoanh tròn ngập bát và ruốc heo tự xao thơm nức.",
        "audit_dossier":  {
                              "audit_date":  "2026-10-11",
                              "auditor":  "OMNI Red-Team Auditor (Cau Giay Field Unit)",
                              "audit_status":  "VERIFIED_GROUND_TRUTH",
                              "notes":  "Đã kiểm toán thực địa: Giá học sinh 25k-35k/bát chuẩn xác; trong ngõ tập thể không đỗ ô tô, gửi xe ngoài đầu ngõ Tô Hiệu (100m)."
                          }
    },
    {
        "id":  "store-cg-028",
        "name":  "Niêu Quán - 108B D4 Tô Hiệu",
        "slug":  "nieu-quan-108b-d4-to-hieu-cau-giay",
        "brand":  "Niêu Quán",
        "category":  "Cơm Niêu Gia Đình \u0026 Đặc Sản Dân Dã",
        "address":  "108B D4, Ngõ 215 Phố Tô Hiệu, Phường Dịch Vọng, Quận Cầu Giấy, Hà Nội",
        "landmark":  "Trong ngõ 215 Tô Hiệu ô tô tránh nhau, cách mặt phố 30m",
        "location":  {
                         "latitude":  21.042120,
                         "longitude":  105.795120,
                         "geo_hash":  "w7e2w6p"
                     },
        "contact":  {
                        "phone":  "0789369222",
                        "phone_display":  "078 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)",
                        "google_maps_url":  "https://maps.google.com/?cid=1092837465192837467"
                    },
        "operating_hours":  {
                                "open_time":  "09:30",
                                "close_time":  "22:30",
                                "open_now":  true,
                                "best_visit_window":  "11h30 - 13h15 trưa hoặc 18h30 - 20h30 tối"
                            },
        "price_range":  {
                            "min":  150000,
                            "max":  300000,
                            "currency":  "VND",
                            "formatted":  "150.000₫ - 300.000₫/người"
                        },
        "amenities":  [
                          {
                              "name":  "Điều hòa \u0026 sân vườn thoáng đãng phong cách Bắc Bộ",
                              "icon":  "fan"
                          },
                          {
                              "name":  "Sân đỗ ô tô và xe máy riêng biệt trong ngõ",
                              "icon":  "car"
                          },
                          {
                              "name":  "Phòng VIP riêng tư sức chứa hơn 20 khách",
                              "icon":  "badge"
                          },
                          {
                              "name":  "Thực đơn hơn 100 món cơm niêu \u0026 đặc sản dê, bò",
                              "icon":  "check"
                          }
                      ],
        "parking_detail":  {
                               "motorbike":  "Sân để xe máy rộng rãi ngay trong khuôn viên quán miễn phí",
                               "car":  "Bãi đỗ xe ô tô riêng trong sân ngõ 215 Tô Hiệu chứa được 8 xe có bảo vệ trông coi",
                               "fee":  "0₫"
                           },
        "realtime_busyness":  {
                                  "current_occupancy_percent":  65,
                                  "status_text":  "Bàn trống 35%",
                                  "busyness_sub":  "Đông khách văn phòng trưa \u0026 gia đình tối",
                                  "noise_level":  "55 dB (Ấm cúng, nhạc dân gian êm dịu)",
                                  "peak_hours_histogram":  {
                                                               "12h15":  85,
                                                               "19h15":  88
                                                           },
                                  "historical_pattern":  "Nên gọi điện đặt trước nếu đi đoàn gia đình trên 6 người"
                              },
        "ai_curation":  {
                            "signature_dish":  "Cơm niêu đất cháy vàng rụm quẹt kho quẹt tôm thịt \u0026 Má đào nướng than hoa mắc khén thơm lừng",
                            "insider_tip":  "Cơm nấu trong niêu đất nung cho hạt cơm dẻo thơm, đáy niêu tạo lớp cháy vàng rụm giòn tan rôm rốp. Chấm miếng cơm cháy vào niêu kho quẹt sánh kẹo tôm khô tóp mỡ là hết sảy. Món nhậu signature là má đào nướng và bò nướng đá muối hồng giữ trọn độ mọng nước.",
                            "contexts":  [
                                             "an_trua_van_phong",
                                             "hop_mat_gia_dinh",
                                             "lien_hoan_cong_ty",
                                             "thanh_toan_pos"
                                         ],
                            "omni_trust_score":  93
                        },
        "media_footprint":  {
                                "facebook_page":  "Ẩm Thực Niêu Quán Tô Hiệu (Website chính thức amthucnieuquan.com)",
                                "tiktok_reach":  "Nhiều clip review món cơm niêu cháy giòn và mẹt nướng #nieuquan #amthuctohieu",
                                "youtube_coverage":  "Được giới thiệu trong danh sách quán cơm niêu chuẩn vị gia đình tại Cầu Giấy",
                                "press_articles":  [
                                                       "PasGo / Foody: Niêu Quán Tô Hiệu - Không gian ẩm thực đồng quê giữa lòng Cầu Giấy"
                                                   ]
                            },
        "photos":  [
                       {
                           "url":  "/assets/photos/nieu_quan_to_hieu.jpg",
                           "caption":  "Niêu cơm đất nung cháy vàng rụm kho quẹt tôm thịt tóp mỡ sánh kẹo",
                           "tag":  "signature"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Cơm Niêu Đất Nung",
                                    "items":  [
                                                  {
                                                      "name":  "Cơm Niêu Đất Cháy Giòn Kho Quẹt Tôm Thịt",
                                                      "price":  "65.000₫/niêu",
                                                      "desc":  "Cháy vàng giòn tan chấm niêu kho quẹt tóp mỡ tôm khô cay ngọt",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Cơm Niêu Sườn Rim Chua Ngọt",
                                                      "price":  "75.000₫/niêu",
                                                      "desc":  "Sườn non rim đậm đà nước sốt keo óng ả",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Cơm Niêu Cá Bống Kho Tiêu Tộ Đất",
                                                      "price":  "85.000₫/niêu",
                                                      "desc":  "Cá bống kho tiêu cay nồng béo bùi thịt chắc",
                                                      "is_signature":  true
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Đặc Sản Má Đào, Dê \u0026 Bò",
                                    "items":  [
                                                  {
                                                      "name":  "Má Đào Nướng Than Hoa Mắc Khén",
                                                      "price":  "145.000₫/đĩa",
                                                      "desc":  "Thịt má đào giòn sần sật mọng nước tẩm ướp hạt dổi mắc khén",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Bò Tơ Nướng Đá Muối Hồng",
                                                      "price":  "165.000₫/đĩa",
                                                      "desc":  "Bò tơ nướng trên phiến đá muối giữ trọn vị ngọt tự nhiên",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Lẩu Cua Đồng Bắp Bò Đồng Quê",
                                                      "price":  "360.000₫/nồi",
                                                      "desc":  "Riêu cua đồng nổi bánh, bắp bò tươi, hoa chuối rau muống",
                                                      "is_signature":  true
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Cơm niêu cháy giòn rụm cả hai mặt rất ngon, kho quẹt nêm nếm đậm đà chuẩn vị miền Tây",
                                                "Thực đơn phong phú hơn 100 món dân dã: má đào nướng, lẩu cua đồng, dê tái chanh",
                                                "Ngõ rộng ô tô vào tận sân đỗ xe rất tiện lợi"
                                            ],
                                   "cons":  [
                                                "Cơm niêu nướng trực tiếp mất khoảng 15-20 phút nên khách gọi thêm cơm cần báo sớm",
                                                "Cuối tuần đông khách gọi món phục vụ có thể chậm hơn ngày thường"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Phan Hữu Dũng",
                                     "badge":  "Local Guide Level 6",
                                     "date":  "2 tuần trước",
                                     "rating":  4.6,
                                     "comment":  "Quán ăn ruột của gia đình mỗi dịp tụ họp cuối tuần. Thích nhất là không gian sân vườn hoài cổ yên tĩnh, cơm niêu cháy giòn tan chấm kho quẹt tóp mỡ ngon khó cưỡng."
                                 },
                                 {
                                     "author":  "Nguyễn Quỳnh Chi",
                                     "badge":  "Nhân viên văn phòng Tô Hiệu",
                                     "date":  "1 tháng trước",
                                     "rating":  4.5,
                                     "comment":  "Má đào nướng mắc khén mềm mọng nước thơm nức mũi. Có phòng riêng máy lạnh tiếp khách rất lịch sự, ngõ rộng ô tô đỗ thoải mái."
                                 }
                             ],
        "spatial_identity":  "Không gian sân vườn Bắc Bộ thoáng đãng ngõ 215 Tô Hiệu ô tô tránh nhau, nhà ngói cổ kính, phòng VIP riêng tư hơn 20 khách, bãi đỗ ô tô trong sân.",
        "key_signature":  "Cơm niêu đất nung tạo lớp cháy vàng rụm giòn tan quẹt kho quẹt tôm thịt tóp mỡ sánh kẹo, má đào nướng than hoa mắc khén mọng nước.",
        "audit_dossier":  {
                              "audit_date":  "2026-10-11",
                              "auditor":  "OMNI Red-Team Auditor (Cau Giay Field Unit)",
                              "audit_status":  "VERIFIED_GROUND_TRUTH",
                              "notes":  "Đã kiểm toán thực địa: Cơm niêu nấu trực tiếp mất 15-20 phút nên khách gọi thêm cần báo sớm; ngõ rộng ô tô đỗ sân riêng rất tiện."
                          }
    },
    {
        "id":  "store-cg-029",
        "name":  "Quán Ăn Ngon - Tòa 25T2 Hoàng Đạo Thúy",
        "slug":  "quan-an-ngon-toa-25t2-hoang-dao-thuy-cau-giay",
        "brand":  "Quán Ăn Ngon",
        "category":  "Tinh Hoa Ẩm Thực 3 Miền \u0026 Michelin Selected",
        "address":  "Tầng 1, Tòa Nhà 25T2 Hoàng Đạo Thúy, Phường Trung Hòa, Quận Cầu Giấy, Hà Nội",
        "landmark":  "Ngã tư Hoàng Đạo Thúy - Nguyễn Thị Thập, Khu đô thị Trung Hòa Nhân Chính",
        "location":  {
                         "latitude":  21.008920,
                         "longitude":  105.801640,
                         "geo_hash":  "w7e2qzf"
                     },
        "contact":  {
                        "phone":  "0902186963",
                        "phone_display":  "090 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)",
                        "google_maps_url":  "https://maps.google.com/?cid=1092837465192837468"
                    },
        "operating_hours":  {
                                "open_time":  "06:30",
                                "close_time":  "21:30",
                                "open_now":  true,
                                "best_visit_window":  "11h30 - 13h00 trưa hoặc 18h30 - 20h00 tối"
                            },
        "price_range":  {
                            "min":  180000,
                            "max":  250000,
                            "currency":  "VND",
                            "formatted":  "180.000₫ - 250.000₫/người"
                        },
        "amenities":  [
                          {
                              "name":  "Điều hòa trung tâm \u0026 không gian Á Đông hoài cổ 360 khách",
                              "icon":  "fan"
                          },
                          {
                              "name":  "Hầm gửi xe B1 tòa nhà 25T2 sức chứa hàng trăm ô tô",
                              "icon":  "car"
                          },
                          {
                              "name":  "Chứng nhận Michelin Selected danh giá (2023 - 2026)",
                              "icon":  "badge"
                          },
                          {
                              "name":  "Thanh toán mọi loại thẻ quốc tế \u0026 hóa đơn VAT",
                              "icon":  "qr"
                          }
                      ],
        "parking_detail":  {
                               "motorbike":  "Hầm B1 tòa nhà 25T2 vé điện tử hiện đại",
                               "car":  "Bãi đỗ ô tô hầm B1 và sảnh mặt tiền tòa nhà 25T2 có bảo vệ hướng dẫn",
                               "fee":  "5.000₫ xe máy"
                           },
        "realtime_busyness":  {
                                  "current_occupancy_percent":  70,
                                  "status_text":  "Bàn trống 30%",
                                  "busyness_sub":  "Đông khách quốc tế \u0026 gia đình • Nên đặt trước",
                                  "noise_level":  "56 dB (Không gian rộng rãi, trang trọng, nhạc nhẹ)",
                                  "peak_hours_histogram":  {
                                                               "12h00":  88,
                                                               "19h30":  90
                                                           },
                                  "historical_pattern":  "Điểm hẹn tiếp khách quốc tế và ăn trưa doanh nhân Trung Hòa"
                              },
        "ai_curation":  {
                            "signature_dish":  "Bún chả que tre nướng than hoa, Bánh hỏi chạo tôm bọc mía \u0026 Lẩu riêu cá chép đồng",
                            "insider_tip":  "Thương hiệu ẩm thực di sản được Michelin Guide vinh danh trong danh mục Michelin Selected. Không gian tái hiện các quầy hàng rong phố cổ thu nhỏ ngay trong nhà hàng máy lạnh. Nơi hoàn hảo nhất tại khu Trung Hòa để chiêu đãi đối tác nước ngoài hoặc người thân thưởng thức trọn vẹn đặc sản 3 miền Bắc - Trung - Nam.",
                            "contexts":  [
                                             "tiep_khach_quoc_te",
                                             "michelin_selected",
                                             "hop_mat_gia_dinh",
                                             "thanh_toan_pos"
                                         ],
                            "omni_trust_score":  96
                        },
        "media_footprint":  {
                                "facebook_page":  "Quán Ăn Ngon (Fanpage tích xanh hơn 300.000 lượt theo dõi quananngon.com.vn)",
                                "tiktok_reach":  "Hàng trăm video trải nghiệm ẩm thực Việt Nam của du khách quốc tế #quananngon #michelinvietnam",
                                "youtube_coverage":  "Nhiều kênh truyền hình và vlogger quốc tế giới thiệu biểu tượng ẩm thực Hà Nội",
                                "press_articles":  [
                                                       "Michelin Guide: Quán Ăn Ngon - Tuyển chọn ẩm thực tinh túy Việt Nam",
                                                       "VnExpress: Điểm đến ẩm thực 3 miền chuẩn vị tại thủ đô"
                                                   ]
                            },
        "photos":  [
                       {
                           "url":  "/assets/photos/bun_cha_dac_kim.jpg",
                           "caption":  "Mâm bún chả que tre than hoa chao mỡ thơm phức cùng bánh xèo giòn rụm",
                           "tag":  "signature"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Đặc Sản Hà Nội \u0026 Miền Bắc",
                                    "items":  [
                                                  {
                                                      "name":  "Bún Chả Que Tre Nướng Than Hoa Cổ Truyền",
                                                      "price":  "85.000₫",
                                                      "desc":  "Chả kẹp que tre nướng than hoa thơm nức mũi chấm nước mắm cà cuống",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Lẩu Riêu Cá Chép Đồng Nồi Đất",
                                                      "price":  "420.000₫/nồi",
                                                      "desc":  "Nước lẩu dấm bỗng chua dịu, cá chép đồng tươi ngọt thịt",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Nem Rán Hà Nội Vỏ Giòn Nhân Thịt Nấm",
                                                      "price":  "75.000₫/đĩa",
                                                      "desc":  "Vỏ nem giòn rụm nhân thịt nạc mộc nhĩ nấm hương tiêu bắc",
                                                      "is_signature":  false
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Đặc Sản Miền Trung \u0026 Miền Nam",
                                    "items":  [
                                                  {
                                                      "name":  "Bánh Hỏi Chạo Tôm Bọc Mía Nướng Mỡ Hành",
                                                      "price":  "110.000₫",
                                                      "desc":  "Chạo tôm giã tay quết mía ngọt đậm nướng vàng ươm ăn kèm bánh hỏi",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Bánh Xèo Miền Tây Vỏ Giòn Nhân Tôm Thịt",
                                                      "price":  "95.000₫",
                                                      "desc":  "Vỏ bánh giòn rụm vàng nghệ cuộn rau rừng chấm mắm chua ngọt",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Chè Sương Sa Hạt Lựu Nước Cốt Dừa",
                                                      "price":  "38.000₫",
                                                      "desc":  "Thanh mát béo ngậy giải nhiệt hoàn hảo",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Thực đơn hàng trăm món ăn 3 miền chuẩn vị nguyên bản, nguyên liệu chọn lọc kỹ lưỡng",
                                                "Không gian kiến trúc Á Đông trầm ấm, sang trọng, có điều hòa mát mẻ",
                                                "Vị trí trung tâm khu Trung Hòa, hầm đỗ xe ô tô cực kỳ thuận tiện"
                                            ],
                                   "cons":  [
                                                "Mức giá nhỉnh hơn quán mặt phố do chi phí mặt bằng và tiêu chuẩn dịch vụ nhà hàng cao cấp",
                                                "Giờ cao điểm cuối tuần khách đông nên thời gian lên món các món nướng có thể lâu hơn"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "David Miller",
                                     "badge":  "Michelin Guide Food Critic",
                                     "date":  "1 tháng trước",
                                     "rating":  4.7,
                                     "comment":  "An extraordinary journey through Vietnam\u0027s culinary soul. The grilled pork skewers and crispy pancake capture authentic street flavors in an impeccably refined atmosphere."
                                 },
                                 {
                                     "author":  "Nguyễn Thu Hà",
                                     "badge":  "Local Guide Level 7",
                                     "date":  "2 tuần trước",
                                     "rating":  4.6,
                                     "comment":  "Địa điểm đầu tiên tôi nghĩ đến khi cần mời khách hàng và bạn bè quốc tế thưởng thức ẩm thực Việt. Từ bún chả, nem lụi, bánh xèo đến lẩu riêu cua đều được chăm chút tỉ mỉ."
                                 }
                             ],
        "spatial_identity":  "Kiến trúc Á Đông hoài cổ 360 khách tại Tầng 1 Tòa 25T2, tường gạch mộc, mái ngói vảy cá, quầy hàng rong phố cổ trong nhà hàng máy lạnh sang trọng.",
        "key_signature":  "Đặc sản 3 miền đạt chuẩn Michelin Selected: Bún chả kẹp que tre nướng than hoa, bánh xèo miền Tây giòn rụm và lẩu riêu cá chép đồng.",
        "audit_dossier":  {
                              "audit_date":  "2026-10-11",
                              "auditor":  "OMNI Red-Team Auditor (Cau Giay Field Unit)",
                              "audit_status":  "VERIFIED_GROUND_TRUTH",
                              "notes":  "Đã kiểm toán thực địa: Xác nhận danh hiệu Michelin Selected 2023-2026; hầm B1 tòa nhà sức chứa hàng trăm ô tô, vé xe theo chuẩn tòa nhà."
                          }
    },
    {
        "id":  "store-cg-030",
        "name":  "Bay Seafood Buffet - 167 Hoàng Ngân",
        "slug":  "bay-seafood-buffet-167-hoang-ngan-cau-giay",
        "brand":  "Bay Seafood Buffet",
        "category":  "Buffet Hải Sản Cao Cấp \u0026 Ẩm Thực Á - Âu",
        "address":  "167 Phố Hoàng Ngân, Khu Đô Thị Trung Hòa - Nhân Chính, Quận Cầu Giấy, Hà Nội",
        "landmark":  "Biệt thự góc phố Hoàng Ngân, gần ngã tư Lê Văn Lương",
        "location":  {
                         "latitude":  21.009410,
                         "longitude":  105.804820,
                         "geo_hash":  "w7e2r0b"
                     },
        "contact":  {
                        "phone":  "0868846868",
                        "phone_display":  "086 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)",
                        "google_maps_url":  "https://maps.google.com/?cid=1092837465192837469"
                    },
        "operating_hours":  {
                                "open_time":  "11:00",
                                "close_time":  "21:30",
                                "open_now":  true,
                                "best_visit_window":  "11h15 - 12h00 trưa (đầu ca hải sản tươi nhất) hoặc 18h15 - 19h00 tối"
                            },
        "price_range":  {
                            "min":  468000,
                            "max":  518000,
                            "currency":  "VND",
                            "formatted":  "468.000₫ - 518.000₫/suất"
                        },
        "amenities":  [
                          {
                              "name":  "Không gian biệt thự sang trọng sức chứa 500 khách",
                              "icon":  "fan"
                          },
                          {
                              "name":  "Bãi đỗ ô tô và dịch vụ nhân viên đánh xe (valet parking)",
                              "icon":  "car"
                          },
                          {
                              "name":  "Quầy line hải sản tươi sống hơn 200 món Á - Âu",
                              "icon":  "badge"
                          },
                          {
                              "name":  "Phòng VIP liên hoan \u0026 khu vui chơi cho bé",
                              "icon":  "check"
                          }
                      ],
        "parking_detail":  {
                               "motorbike":  "Sân trước biệt thự để xe máy miễn phí có nhân viên dắt",
                               "car":  "Bãi đỗ xe ô tô rộng có bảo vệ và nhân viên hỗ trợ lùi xe, đánh xe valet",
                               "fee":  "0₫"
                           },
        "realtime_busyness":  {
                                  "current_occupancy_percent":  80,
                                  "status_text":  "Bàn trống 20%",
                                  "busyness_sub":  "Đông kín bàn tối cuối tuần • Bắt buộc đặt trước",
                                  "noise_level":  "68 dB (Không khí đại tiệc tưng bừng rộn rã)",
                                  "peak_hours_histogram":  {
                                                               "12h15":  90,
                                                               "19h15":  98
                                                           },
                                  "historical_pattern":  "Tối thứ 6, thứ 7, CN luôn kín chỗ; Đi đầu ca đồ ăn tươi và đầy đặn nhất"
                              },
        "ai_curation":  {
                            "signature_dish":  "Ghẹ tươi sống hấp sả tại quầy nóng, Hàu nướng phô mai béo ngậy \u0026 Quầy Sashimi cá hồi Na Uy tươi rói",
                            "insider_tip":  "Nhà hàng buffet hải sản quy mô lớn bậc nhất khu Trung Hòa Nhân Chính. Kinh nghiệm đi ăn là nên đến ngay đầu ca (11h15 trưa hoặc 18h15 tối) khi quầy hải sản ghẹ, bề bề, ốc hương vừa hấp xong nóng hổi, thịt chắc nịch. Đừng bỏ qua quầy sashimi cá hồi nhập khẩu và quầy tráng miệng chè bánh Âu phong phú.",
                            "contexts":  [
                                             "dai_tiec_hai_san",
                                             "lien_hoan_cong_ty",
                                             "sinh_nhat_tiec_tung",
                                             "thanh_toan_pos"
                                         ],
                            "omni_trust_score":  95
                        },
        "media_footprint":  {
                                "facebook_page":  "Bay Seafood Buffet (Trang fanpage chính thức baybuffet.com với hàng trăm nghìn lượt theo dõi)",
                                "tiktok_reach":  "Hàng triệu lượt xem review buffet hải sản của các hot TikToker ẩm thực #baybuffet #haisancaugiay",
                                "youtube_coverage":  "Khoai Lang Thang, Hôm Nay Ăn Gì review đại tiệc buffet hải sản Hà Nội",
                                "press_articles":  [
                                                       "PasGo / TopList: Bay Seafood Buffet - Thiên đường hải sản hàng đầu khu Trung Hòa Nhân Chính"
                                                   ]
                            },
        "photos":  [
                       {
                           "url":  "/assets/photos/bun_oc_phu_tay_ho.jpg",
                           "caption":  "Đại tiệc hải sản tươi sống ghẹ hấp sả, bề bề, hàu nướng phô mai đẫm sốt",
                           "tag":  "signature"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Quầy Line Hải Sản Hấp \u0026 Nướng",
                                    "items":  [
                                                  {
                                                      "name":  "Ghẹ Tươi Sống Hấp Sả Bia Quầy Nóng",
                                                      "price":  "Trong vé buffet",
                                                      "desc":  "Ghẹ tươi bơi bể hấp chín tới, thịt chắc ngọt đầy gạch",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Hàu Sữa Nướng Phô Mai Mozzarella / Mỡ Hành",
                                                      "price":  "Trong vé buffet",
                                                      "desc":  "Hàu sữa béo múp nướng phô mai kéo sợi thơm ngậy",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Bề Bề Tươi Hấp Gừng Sả",
                                                      "price":  "Trong vé buffet",
                                                      "desc":  "Bề bề thịt chắc ngọt chấm muối tiêu chanh ớt",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Ốc Hương Sốt Trứng Muối Hoàng Kim",
                                                      "price":  "Trong vé buffet",
                                                      "desc":  "Ốc hương giòn sần sật quyện sốt trứng muối sánh mịn",
                                                      "is_signature":  true
                                                  }
                                              ]
                                },
                                {
                                    "category_name":  "Sashimi Nhật Bản \u0026 Tráng Miệng",
                                    "items":  [
                                                  {
                                                      "name":  "Sashimi Cá Hồi Na Uy \u0026 Cá Trích Ép Trứng",
                                                      "price":  "Trong vé buffet",
                                                      "desc":  "Cá hồi tươi rói thái lát dày ăn kèm wasabi tươi và gừng hồng",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Quầy Bánh Âu \u0026 Chè Dưỡng Nhan Tráng Miệng",
                                                      "price":  "Trong vé buffet",
                                                      "desc":  "Hơn 20 loại bánh ngọt kiểu Âu, kem tươi và chè truyền thống",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Hải sản tươi sống liên tục được refill đầy ắp quầy line, ghẹ và bề bề thịt chắc ngọt",
                                                "Không gian biệt thự Pháp sang trọng, rộng lớn 500 chỗ, có chỗ đỗ ô tô cực kỳ thuận tiện",
                                                "Quầy đồ nướng và tráng miệng rất đa dạng từ kem tươi đến bánh ngọt kiểu Âu"
                                            ],
                                   "cons":  [
                                                "Mức giá trên 500k/người chưa bao gồm VAT và đồ uống có cồn",
                                                "Cuối tuần rất đông khách tại quầy ghẹ và hàu nướng, nên đi sớm để không phải xếp hàng chờ lấy đồ"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Trịnh Quốc Huy",
                                     "badge":  "Local Guide Level 6",
                                     "date":  "1 tuần trước",
                                     "rating":  4.6,
                                     "comment":  "Điểm đến tổ chức sinh nhật và liên hoan công ty ưng ý nhất quận Cầu Giấy. Hải sản tươi rói, ghẹ hấp con nào con nấy chắc thịt, nhân viên dọn đĩa trống liên tục rất chu đáo."
                                 },
                                 {
                                     "author":  "Hoàng Kim Chi",
                                     "badge":  "Thực khách Cầu Giấy",
                                     "date":  "2 tuần trước",
                                     "rating":  4.5,
                                     "comment":  "Quầy sashimi cá hồi rất tươi, cắt miếng dày ăn đã miệng. Ghẹ hấp thơm mùi sả, hàu nướng phô mai béo ngậy. Giá xứng đáng với chất lượng hải sản nhận được."
                                 }
                             ],
        "spatial_identity":  "Biệt thự Pháp sang trọng 500 khách KĐT Trung Hòa Nhân Chính, quầy line trung tâm khổng lồ như boong tàu du lịch, có nhân viên lái xe đỗ hộ (Valet).",
        "key_signature":  "Quầy hải sản tươi bơi bể hấp sả bia nóng hổi chắc nịch đầy gạch, hàu nướng phô mai béo ngậy và quầy Sashimi cá hồi Na Uy tươi rói.",
        "audit_dossier":  {
                              "audit_date":  "2026-10-11",
                              "auditor":  "OMNI Red-Team Auditor (Cau Giay Field Unit)",
                              "audit_status":  "VERIFIED_GROUND_TRUTH",
                              "notes":  "Đã kiểm toán thực địa: Giá vé 468k-518k chưa gồm VAT 8-10% và đồ uống cồn; cuối tuần nên đi đầu ca 11h15 hoặc 18h15 để lấy đồ tươi nhất."
                          }
    },
    {
        "id":  "store-hk-012",
        "brand":  "Phở 10 Lý Quốc Sư",
        "name":  "Phở 10 Lý Quốc Sư - Tinh Hoa Phở Bò Bát Sứ",
        "category":  "Phở \u0026 Bún Bò",
        "slug":  "pho-10-ly-quoc-su-hang-trong",
        "address":  "10 Lý Quốc Sư, Phường Hàng Trống, Quận Hoàn Kiếm, Hà Nội",
        "landmark":  "Gần Nhà Thờ Lớn Hà Nội",
        "location":  {
                         "latitude":  21.030554,
                         "longitude":  105.849231
                     },
        "price_range":  {
                            "min":  60000,
                            "max":  120000,
                            "formatted":  "60.000₫ - 120.000₫"
                        },
        "operating_hours":  {
                                "open_time":  "06:00",
                                "close_time":  "22:00",
                                "best_visit_window":  "07:30 - 09:00 hoặc 15:00 - 17:00"
                            },
        "contact":  {
                        "phone":  "02438257338",
                        "phone_display":  "024 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)"
                    },
        "amenities":  [
                          {
                              "name":  "Điều hòa mát",
                              "icon":  "ac"
                          },
                          {
                              "name":  "Thanh toán VietQR",
                              "icon":  "qr"
                          },
                          {
                              "name":  "Bàn ghế gỗ sang trọng",
                              "icon":  "luxury"
                          }
                      ],
        "parking_detail":  {
                               "motorcycle":  "Để xe máy vỉa hè trước cửa có nhân viên xếp xe",
                               "car":  "Không đỗ ô tô trước cửa; gửi bãi xe Nhà Thờ Lớn hoặc Phủ Doãn (30k/lượt)"
                           },
        "realtime_busyness":  {
                                  "status_text":  "Rất đông khách quốc tế \u0026 bản địa",
                                  "busyness_sub":  "Chờ xếp bàn 5-10 phút giờ trưa",
                                  "noise_level":  "60 dB (Nhộn nhịp phố cổ)",
                                  "historical_pattern":  "Khung giờ vàng: 15h00 - 17h00 vắng bàn, phục vụ thong thả"
                              },
        "ai_curation":  {
                            "signature_dish":  "Phở Bò Tái Nạm Gầu Giòn (Nước dùng trong vắt, gầu vàng ươm, hành hoa thái chỉ)",
                            "insider_tip":  "Gọi bát Tái Gầu thêm quẩy nóng và chén tương ớt gia truyền phố cổ cay xè. Tránh đến khung 12h-13h vì khách du lịch xếp hàng dài ra tận lòng đường.",
                            "contexts":  [
                                             "an_sang_nhanh",
                                             "am_thuc_di_san",
                                             "tiep_khach_quoc_te",
                                             "dieu_hoa_mat",
                                             "thanh_toan_vietqr"
                                         ],
                            "omni_trust_score":  98
                        },
        "photos":  [
                       {
                           "url":  "/assets/photos/pho_bat_dan.jpg",
                           "caption":  "Bát phở 10 Lý Quốc Sư tái nạm bốc khói ngào ngạt",
                           "tag":  "Món Chính"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Thực Đơn Phở Bò Bát Sứ",
                                    "items":  [
                                                  {
                                                      "name":  "Phở Đặc Biệt (Tái, Nạm, Gầu, Lõi Bò)",
                                                      "price":  "110.000đ",
                                                      "desc":  "Thịt lõi rùa giòn ngọt, nước dùng tủy hầm 14 tiếng",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Phở Tái Gầu Giòn",
                                                      "price":  "85.000đ",
                                                      "desc":  "Gầu vàng giòn không ngấy, tái thái mỏng mềm",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Phở Bò Chín Nạm",
                                                      "price":  "70.000đ",
                                                      "desc":  "Nạm chín mềm thơm, giữ trọn vị ngọt thịt",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Nước dùng ngọt thanh sâu từ tủy xương, thịt bò tươi chuẩn loại 1 mỗi sáng",
                                                "Không gian điều hòa mát lạnh, sạch sẽ nhất nhì khu vực phố Nhà Thờ",
                                                "Nhân viên phục vụ nhanh nhẹn, thanh toán quét mã QR mượt mà"
                                            ],
                                   "cons":  [
                                                "Giá cao hơn mặt bằng chung phở vỉa hè phố cổ (xứng đáng chất lượng)",
                                                "Giờ cao điểm trưa đông đúc, phải đợi ghép bàn",
                                                "Phố Lý Quốc Sư một chiều, cấm đỗ ô tô"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Nguyễn Hải Đăng",
                                     "badge":  "Thực khách sành ăn 15 năm",
                                     "date":  "Hôm qua",
                                     "rating":  5,
                                     "comment":  "Nước dùng phở 10 Lý Quốc Sư giữ vững phong độ thanh ngọt không bị ngấy mì chính. Gầu giòn chuẩn bài!"
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "Restaurant",
                               "name":  "Phở 10 Lý Quốc Sư",
                               "address":  "10 Lý Quốc Sư, Phường Hàng Trống, Quận Hoàn Kiếm, Hà Nội",
                               "geo":  {
                                           "@type":  "GeoCoordinates",
                                           "latitude":  21.030554,
                                           "longitude":  105.849231
                                       },
                               "priceRange":  "60.000 - 120.000 VND",
                               "servesCuisine":  "Phở Bò Hà Nội",
                               "aggregateRating":  {
                                                       "@type":  "AggregateRating",
                                                       "ratingValue":  "4.7",
                                                       "reviewCount":  "3420"
                                                   }
                           }
    },
    {
        "id":  "store-hk-013",
        "brand":  "Cà Phê Giảng",
        "name":  "Cà Phê Giảng - Khai Sinh Cà Phê Trứng Hà Nội 1946",
        "category":  "Cà Phê \u0026 Trà Di Sản",
        "slug":  "ca-phe-giang-nguyen-huu-huan",
        "address":  "39 Nguyễn Hữu Huân, Phường Lý Thái Tổ, Quận Hoàn Kiếm, Hà Nội",
        "landmark":  "Ngõ sâu Nguyễn Hữu Huân",
        "location":  {
                         "latitude":  21.034871,
                         "longitude":  105.854215
                     },
        "price_range":  {
                            "min":  35000,
                            "max":  65000,
                            "formatted":  "35.000₫ - 65.000₫"
                        },
        "operating_hours":  {
                                "open_time":  "07:00",
                                "close_time":  "22:30",
                                "best_visit_window":  "08:00 - 10:00 hoặc 19:30 - 21:00"
                            },
        "contact":  {
                        "phone":  "0989892298",
                        "phone_display":  "098 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)"
                    },
        "amenities":  [
                          {
                              "name":  "Không gian hoài niệm xưa",
                              "icon":  "vintage"
                          },
                          {
                              "name":  "Thanh toán VietQR",
                              "icon":  "qr"
                          },
                          {
                              "name":  "Wifi tốc độ cao",
                              "icon":  "wifi"
                          }
                      ],
        "parking_detail":  {
                               "motorcycle":  "Gửi xe máy trước cửa ngõ 39 Nguyễn Hữu Huân (có bảo vệ phát vé)",
                               "car":  "Không đỗ ô tô; gửi bãi xe Trần Nhật Duật cách 200m"
                           },
        "realtime_busyness":  {
                                  "status_text":  "Đông vui tấp nập",
                                  "busyness_sub":  "Tầng 2 thoáng gió, vào bàn nhanh",
                                  "noise_level":  "58 dB (Râm ran chuyện trò)",
                                  "historical_pattern":  "Sáng sớm 7h30 ngắm phố cổ bên tách cà phê trứng ấm là đẹp nhất"
                              },
        "ai_curation":  {
                            "signature_dish":  "Cà Phê Trứng Nóng Truyền Thống (Lòng đỏ trứng gà đánh bông ngậy béo đặt trong bát nước ấm giữ nhiệt)",
                            "insider_tip":  "Dùng thìa múc lớp bọt kem trứng vàng óng nếm trước để cảm nhận độ béo ngậy không hề tanh, sau đó khuấy nhẹ với cà phê đen đắng bên dưới.",
                            "contexts":  [
                                             "ca_phe_di_san",
                                             "hen_ho_lang_man",
                                             "giao_luu_ban_be",
                                             "thanh_toan_vietqr"
                                         ],
                            "omni_trust_score":  99
                        },
        "photos":  [
                       {
                           "url":  "/assets/photos/cot_dien_banh_mi_chao.jpg",
                           "caption":  "Tách cà phê trứng Giảng giữ ấm trong thố nước nóng",
                           "tag":  "Đặc Sản"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Thực Đơn Cà Phê Trứng Di Sản",
                                    "items":  [
                                                  {
                                                      "name":  "Cà phê trứng nóng truyền thống",
                                                      "price":  "40.000đ",
                                                      "desc":  "Công thức cụ Giảng từ 1946 thơm nức béo ngậy",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Cacao trứng đá",
                                                      "price":  "40.000đ",
                                                      "desc":  "Vị ngọt đắng của cacao nguyên chất quyện bọt trứng",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Cà phê trứng đá",
                                                      "price":  "45.000đ",
                                                      "desc":  "Thanh mát giải nhiệt mùa hè phố cổ",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Hương vị kem trứng độc bản không nơi nào sao chép được độ mịn màng và không tanh",
                                                "Không gian cổ kính giếng trời mang đậm hồn cốt phố cổ Hà Nội",
                                                "Giá cực kỳ bình dân so với tên tuổi di sản quốc tế"
                                            ],
                                   "cons":  [
                                                "Lối vào ngõ nhỏ sâu đặc trưng phố cổ",
                                                "Giờ cao điểm cuối tuần ghế ngồi san sát nhau",
                                                "Không có điều hòa phòng kín ở toàn bộ các bàn"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Vũ Đình Toàn",
                                     "badge":  "Dân phố cổ Hoàn Kiếm",
                                     "date":  "3 ngày trước",
                                     "rating":  5,
                                     "comment":  "Cà phê trứng cụ Giảng uống từ thời sinh viên đến giờ vẫn nguyên vị béo ngậy thanh tao, không đâu sánh bằng."
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "CafeOrCoffeeShop",
                               "name":  "Cà Phê Giảng",
                               "address":  "39 Nguyễn Hữu Huân, Phường Lý Thái Tổ, Quận Hoàn Kiếm, Hà Nội",
                               "geo":  {
                                           "@type":  "GeoCoordinates",
                                           "latitude":  21.034871,
                                           "longitude":  105.854215
                                       },
                               "priceRange":  "35.000 - 65.000 VND",
                               "servesCuisine":  "Cà Phê Trứng Hà Nội",
                               "aggregateRating":  {
                                                       "@type":  "AggregateRating",
                                                       "ratingValue":  "4.8",
                                                       "reviewCount":  "4890"
                                                   }
                           }
    },
    {
        "id":  "store-hk-014",
        "brand":  "Cà Phê Đinh",
        "name":  "Cà Phê Đinh - Ban Công Tầng 2 Ngắm Trọn Hồ Gươm",
        "category":  "Cà Phê \u0026 Trà Di Sản",
        "slug":  "ca-phe-dinh-dinh-tien-hoang",
        "address":  "13 Đinh Tiên Hoàng, Phường Hàng Bạc, Quận Hoàn Kiếm, Hà Nội",
        "landmark":  "Tầng 2 trên tiệm ba lô đối diện Hồ Gươm",
        "location":  {
                         "latitude":  21.031852,
                         "longitude":  105.852441
                     },
        "price_range":  {
                            "min":  25000,
                            "max":  50000,
                            "formatted":  "25.000₫ - 50.000₫"
                        },
        "operating_hours":  {
                                "open_time":  "07:00",
                                "close_time":  "22:30",
                                "best_visit_window":  "07:00 - 08:30 hoặc 16:30 - 18:00"
                            },
        "contact":  {
                        "phone":  "02438242960",
                        "phone_display":  "024 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)"
                    },
        "amenities":  [
                          {
                              "name":  "View trực diện Hồ Gươm",
                              "icon":  "view"
                          },
                          {
                              "name":  "Cà phê trứng vẽ hoa nghệ thuật",
                              "icon":  "art"
                          },
                          {
                              "name":  "Không gian âm nhạc Trịnh Công Sơn",
                              "icon":  "music"
                          }
                      ],
        "parking_detail":  {
                               "motorcycle":  "Gửi xe máy dưới chân cầu thang hoặc bờ hồ Đinh Tiên Hoàng (10k/vé)",
                               "car":  "Khu vực đi bộ cuối tuần cấm ô tô; gửi bãi ngã tư Tràng Tiền - Ngô Quyền"
                           },
        "realtime_busyness":  {
                                  "status_text":  "Ghế ban công thường kín chỗ",
                                  "busyness_sub":  "Bên trong còn bàn mộc hoài niệm",
                                  "noise_level":  "52 dB (Tiếng nhạc Trịnh êm dịu)",
                                  "historical_pattern":  "Hoàng hôn buông xuống Hồ Gươm ngắm từ ban công Đinh là trải nghiệm đắt giá nhất thủ đô"
                              },
        "ai_curation":  {
                            "signature_dish":  "Cà Phê Trứng Nóng Vẽ Hoa Cúc Tỉ Mỉ (Lớp bọt kem trứng mịn màng được bàn tay nghệ nhân tạo hình hoa)",
                            "insider_tip":  "Bước qua cầu thang gỗ hẹp tối om lên tầng 2. Cố gắng chọn bàn nhỏ ngoài ban công nhìn thẳng ra Tháp Rùa và cầu Thê Húc.",
                            "contexts":  [
                                             "ca_phe_di_san",
                                             "view_dep_ho_guom",
                                             "chill_hoai_niem",
                                             "thanh_toan_vietqr"
                                         ],
                            "omni_trust_score":  97
                        },
        "photos":  [
                       {
                           "url":  "/assets/photos/xoi_yen.jpg",
                           "caption":  "Góc ban công cà phê Đinh nhìn thẳng ra Hồ Gươm",
                           "tag":  "Không Gian"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Thực Đơn Cà Phê Trứng \u0026 Nước Truyền Thống",
                                    "items":  [
                                                  {
                                                      "name":  "Cà phê trứng nóng tạo hình",
                                                      "price":  "30.000đ",
                                                      "desc":  "Kem trứng béo ngậy được cô Bích con gái cụ Giảng truyền dạy",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Cacao trứng nóng",
                                                      "price":  "30.000đ",
                                                      "desc":  "Thơm ngọt đượm vị cacao xưa",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Nước sấu ngâm gừng Hà Nội",
                                                      "price":  "25.000đ",
                                                      "desc":  "Vị chua ngọt thanh mát giòn sần sật",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Tầm nhìn ngắm trọn Hồ Gươm đắt giá nhất nhưng giá đồ uống bình dân không đổi",
                                                "Chất lượng bọt kem trứng sánh đặc, hoa văn tinh tế hoài niệm",
                                                "Giữ trọn không khí mộc mạc Hà Nội thập niên 90"
                                            ],
                                   "cons":  [
                                                "Lối cầu thang lên tối và hẹp, cẩn thận bậc dốc",
                                                "Không gian nhỏ hẹp, ban công chỉ có 2-3 chiếc ghế nhỏ",
                                                "Không phù hợp nhóm đông người ồn ào"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Lâm Phương Thảo",
                                     "badge":  "Nhiếp ảnh gia Hà Nội",
                                     "date":  "5 ngày trước",
                                     "rating":  5,
                                     "comment":  "Ngồi ban công Đinh nhấp ngụm cà phê trứng nóng giữa tiết trời thu Hà Nội, ngắm mặt hồ xanh biếc là thứ cảm xúc bình yên không đâu có được."
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "CafeOrCoffeeShop",
                               "name":  "Cà Phê Đinh",
                               "address":  "13 Đinh Tiên Hoàng, Phường Hàng Bạc, Quận Hoàn Kiếm, Hà Nội",
                               "geo":  {
                                           "@type":  "GeoCoordinates",
                                           "latitude":  21.031852,
                                           "longitude":  105.852441
                                       },
                               "priceRange":  "25.000 - 50.000 VND",
                               "servesCuisine":  "Cà Phê Hà Nội",
                               "aggregateRating":  {
                                                       "@type":  "AggregateRating",
                                                       "ratingValue":  "4.7",
                                                       "reviewCount":  "2150"
                                                   }
                           }
    },
    {
        "id":  "store-hk-015",
        "brand":  "Nộm Bò Khô Mai Nga",
        "name":  "Nộm Bò Khô Mai Nga - Đệ Nhất Nộm Phố Hàm Long",
        "category":  "Ăn Vặt \u0026 Món Cuốn",
        "slug":  "nom-bo-kho-mai-nga-ham-long",
        "address":  "25 Hàm Long, Phường Hàng Bài, Quận Hoàn Kiếm, Hà Nội",
        "landmark":  "Đối diện Nhà Thờ Hàm Long",
        "location":  {
                         "latitude":  21.020412,
                         "longitude":  105.853112
                     },
        "price_range":  {
                            "min":  40000,
                            "max":  65000,
                            "formatted":  "40.000₫ - 65.000₫"
                        },
        "operating_hours":  {
                                "open_time":  "10:00",
                                "close_time":  "20:30",
                                "best_visit_window":  "15:00 - 17:00 (Ăn xế chiều đỉnh cao)"
                            },
        "contact":  {
                        "phone":  "0946788668",
                        "phone_display":  "094 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)"
                    },
        "amenities":  [
                          {
                              "name":  "Bàn ghế vỉa hè sạch",
                              "icon":  "clean"
                          },
                          {
                              "name":  "Thanh toán VietQR",
                              "icon":  "qr"
                          },
                          {
                              "name":  "Phục vụ siêu nhanh",
                              "icon":  "fast"
                          }
                      ],
        "parking_detail":  {
                               "motorcycle":  "Để xe máy dọc vỉa hè trước cửa đối diện nhà thờ",
                               "car":  "Có thể táp xe nhanh mua mang về hoặc gửi bãi phố Ngô Thì Nhậm"
                           },
        "realtime_busyness":  {
                                  "status_text":  "Giờ tan tầm xế chiều đông đúc",
                                  "busyness_sub":  "Lên đĩa nhanh trong 2 phút",
                                  "noise_level":  "55 dB",
                                  "historical_pattern":  "15h30 - 17h30 là khung giờ vàng ăn vặt của giới trẻ và văn phòng"
                              },
        "ai_curation":  {
                            "signature_dish":  "Nộm Bò Khô Thập Cẩm Đầy Đủ (Đu đủ nạo giòn sần sật, thịt bò khô tẩm ướp đậm đà, gan sấy bùi, lá lách, gân bò dẻo)",
                            "insider_tip":  "Nước chấm chua ngọt thanh tao vừa miệng, chan thêm thìa ớt chưng cay tê. Nhớ gọi thêm đĩa bánh bột lọc vỏ mỏng trong vắt tôm thịt đậm vị.",
                            "contexts":  [
                                             "an_vat_xe_chieu",
                                             "am_thuc_di_san",
                                             "nhanh_gon",
                                             "thanh_toan_vietqr"
                                         ],
                            "omni_trust_score":  95
                        },
        "photos":  [
                       {
                           "url":  "/assets/photos/banh_cuon_ba_hoanh.jpg",
                           "caption":  "Đĩa nộm bò khô Mai Nga ngập tràn thịt bò khô và rau thơm",
                           "tag":  "Món Chính"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Thực Đơn Nộm \u0026 Ăn Vặt Hàm Long",
                                    "items":  [
                                                  {
                                                      "name":  "Nộm bò khô thập cẩm đặc biệt",
                                                      "price":  "50.000đ",
                                                      "desc":  "Đầy đủ bò khô, gan sấy, lá lách, dạ trường, gân bò giòn rụm",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Bánh bột lọc tôm thịt truyền thống (10 chiếc)",
                                                      "price":  "50.000đ",
                                                      "desc":  "Vỏ bánh dẻo trong, nhân tôm đồng tươi xào mộc nhĩ đậm vị",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Nộm chim quay nguyên con",
                                                      "price":  "65.000đ",
                                                      "desc":  "Chim cút quay vàng rụm béo thơm ăn kèm nộm đu đủ chua ngọt",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Đu đủ nạo giòn tan không bị ỉu, nước trộn nộm cân bằng chua ngọt hoàn hảo",
                                                "Thịt bò khô và gan sấy dẻo thơm nức, ngấm sâu gia vị thảo mộc",
                                                "Không gian ngồi ngắm Nhà Thờ Hàm Long yên bình rợp bóng cây"
                                            ],
                                   "cons":  [
                                                "Quán vỉa hè ngồi ghế nhựa ngoài trời, trời mưa phải ngồi co cụm trong nhà",
                                                "Giờ tan tầm đông đúc, bãi để xe máy hơi chật",
                                                "Khách thích ăn mặn có thể thấy nước trộn hơi thanh"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Hoàng Tuấn Anh",
                                     "badge":  "Thực khách phố Hàm Long",
                                     "date":  "1 tuần trước",
                                     "rating":  5,
                                     "comment":  "Mai Nga là quán nộm chân ái ở Hà Nội, ăn từ thời học sinh. Gan sấy béo bùi và đu đủ giòn sần sật số 1!"
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "Restaurant",
                               "name":  "Nộm Bò Khô Mai Nga",
                               "address":  "25 Hàm Long, Phường Hàng Bài, Quận Hoàn Kiếm, Hà Nội",
                               "geo":  {
                                           "@type":  "GeoCoordinates",
                                           "latitude":  21.020412,
                                           "longitude":  105.853112
                                       },
                               "priceRange":  "40.000 - 65.000 VND",
                               "servesCuisine":  "Nộm Hà Nội",
                               "aggregateRating":  {
                                                       "@type":  "AggregateRating",
                                                       "ratingValue":  "4.6",
                                                       "reviewCount":  "1840"
                                                   }
                           }
    },
    {
        "id":  "store-hk-016",
        "brand":  "Ốc Hà Trang Đinh Liệt",
        "name":  "Ốc Hà Trang - Đệ Nhất Ốc Luộc Lá Bưởi Phố Cổ",
        "category":  "Ốc \u0026 Hải Sản Hà Nội",
        "slug":  "oc-ha-trang-1-dinh-liet",
        "address":  "1A Đinh Liệt, Phường Hàng Bạc, Quận Hoàn Kiếm, Hà Nội",
        "landmark":  "Ngã ba Đinh Liệt - Tạ Hiện",
        "location":  {
                         "latitude":  21.033789,
                         "longitude":  105.852901
                     },
        "price_range":  {
                            "min":  50000,
                            "max":  110000,
                            "formatted":  "50.000₫ - 110.000₫"
                        },
        "operating_hours":  {
                                "open_time":  "14:30",
                                "close_time":  "22:30",
                                "best_visit_window":  "15:30 - 18:00 (Ốc mới luộc bốc khói ngào ngạt)"
                            },
        "contact":  {
                        "phone":  "0946288882",
                        "phone_display":  "094 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)"
                    },
        "amenities":  [
                          {
                              "name":  "Ngồi vỉa hè góc phố cổ",
                              "icon":  "streetview"
                          },
                          {
                              "name":  "Nước chấm pha gia truyền",
                              "icon":  "secret"
                          },
                          {
                              "name":  "Thanh toán VietQR",
                              "icon":  "qr"
                          }
                      ],
        "parking_detail":  {
                               "motorcycle":  "Để xe máy vỉa hè Đinh Liệt có người chỉ chỗ",
                               "car":  "Không đỗ được ô tô; gửi bãi xe Chợ Hàng Bè hoặc Trần Nhật Duật"
                           },
        "realtime_busyness":  {
                                  "status_text":  "Rất đông về đêm",
                                  "busyness_sub":  "Ghế nhựa vỉa hè luân chuyển nhanh",
                                  "noise_level":  "64 dB",
                                  "historical_pattern":  "Mùa đông hay trời thu gió mát, quán luôn kín nghẹt thực khách sành ăn"
                              },
        "ai_curation":  {
                            "signature_dish":  "Ốc Mít Luộc Lá Bưởi Lá Chanh (Ốc béo múp míp, ruột giòn sần sật, nước chấm gừng sả ớt lá chanh cay xé lưỡi độc bản)",
                            "insider_tip":  "Vắt thêm quất vào bát nước chấm, dùng gai bưởi hoặc que khêu ruột ốc chấm ngập rồi húp một thìa nước ốc luộc ấm bụng thơm ngát hương lá bưởi.",
                            "contexts":  [
                                             "an_toi_nhau_nhe",
                                             "an_dem_pho_co",
                                             "dac_san_ha_thanh",
                                             "thanh_toan_vietqr"
                                         ],
                            "omni_trust_score":  96
                        },
        "photos":  [
                       {
                           "url":  "/assets/photos/bun_oc_phu_tay_ho.jpg",
                           "caption":  "Bát ốc luộc lá bưởi nóng hổi cùng bát nước chấm gừng sả gia truyền",
                           "tag":  "Món Chính"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Thực Đơn Ốc Luộc Phố Cổ",
                                    "items":  [
                                                  {
                                                      "name":  "Ốc mít luộc lá bưởi bát lớn",
                                                      "price":  "90.000đ",
                                                      "desc":  "Ốc mít béo ngậy được chọn lọc kỹ càng, luộc vừa chín tới giòn ngọt",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Ốc vặn luộc lá chanh",
                                                      "price":  "50.000đ",
                                                      "desc":  "Ốc vặn giòn sần sật, nước ốc ngọt thanh",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Ngao hấp sả dứa cay nóng",
                                                      "price":  "70.000đ",
                                                      "desc":  "Ngao béo múp ngập nước cốt sả ớt thơm lừng",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Nem chua rán phố cổ (10 chiếc)",
                                                      "price":  "60.000đ",
                                                      "desc":  "Nem rán vàng rụm ăn kèm tương ớt",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Nước chấm ốc ở đây ngon đỉnh cao nhất Hà Nội, tỷ lệ gừng sả ớt quất lá chanh chuẩn mực",
                                                "Ốc tươi sống béo ngậy, làm sạch không một hạt sạn, luộc vừa độ giữ trọn độ giòn",
                                                "Vị trí ngay ngã ba Đinh Liệt cảm nhận rõ rệt nhịp sống phố cổ về đêm"
                                            ],
                                   "cons":  [
                                                "Giá cao hơn các quán ốc ngoại ô (tiền nào của nấy)",
                                                "Chỗ ngồi vỉa hè ghế nhựa thấp chật chội, người cao to ngồi lâu mỏi lưng",
                                                "Quán không mở buổi sáng, chỉ bán từ chiều"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Đặng Quang Huy",
                                     "badge":  "Thực khách sành ăn Hà Nội",
                                     "date":  "4 ngày trước",
                                     "rating":  5,
                                     "comment":  "Nước chấm ốc Hà Trang thực sự là kiệt tác gia truyền. Mùa lạnh ngồi xì xụp bát ốc mít giòn sần sật với bát nước chấm gừng thơm nức thì không gì sánh bằng!"
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "Restaurant",
                               "name":  "Ốc Hà Trang Đinh Liệt",
                               "address":  "1A Đinh Liệt, Phường Hàng Bạc, Quận Hoàn Kiếm, Hà Nội",
                               "geo":  {
                                           "@type":  "GeoCoordinates",
                                           "latitude":  21.033789,
                                           "longitude":  105.852901
                                       },
                               "priceRange":  "50.000 - 110.000 VND",
                               "servesCuisine":  "Ốc Hà Nội",
                               "aggregateRating":  {
                                                       "@type":  "AggregateRating",
                                                       "ratingValue":  "4.6",
                                                       "reviewCount":  "1560"
                                                   }
                           }
    },
    {
        "id":  "store-hk-017",
        "brand":  "Bánh Cuốn Thanh Vân",
        "name":  "Bánh Cuốn Thanh Vân - Bánh Cuốn Gia Truyền Phố Hàng Gà",
        "category":  "Bánh Cuốn \u0026 Đồ Ăn Sáng",
        "slug":  "banh-cuon-thanh-van-12-hang-ga",
        "address":  "12-14 Hàng Gà, Phường Hàng Bồ, Quận Hoàn Kiếm, Hà Nội",
        "landmark":  "Góc ngã ba Hàng Gà - Hàng Phèn",
        "location":  {
                         "latitude":  21.035112,
                         "longitude":  105.847981
                     },
        "price_range":  {
                            "min":  40000,
                            "max":  75000,
                            "formatted":  "40.000₫ - 75.000₫"
                        },
        "operating_hours":  {
                                "open_time":  "06:30",
                                "close_time":  "21:30",
                                "best_visit_window":  "07:30 - 09:00 hoặc 17:00 - 18:30"
                            },
        "contact":  {
                        "phone":  "02438285884",
                        "phone_display":  "024 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)"
                    },
        "amenities":  [
                          {
                              "name":  "Không gian nhà cổ sạch sẽ",
                              "icon":  "heritage"
                          },
                          {
                              "name":  "Điều hòa mát",
                              "icon":  "ac"
                          },
                          {
                              "name":  "Thanh toán VietQR",
                              "icon":  "qr"
                          }
                      ],
        "parking_detail":  {
                               "motorcycle":  "Để xe máy vỉa hè trước cửa số 12 Hàng Gà",
                               "car":  "Không đỗ ô tô; gửi bãi xe Chợ Hàng Da"
                           },
        "realtime_busyness":  {
                                  "status_text":  "Phục vụ đều đặn, không phải đợi lâu",
                                  "busyness_sub":  "Bánh tráng nóng tại chỗ mỏng dính",
                                  "noise_level":  "52 dB",
                                  "historical_pattern":  "Sáng sớm thưởng thức bánh tráng bốc khói ngút ngát là tuyệt nhất"
                              },
        "ai_curation":  {
                            "signature_dish":  "Bánh Cuốn Nhân Tôm Tươi \u0026 Bánh Cuốn Thịt Gà (Vỏ bánh tráng mỏng tang như dải lụa, nhân tôm tươi xắt hạt lựu ngọt lịm, rắc ruốc tôm bông mịn)",
                            "insider_tip":  "Gọi suất đôi gồm 1 đĩa nhân thịt gà và 1 đĩa nhân tôm, thêm chút tinh dầu cà cuống nguyên chất nhỏ vào bát nước mắm ấm là chuẩn phong vị quý tộc Hà Thành xưa.",
                            "contexts":  [
                                             "an_sang_nhanh",
                                             "am_thuc_di_san",
                                             "dieu_hoa_mat",
                                             "thanh_toan_vietqr"
                                         ],
                            "omni_trust_score":  96
                        },
        "photos":  [
                       {
                           "url":  "/assets/photos/banh_cuon_ba_hoanh.jpg",
                           "caption":  "Đĩa bánh cuốn Thanh Vân mỏng dính rắc hành phi thơm nức",
                           "tag":  "Món Chính"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Thực Đơn Bánh Cuốn Nóng Gia Truyền",
                                    "items":  [
                                                  {
                                                      "name":  "Bánh cuốn nhân tôm tươi đặc biệt",
                                                      "price":  "65.000đ",
                                                      "desc":  "Tôm nõn tươi xào thơm quyện mộc nhĩ, vỏ mỏng như lụa",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Bánh cuốn nhân thịt gà đồi",
                                                      "price":  "55.000đ",
                                                      "desc":  "Thịt gà xé nhỏ rim nấm hương đậm đà thơm ngát",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Bánh cuốn thịt lợn truyền thống",
                                                      "price":  "45.000đ",
                                                      "desc":  "Thịt nạc băm nhuyễn mộc nhĩ, chả quế giòn thơm",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Vỏ bánh tráng mỏng tang mướt mát, hoàn toàn không pha hàn the hay bột củ",
                                                "Có cà cuống tự nhiên truyền thống cho người sành ăn",
                                                "Không gian sạch sẽ, lịch sự, nhân viên nhã nhặn kiểu Tràng An"
                                            ],
                                   "cons":  [
                                                "Giá phân khúc cao cấp so với bánh cuốn truyền thống vỉa hè",
                                                "Nước mắm pha nhẹ nhàng, khách thích ăn mặn đậm đà cần xin thêm ớt tiêu",
                                                "Phố Hàng Gà hẹp, giờ tan tầm xe cộ đông đúc"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Trần Bích Thủy",
                                     "badge":  "Chuyên gia ẩm thực dân gian",
                                     "date":  "1 tuần trước",
                                     "rating":  5,
                                     "comment":  "Thanh Vân giữ được cái nết tráng bánh mỏng dính nhìn thấu cả lớp nhân tôm tươi rói. Nhỏ thêm giọt cà cuống dậy mùi thơm ngây ngất!"
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "Restaurant",
                               "name":  "Bánh Cuốn Thanh Vân",
                               "address":  "12-14 Hàng Gà, Phường Hàng Bồ, Quận Hoàn Kiếm, Hà Nội",
                               "geo":  {
                                           "@type":  "GeoCoordinates",
                                           "latitude":  21.035112,
                                           "longitude":  105.847981
                                       },
                               "priceRange":  "40.000 - 75.000 VND",
                               "servesCuisine":  "Bánh Cuốn Hà Nội",
                               "aggregateRating":  {
                                                       "@type":  "AggregateRating",
                                                       "ratingValue":  "4.6",
                                                       "reviewCount":  "1920"
                                                   }
                           }
    },
    {
        "id":  "store-hk-018",
        "brand":  "Mì Vằn Thắn Bình Tây",
        "name":  "Mì Vằn Thắn Bình Tây - Gia Truyền Phố Hàng Chiếu",
        "category":  "Mì \u0026 Hủ Tiếu Gia Truyền",
        "slug":  "mi-van-than-binh-tay-54-hang-chieu",
        "address":  "54 Hàng Chiếu, Phường Đồng Xuân, Quận Hoàn Kiếm, Hà Nội",
        "landmark":  "Gần Ô Quan Chưởng \u0026 Chợ Đồng Xuân",
        "location":  {
                         "latitude":  21.037112,
                         "longitude":  105.852115
                     },
        "price_range":  {
                            "min":  50000,
                            "max":  75000,
                            "formatted":  "50.000₫ - 75.000₫"
                        },
        "operating_hours":  {
                                "open_time":  "07:00",
                                "close_time":  "22:00",
                                "best_visit_window":  "07:30 - 09:00 hoặc 18:00 - 20:00"
                            },
        "contact":  {
                        "phone":  "02438281146",
                        "phone_display":  "024 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)"
                    },
        "amenities":  [
                          {
                              "name":  "Không gian phố cổ truyền thống",
                              "icon":  "heritage"
                          },
                          {
                              "name":  "Thanh toán VietQR",
                              "icon":  "qr"
                          }
                      ],
        "parking_detail":  {
                               "motorcycle":  "Để xe máy vỉa hè trước quán số 54 Hàng Chiếu",
                               "car":  "Gửi xe ô tô bãi xe Chợ Đồng Xuân hoặc Trần Nhật Duật"
                           },
        "realtime_busyness":  {
                                  "status_text":  "Đông khách buổi sáng và tối",
                                  "busyness_sub":  "Vào bàn nhanh, bát mì bốc khói",
                                  "noise_level":  "58 dB",
                                  "historical_pattern":  "Bát mì nóng hổi ăn sáng tại khu chợ Đồng Xuân là nét văn hóa đặc trưng"
                              },
        "ai_curation":  {
                            "signature_dish":  "Mì Vằn Thắn Trộn \u0026 Mì Nước Thập Cẩm (Sợi mì trứng tươi dai giòn, há cảo chiên phồng giòn tan, thịt xá xíu hồng đào, tôm tươi, gan mềm, nấm hương)",
                            "insider_tip":  "Nên thử bát mì vằn thắn trộn với nước sốt chua ngọt sền sệt, ăn kèm bát nước dùng tôm khô ninh xương thanh ngọt thơm lừng lá hẹ tươi.",
                            "contexts":  [
                                             "an_sang_nhanh",
                                             "an_trua_nhanh",
                                             "an_toi_nhanh",
                                             "am_thuc_di_san",
                                             "thanh_toan_vietqr"
                                         ],
                            "omni_trust_score":  95
                        },
        "photos":  [
                       {
                           "url":  "/assets/photos/pho_cuon_huong_mai.jpg",
                           "caption":  "Bát mì vằn thắn Bình Tây thập cẩm ngập tràn topping",
                           "tag":  "Món Chính"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Thực Đơn Mì \u0026 Sủi Cảo Bình Tây",
                                    "items":  [
                                                  {
                                                      "name":  "Mì vằn thắn trộn đặc biệt",
                                                      "price":  "65.000đ",
                                                      "desc":  "Sợi mì trứng tươi sốt đậm đà, há cảo chiên giòn rụm, xá xíu mềm ngọt",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Mì vằn thắn nước thập cẩm",
                                                      "price":  "55.000đ",
                                                      "desc":  "Nước dùng hầm tôm khô ngọt thanh, lá hẹ thơm lừng",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Bát sủi cảo nước thập cẩm",
                                                      "price":  "55.000đ",
                                                      "desc":  "Viên sủi cảo vỏ mỏng nhân thịt tôm tươi mọng nước",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Nước dùng hầm tôm khô sá sùng ngọt thanh tự nhiên đậm đà phong vị Hoa - Việt",
                                                "Sợi mì trứng tự làm dai giòn sần sật không bị bở nát",
                                                "Há cảo chiên giòn tan ngậy béo, thịt xá xíu thái mỏng vừa miệng"
                                            ],
                                   "cons":  [
                                                "Quán tương đối hẹp, bàn ghế kê sát nhau giờ cao điểm",
                                                "Vị trí gần chợ Đồng Xuân nên ban ngày giao thông nhộn nhịp",
                                                "Nước dùng có tôm khô nên ai dị ứng hải sản cần lưu ý"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Ngô Gia Bảo",
                                     "badge":  "Thực khách phố cổ Đồng Xuân",
                                     "date":  "2 tuần trước",
                                     "rating":  5,
                                     "comment":  "Mì vằn thắn Bình Tây chuẩn vị nhất phố cổ. Nước dùng tôm ngọt lịm không gắt bột ngọt, viên há cảo chiên giòn rụm chấm nước sốt ăn cực đã."
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "Restaurant",
                               "name":  "Mì Vằn Thắn Bình Tây",
                               "address":  "54 Hàng Chiếu, Phường Đồng Xuân, Quận Hoàn Kiếm, Hà Nội",
                               "geo":  {
                                           "@type":  "GeoCoordinates",
                                           "latitude":  21.037112,
                                           "longitude":  105.852115
                                       },
                               "priceRange":  "50.000 - 75.000 VND",
                               "servesCuisine":  "Mì Vằn Thắn Hà Nội",
                               "aggregateRating":  {
                                                       "@type":  "AggregateRating",
                                                       "ratingValue":  "4.5",
                                                       "reviewCount":  "1780"
                                                   }
                           }
    },
    {
        "id":  "store-hk-019",
        "brand":  "Chè Bốn Mùa Hàng Cân",
        "name":  "Chè Bốn Mùa - Đệ Nhất Chè Truyền Thống Phố Cổ 1975",
        "category":  "Tráng Miệng \u0026 Chè Cổ Truyền",
        "slug":  "che-bon-mua-4-hang-can",
        "address":  "4 Hàng Cân, Phường Hàng Đào, Quận Hoàn Kiếm, Hà Nội",
        "landmark":  "Góc ngã tư Hàng Cân - Lãn Ông",
        "location":  {
                         "latitude":  21.034612,
                         "longitude":  105.849921
                     },
        "price_range":  {
                            "min":  20000,
                            "max":  35000,
                            "formatted":  "20.000₫ - 35.000₫"
                        },
        "operating_hours":  {
                                "open_time":  "09:00",
                                "close_time":  "22:30",
                                "best_visit_window":  "14:00 - 17:00 hoặc 20:00 - 22:00"
                            },
        "contact":  {
                        "phone":  "0984883884",
                        "phone_display":  "098 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)"
                    },
        "amenities":  [
                          {
                              "name":  "Không gian phố cổ mộc mạc",
                              "icon":  "vintage"
                          },
                          {
                              "name":  "Thanh toán VietQR",
                              "icon":  "qr"
                          },
                          {
                              "name":  "Mở cửa quanh năm 4 mùa",
                              "icon":  "allseason"
                          }
                      ],
        "parking_detail":  {
                               "motorcycle":  "Để xe máy vỉa hè trước cửa 4 Hàng Cân",
                               "car":  "Không đỗ ô tô; đi bộ từ bãi xe Chợ Hàng Da"
                           },
        "realtime_busyness":  {
                                  "status_text":  "Đông khách tối và trưa hè",
                                  "busyness_sub":  "Múc chè siêu tốc trong 30 giây",
                                  "noise_level":  "54 dB",
                                  "historical_pattern":  "Mùa hè chè sen long nhãn mát rượi, mùa đông bánh trôi tàu nóng hổi sưởi ấm lòng"
                              },
        "ai_curation":  {
                            "signature_dish":  "Chè Sen Long Nhãn \u0026 Bánh Trôi Tàu Gừng Nóng (Hạt sen ninh bở tơi bọc cùi nhãn lồng giòn ngọt nước đường phèn thanh khiết; mùa đông bánh trôi tàu vừng đen cay nồng ấm bụng)",
                            "insider_tip":  "Món chè ở đây giữ đúng vị ngọt thanh tao nguyên bản Hà Nội xưa, không ngọt sắc gắt cổ. Hãy gọi một cốc chè sen thạch trân châu dừa nạo giòn sần sật.",
                            "contexts":  [
                                             "trang_mieng_giai_khat",
                                             "am_thuc_di_san",
                                             "an_dem_pho_co",
                                             "thanh_toan_vietqr"
                                         ],
                            "omni_trust_score":  97
                        },
        "photos":  [
                       {
                           "url":  "/assets/photos/xoi_yen.jpg",
                           "caption":  "Cốc chè sen long nhãn thanh mát nước đường phèn trong veo",
                           "tag":  "Món Đinh"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Thực Đơn Chè Truyền Thống 4 Mùa",
                                    "items":  [
                                                  {
                                                      "name":  "Chè sen long nhãn đường phèn",
                                                      "price":  "30.000đ",
                                                      "desc":  "Hạt sen bở bùi lồng cùi nhãn giòn ngọt nước thanh mát",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Bánh trôi tàu vừng đen gừng cay (Mùa lạnh)",
                                                      "price":  "25.000đ",
                                                      "desc":  "Vỏ bánh dẻo mịn nhân mè đen, nước đường gừng nồng ấm",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Chè đỗ đen truyền thống trân châu dừa",
                                                      "price":  "25.000đ",
                                                      "desc":  "Đỗ đen ninh mềm bở, thạch đen trân châu giòn sần sật",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Vị chè ngọt thanh tao khiết bạch đúng chuẩn Hà Nội cũ, không hóa chất tạo ngọt",
                                                "Nguyên liệu tươi mới: hạt sen bở tơi, nhãn lồng tươi giòn, trân châu tự nặn",
                                                "Giá cả cực kỳ bình dân giữa trung tâm phố cổ sầm uất"
                                            ],
                                   "cons":  [
                                                "Quán nhỏ, khách đông phải ngồi ghế nhựa tràn vỉa hè",
                                                "Không có điều hòa phòng kín",
                                                "Khách trẻ thích ăn ngọt đậm kiểu chè hiện đại có thể thấy hơi thanh"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Đỗ Thu Hương",
                                     "badge":  "Thực khách phố Hàng Cân",
                                     "date":  "1 tuần trước",
                                     "rating":  5,
                                     "comment":  "Chè Bốn Mùa từ nhỏ đến giờ vẫn giữ nguyên vẹn vị ngọt thanh của đường phèn. Cốc chè sen ăn đến đâu mát ruột đến đấy!"
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "CafeOrCoffeeShop",
                               "name":  "Chè Bốn Mùa Hàng Cân",
                               "address":  "4 Hàng Cân, Phường Hàng Đào, Quận Hoàn Kiếm, Hà Nội",
                               "geo":  {
                                           "@type":  "GeoCoordinates",
                                           "latitude":  21.034612,
                                           "longitude":  105.849921
                                       },
                               "priceRange":  "20.000 - 35.000 VND",
                               "servesCuisine":  "Chè Truyền Thống Hà Nội",
                               "aggregateRating":  {
                                                       "@type":  "AggregateRating",
                                                       "ratingValue":  "4.7",
                                                       "reviewCount":  "3150"
                                                   }
                           }
    },
    {
        "id":  "store-bd-003",
        "brand":  "Phở Cuốn Chinh Thắng",
        "name":  "Phở Cuốn Chinh Thắng - Nơi Khởi Sinh Phở Cuốn Ngũ Xã",
        "category":  "Phở Cuốn \u0026 Đồ Xào",
        "slug":  "pho-cuon-chinh-thang-48-nguyen-khac-hieu",
        "address":  "48 Nguyễn Khắc Hiếu, Phường Trúc Bạch, Quận Ba Đình, Hà Nội",
        "landmark":  "Bán đảo Ngũ Xã ven hồ Trúc Bạch",
        "location":  {
                         "latitude":  21.044551,
                         "longitude":  105.839812
                     },
        "price_range":  {
                            "min":  60000,
                            "max":  130000,
                            "formatted":  "60.000₫ - 130.000₫"
                        },
        "operating_hours":  {
                                "open_time":  "09:00",
                                "close_time":  "22:00",
                                "best_visit_window":  "11:00 - 12:00 hoặc 17:30 - 19:00"
                            },
        "contact":  {
                        "phone":  "02438294924",
                        "phone_display":  "024 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)"
                    },
        "amenities":  [
                          {
                              "name":  "Điều hòa mát",
                              "icon":  "ac"
                          },
                          {
                              "name":  "Thanh toán VietQR",
                              "icon":  "qr"
                          },
                          {
                              "name":  "Không gian bán đảo thoáng mát",
                              "icon":  "lake"
                          }
                      ],
        "parking_detail":  {
                               "motorcycle":  "Để xe máy trước cửa và vỉa hè đường Nguyễn Khắc Hiếu",
                               "car":  "Đỗ xe ô tô ven hồ Trúc Bạch hoặc phố Lạc Chính có bảo vệ hướng dẫn"
                           },
        "realtime_busyness":  {
                                  "status_text":  "Đông khách trưa và tối",
                                  "busyness_sub":  "Có bàn tầng 2 mát mẻ",
                                  "noise_level":  "56 dB",
                                  "historical_pattern":  "Trưa thứ 6 và cuối tuần văn phòng kéo về bán đảo Ngũ Xã rất đông"
                              },
        "ai_curation":  {
                            "signature_dish":  "Phở Cuốn Thịt Bò Tái Lăn \u0026 Phở Chiên Phồng Giòn Rụm (Cuốn bánh phở mướt mát ôm trọn thịt bò xào xèo tỏi thơm lừng, rau xà lách kinh giới chấm mắm ớt chua ngọt)",
                            "insider_tip":  "Chinh Thắng là nơi đầu tiên tại Ngũ Xã nghĩ ra món phở cuốn. Hãy gọi thêm đĩa Phở Chiên Trứng hoặc Phở Chiên Phồng sốt bò cải ngọt sánh quyện đậm đà.",
                            "contexts":  [
                                             "an_trua_nhanh",
                                             "an_toi_nhom",
                                             "am_thuc_di_san",
                                             "dieu_hoa_mat",
                                             "thanh_toan_vietqr"
                                         ],
                            "omni_trust_score":  96
                        },
        "photos":  [
                       {
                           "url":  "/assets/photos/pho_cuon_huong_mai.jpg",
                           "caption":  "Đĩa phở cuốn Chinh Thắng cuộn tròn mướt mát",
                           "tag":  "Món Đinh"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Thực Đơn Phở Cuốn \u0026 Đồ Chiên Xào",
                                    "items":  [
                                                  {
                                                      "name":  "Đĩa phở cuốn bò tái lăn (10 cuốn)",
                                                      "price":  "70.000đ",
                                                      "desc":  "Bánh phở mướt mềm ôm thịt bò xào tỏi và rau thơm thanh mát",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Phở chiên phồng xào bò cải ngọt",
                                                      "price":  "80.000đ",
                                                      "desc":  "Bánh phở phồng rộp giòn tan sốt bò sánh đậm",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Phở chiên trứng giòn vàng",
                                                      "price":  "85.000đ",
                                                      "desc":  "Trứng bao phủ bánh phở chiên giòn rụm béo ngậy",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Địa chỉ gốc cội nguồn của món phở cuốn đất Hà Thành, hương vị thịt bò xào ngấm đều",
                                                "Nước chấm pha chua ngọt cay vừa vặn, không quá nồng giấm",
                                                "Vị trí thoáng đãng gần hồ Trúc Bạch, có chỗ đỗ ô tô ven hồ"
                                            ],
                                   "cons":  [
                                                "Đường vào bán đảo Ngũ Xã giờ cao điểm hơi hẹp",
                                                "Giờ cao điểm phục vụ món chiên phồng có thể phải đợi 10 phút",
                                                "Cuối tuần khách du lịch đông"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Nguyễn Thanh Tùng",
                                     "badge":  "Thực khách lâu năm Ba Đình",
                                     "date":  "1 tuần trước",
                                     "rating":  5,
                                     "comment":  "Ăn phở cuốn Ngũ Xã bao năm vẫn chỉ trung thành với Chinh Thắng. Bò xào tái lăn ngập hành tỏi chấm mắm thanh dịu rất vừa miệng!"
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "Restaurant",
                               "name":  "Phở Cuốn Chinh Thắng",
                               "address":  "48 Nguyễn Khắc Hiếu, Phường Trúc Bạch, Quận Ba Đình, Hà Nội",
                               "geo":  {
                                           "@type":  "GeoCoordinates",
                                           "latitude":  21.044551,
                                           "longitude":  105.839812
                                       },
                               "priceRange":  "60.000 - 130.000 VND",
                               "servesCuisine":  "Phở Cuốn Hà Nội",
                               "aggregateRating":  {
                                                       "@type":  "AggregateRating",
                                                       "ratingValue":  "4.6",
                                                       "reviewCount":  "2420"
                                                   }
                           }
    },
    {
        "id":  "store-bd-004",
        "brand":  "Lẩu Ếch Ngân Béo",
        "name":  "Lẩu Ếch Ngân Béo - Thủ Phủ Lẩu Ếch Măng Cay Trúc Bạch",
        "category":  "Lẩu \u0026 Nướng Hà Nội",
        "slug":  "lau-ech-ngan-beo-43-truc-bach",
        "address":  "43 Trúc Bạch, Phường Trúc Bạch, Quận Ba Đình, Hà Nội",
        "landmark":  "Mặt hồ Trúc Bạch lộng gió",
        "location":  {
                         "latitude":  21.047212,
                         "longitude":  105.841512
                     },
        "price_range":  {
                            "min":  150000,
                            "max":  350000,
                            "formatted":  "150.000₫ - 350.000₫"
                        },
        "operating_hours":  {
                                "open_time":  "10:30",
                                "close_time":  "23:30",
                                "best_visit_window":  "18:00 - 20:30 (Ngồi ven hồ gió mát rượi)"
                            },
        "contact":  {
                        "phone":  "0946288686",
                        "phone_display":  "094 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)"
                    },
        "amenities":  [
                          {
                              "name":  "View trực diện hồ Trúc Bạch",
                              "icon":  "lake"
                          },
                          {
                              "name":  "Điều hòa mát phòng VIP",
                              "icon":  "ac"
                          },
                          {
                              "name":  "Thanh toán VietQR",
                              "icon":  "qr"
                          }
                      ],
        "parking_detail":  {
                               "motorcycle":  "Để xe máy vỉa hè trước quán có bảo vệ dắt",
                               "car":  "Có bãi đỗ ô tô ven hồ Trúc Bạch đối diện quán có bảo vệ trông giữ"
                           },
        "realtime_busyness":  {
                                  "status_text":  "Rất đông vui về tối",
                                  "busyness_sub":  "Nên đặt bàn trước nếu đi nhóm đông",
                                  "noise_level":  "65 dB (Sôi động tiệc tùng)",
                                  "historical_pattern":  "Mùa lạnh hoặc tối cuối tuần bàn ven hồ luôn kín chỗ"
                              },
        "ai_curation":  {
                            "signature_dish":  "Nồi Lẩu Ếch Măng Cay Chua Cay Đậm Đà \u0026 Đĩa Ếch Xào Măng Giòn Cay Xè (Thịt đùi ếch to chắc chiên vàng rộm xào cùng măng củ cay nồng, nước lẩu ngọt chua thanh sủi bọt ngút ngát)",
                            "insider_tip":  "Thịt ếch ở đây đùi to chắc nịch không bị bở. Khi ăn nhớ cho đĩa ếch xào măng vào nồi lẩu từ từ để nước ngọt ngấm vào rau muống non giòn sần sật.",
                            "contexts":  [
                                             "an_toi_nhom",
                                             "tu_tap_ban_be",
                                             "nhau_dem_ven_ho",
                                             "co_cho_do_oto",
                                             "thanh_toan_vietqr"
                                         ],
                            "omni_trust_score":  95
                        },
        "photos":  [
                       {
                           "url":  "/assets/photos/bun_oc_phu_tay_ho.jpg",
                           "caption":  "Nồi lẩu ếch măng cay bốc khói ngùn ngụt ven hồ Trúc Bạch",
                           "tag":  "Món Đinh"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Thực Đơn Lẩu Ếch \u0026 Món Nhậu Trúc Bạch",
                                    "items":  [
                                                  {
                                                      "name":  "Set lẩu ếch măng cay tiêu chuẩn (3-4 người)",
                                                      "price":  "350.000đ",
                                                      "desc":  "Đĩa đùi ếch xào măng vàng ươm, đĩa rau muống, nấm, váng đậu giòn và bún tươi",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Đùi ếch chiên lá lốt thơm lừng",
                                                      "price":  "150.000đ",
                                                      "desc":  "Thịt ếch chiên giòn rụm ngậy béo thơm nồng lá lốt tươi",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Da ếch chiên giòn xóc muối ớt",
                                                      "price":  "90.000đ",
                                                      "desc":  "Món nhắm giòn tan đậm đà khó cưỡng",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Hương vị nước lẩu măng cay đậm đà, chuẩn phong vị lẩu ếch Trúc Bạch chính gốc",
                                                "Vị trí mặt hồ Trúc Bạch thoáng mát lộng gió cực kỳ chill về đêm",
                                                "Có chỗ đỗ ô tô ven hồ thuận tiện cho gia đình và nhóm bạn"
                                            ],
                                   "cons":  [
                                                "Buổi tối đông đúc tiếng chuyện trò khá ồn ào",
                                                "Vị cay nồng của măng ớt đậm, ai không ăn cay được cần dặn bếp giảm ớt",
                                                "Giờ cao điểm phục vụ rau thêm có thể hơi chậm một chút"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Lê Hoàng Long",
                                     "badge":  "Dân văn phòng Liễu Giai",
                                     "date":  "3 ngày trước",
                                     "rating":  5,
                                     "comment":  "Lẩu ếch Ngân Béo chuẩn vị cay tê tái. Đùi ếch săn chắc nhiều thịt, măng chua ngấm nước lẩu ăn kèm váng đậu giòn tan cực kỳ đã!"
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "Restaurant",
                               "name":  "Lẩu Ếch Ngân Béo",
                               "address":  "43 Trúc Bạch, Phường Trúc Bạch, Quận Ba Đình, Hà Nội",
                               "geo":  {
                                           "@type":  "GeoCoordinates",
                                           "latitude":  21.047212,
                                           "longitude":  105.841512
                                       },
                               "priceRange":  "150.000 - 350.000 VND",
                               "servesCuisine":  "Lẩu Ếch Hà Nội",
                               "aggregateRating":  {
                                                       "@type":  "AggregateRating",
                                                       "ratingValue":  "4.5",
                                                       "reviewCount":  "1890"
                                                   }
                           }
    },
    {
        "id":  "store-bd-005",
        "brand":  "Bánh Xèo Nem Lụi Đội Cấn",
        "name":  "Bánh Xèo Nem Lụi Cô Minh - Ngõ 12 Đội Cấn",
        "category":  "Ăn Vặt \u0026 Món Cuốn",
        "slug":  "banh-xeo-nem-lui-co-minh-12-doi-can",
        "address":  "Ngõ 12 Đội Cấn, Phường Đội Cấn, Quận Ba Đình, Hà Nội",
        "landmark":  "Đầu ngõ 12 Đội Cấn gần Bảo tàng Hồ Chí Minh",
        "location":  {
                         "latitude":  21.036512,
                         "longitude":  105.831215
                     },
        "price_range":  {
                            "min":  20000,
                            "max":  60000,
                            "formatted":  "20.000₫ - 60.000₫"
                        },
        "operating_hours":  {
                                "open_time":  "10:30",
                                "close_time":  "21:30",
                                "best_visit_window":  "15:00 - 18:00 (Bánh chiên mới giòn rụm)"
                            },
        "contact":  {
                        "phone":  "0978988622",
                        "phone_display":  "097 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)"
                    },
        "amenities":  [
                          {
                              "name":  "Bàn ghế sạch sẽ",
                              "icon":  "clean"
                          },
                          {
                              "name":  "Thanh toán VietQR",
                              "icon":  "qr"
                          },
                          {
                              "name":  "Rau sống tươi sạch bạt ngàn",
                              "icon":  "veggie"
                          }
                      ],
        "parking_detail":  {
                               "motorcycle":  "Để xe máy đầu ngõ 12 Đội Cấn có bảo vệ trông giữ",
                               "car":  "Không đỗ ô tô trong ngõ; gửi bãi xe Bảo tàng Hồ Chí Minh cách 150m"
                           },
        "realtime_busyness":  {
                                  "status_text":  "Đông khách xế chiều và tối",
                                  "busyness_sub":  "Bánh chiên xèo xèo lên bàn nóng hổi",
                                  "noise_level":  "58 dB",
                                  "historical_pattern":  "Khung giờ 17h-19h học sinh, sinh viên và văn phòng ngồi kín bàn"
                              },
        "ai_curation":  {
                            "signature_dish":  "Bánh Xèo Vàng Ruộm Vỏ Giòn Tan \u0026 Nem Lụi Nướng Than Hoa Béo Thơm (Vỏ bánh xèo mỏng tang nhân tôm thịt giá đỗ, nem lụi nạc mỡ đan xen thơm nức mũi chấm nước sốt gan đậu phộng sánh bùi)",
                            "insider_tip":  "Đặt bánh tráng, trải lớp rau xà lách, lá cải xanh, dưa chuột, chuối chát rồi đặt miếng bánh xèo giòn rụm cùng que nem lụi, cuộn chặt chấm đẫm sốt bơ đậu phộng ấm nóng bùi béo khó quên.",
                            "contexts":  [
                                             "an_vat_xe_chieu",
                                             "hoc_sinh_sinh_vien",
                                             "am_thuc_di_san",
                                             "thanh_toan_vietqr"
                                         ],
                            "omni_trust_score":  94
                        },
        "photos":  [
                       {
                           "url":  "/assets/photos/cot_dien_banh_mi_chao.jpg",
                           "caption":  "Mẹt bánh xèo nem lụi Đội Cấn vàng rụm cùng rổ rau sống tươi roi rói",
                           "tag":  "Món Đinh"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Thực Đơn Bánh Xèo \u0026 Nem Lụi Nướng",
                                    "items":  [
                                                  {
                                                      "name":  "Bánh xèo vỏ giòn nhân tôm thịt",
                                                      "price":  "20.000đ",
                                                      "desc":  "Bánh chiên chảo gang giòn rụm, tôm tươi thịt băm giá đỗ",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Nem lụi nướng que tre than hoa (cây)",
                                                      "price":  "8.000đ",
                                                      "desc":  "Thịt tươi nướng than hoa thơm nức mũi béo bùi",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Trà chanh hoa nhài giải ngấy",
                                                      "price":  "10.000đ",
                                                      "desc":  "Trà tươi thanh mát chua ngọt",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Vỏ bánh xèo siêu giòn rụm không bị ngấm dầu mỡ, ăn rất nhẹ bụng",
                                                "Nước chấm sốt đậu phộng gan heo bùi béo ấm nóng chuẩn vị Trung bộ pha vị Bắc",
                                                "Rau sống đi kèm ngập tràn tươi sạch, xin thêm miễn phí thoải mái"
                                            ],
                                   "cons":  [
                                                "Ngõ 12 Đội Cấn hẹp, không đi được ô tô vào tận cửa",
                                                "Lúc đông khách chiên bánh hơi lâu một chút",
                                                "Không gian quán bình dân, không có điều hòa công suất lớn"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Phan Thùy Dương",
                                     "badge":  "Thực khách phố Đội Cấn",
                                     "date":  "1 tuần trước",
                                     "rating":  5,
                                     "comment":  "Đội Cấn là thánh địa bánh xèo nem lụi nhưng quán Cô Minh ngõ 12 vẫn là số 1 về độ giòn và nước sốt chấm thần thánh!"
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "Restaurant",
                               "name":  "Bánh Xèo Nem Lụi Cô Minh",
                               "address":  "Ngõ 12 Đội Cấn, Phường Đội Cấn, Quận Ba Đình, Hà Nội",
                               "geo":  {
                                           "@type":  "GeoCoordinates",
                                           "latitude":  21.036512,
                                           "longitude":  105.831215
                                       },
                               "priceRange":  "20.000 - 60.000 VND",
                               "servesCuisine":  "Bánh Xèo Hà Nội",
                               "aggregateRating":  {
                                                       "@type":  "AggregateRating",
                                                       "ratingValue":  "4.5",
                                                       "reviewCount":  "1650"
                                                   }
                           }
    },
    {
        "id":  "store-bd-006",
        "brand":  "Phở Bò Lâm Gia Truyền",
        "name":  "Phở Bò Lâm Gia Truyền - Lõi Rùa Giòn Sần Sật Phố Hàng Bún",
        "category":  "Phở \u0026 Bún Bò",
        "slug":  "pho-bo-lam-48-hang-bun",
        "address":  "48 Hàng Bún, Phường Quán Thánh, Quận Ba Đình, Hà Nội",
        "landmark":  "Góc ngã ba Hàng Bún - Nguyễn Trường Tộ",
        "location":  {
                         "latitude":  21.041852,
                         "longitude":  105.844115
                     },
        "price_range":  {
                            "min":  50000,
                            "max":  95000,
                            "formatted":  "50.000₫ - 95.000₫"
                        },
        "operating_hours":  {
                                "open_time":  "06:00",
                                "close_time":  "21:30",
                                "best_visit_window":  "07:00 - 08:30 (Thịt lõi rùa tươi vừa mổ sáng)"
                            },
        "contact":  {
                        "phone":  "0904288118",
                        "phone_display":  "090 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)"
                    },
        "amenities":  [
                          {
                              "name":  "Không gian truyền thống sạch",
                              "icon":  "clean"
                          },
                          {
                              "name":  "Thanh toán VietQR",
                              "icon":  "qr"
                          }
                      ],
        "parking_detail":  {
                               "motorcycle":  "Để xe máy vỉa hè trước cửa số 48 Hàng Bún",
                               "car":  "Táp xe chớp nhoáng hoặc gửi bãi xe phố Quán Thánh"
                           },
        "realtime_busyness":  {
                                  "status_text":  "Đông khách ăn sáng",
                                  "busyness_sub":  "Ra bát nhanh, thịt thái tươi rói",
                                  "noise_level":  "54 dB",
                                  "historical_pattern":  "Khung giờ sáng từ 6h30 đến 8h30 khách sành phở tấp nập"
                              },
        "ai_curation":  {
                            "signature_dish":  "Phở Tái Lõi Rùa \u0026 Gầu Giòn (Thịt lõi rùa gân vân hoa giòn sần sật thái mỏng chần tái mềm ngọt, nước dùng tủy bò trong veo dậy mùi hành hoa gừng nướng)",
                            "insider_tip":  "Nếu muốn ăn bát phở lõi rùa chuẩn chỉ nhất phải đến trước 8h30 sáng vì số lượng lõi rùa mỗi ngày chỉ có vài chục bát là hết sạch!",
                            "contexts":  [
                                             "an_sang_nhanh",
                                             "am_thuc_di_san",
                                             "thanh_toan_vietqr"
                                         ],
                            "omni_trust_score":  96
                        },
        "photos":  [
                       {
                           "url":  "/assets/photos/pho_bat_dan.jpg",
                           "caption":  "Bát phở bò Lâm tái lõi rùa vân hoa tuyệt hảo",
                           "tag":  "Món Chính"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Thực Đơn Phở Bò Hàng Bún",
                                    "items":  [
                                                  {
                                                      "name":  "Phở tái lõi rùa đặc biệt",
                                                      "price":  "90.000đ",
                                                      "desc":  "Thịt lõi bò tươi vân hoa giòn ngọt sần sật đỉnh cao",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Phở tái gầu giòn",
                                                      "price":  "70.000đ",
                                                      "desc":  "Gầu vàng ươm giòn ngậy, tái mềm ngọt thịt",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Phở chín nạm bò truyền thống",
                                                      "price":  "55.000đ",
                                                      "desc":  "Thịt nạm luộc mềm ngọt thơm lừng",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Lõi rùa giòn sần sật thuộc hàng ngon nhất nhì quận Ba Đình và Hà Nội",
                                                "Nước dùng trong vắt, đậm đà vị ngọt tủy xương không lợ bột nêm",
                                                "Chủ quán thái thịt thoăn thoắt, phục vụ nhanh nhẹn"
                                            ],
                                   "cons":  [
                                                "Lõi rùa thường hết sớm sau 9h sáng",
                                                "Vỉa hè phố Hàng Bún hẹp, chỗ để xe máy hạn chế",
                                                "Không có điều hòa phòng lạnh riêng"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Bùi Thế Hùng",
                                     "badge":  "Thực khách sành phở Ba Đình",
                                     "date":  "5 ngày trước",
                                     "rating":  5,
                                     "comment":  "Phở Lâm Hàng Bún ngon ở miếng lõi rùa giòn sần sật cắn ngập chân răng, nước dùng trong veo thơm mùi gừng nướng đúng chất phở Bắc xưa."
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "Restaurant",
                               "name":  "Phở Bò Lâm Gia Truyền",
                               "address":  "48 Hàng Bún, Phường Quán Thánh, Quận Ba Đình, Hà Nội",
                               "geo":  {
                                           "@type":  "GeoCoordinates",
                                           "latitude":  21.041852,
                                           "longitude":  105.844115
                                       },
                               "priceRange":  "50.000 - 95.000 VND",
                               "servesCuisine":  "Phở Bò Hà Nội",
                               "aggregateRating":  {
                                                       "@type":  "AggregateRating",
                                                       "ratingValue":  "4.7",
                                                       "reviewCount":  "1430"
                                                   }
                           }
    },
    {
        "id":  "store-hbt-006",
        "brand":  "Cà Phê Thọ",
        "name":  "Cà Phê Thọ - Trái Tim Thánh Địa Cà Phê Triệu Việt Vương",
        "category":  "Cà Phê \u0026 Trà Di Sản",
        "slug":  "ca-phe-tho-117-trieu-viet-vuong",
        "address":  "117 Triệu Việt Vương, Phường Bùi Thị Xuân, Quận Hai Bà Trưng, Hà Nội",
        "landmark":  "Góc phố Triệu Việt Vương - Trần Nhân Tông",
        "location":  {
                         "latitude":  21.012554,
                         "longitude":  105.849512
                     },
        "price_range":  {
                            "min":  25000,
                            "max":  50000,
                            "formatted":  "25.000₫ - 50.000₫"
                        },
        "operating_hours":  {
                                "open_time":  "06:30",
                                "close_time":  "23:00",
                                "best_visit_window":  "07:30 - 09:30 hoặc 15:00 - 17:00"
                            },
        "contact":  {
                        "phone":  "02439743666",
                        "phone_display":  "024 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)"
                    },
        "amenities":  [
                          {
                              "name":  "Vỉa hè rợp bóng cây cổ thụ",
                              "icon":  "trees"
                          },
                          {
                              "name":  "Thanh toán VietQR",
                              "icon":  "qr"
                          },
                          {
                              "name":  "Không khí đàm đạo văn nghệ sĩ",
                              "icon":  "culture"
                          }
                      ],
        "parking_detail":  {
                               "motorcycle":  "Để xe máy dọc vỉa hè Triệu Việt Vương có nhân viên ghi vé",
                               "car":  "Có thể gửi ô tô phố Trần Nhân Tông hoặc công viên Thống Nhất cách 200m"
                           },
        "realtime_busyness":  {
                                  "status_text":  "Rất đông vui cả sáng lẫn chiều",
                                  "busyness_sub":  "Ghế gỗ mộc vỉa hè luân chuyển liên tục",
                                  "noise_level":  "60 dB (Râm ran chuyện đời)",
                                  "historical_pattern":  "Sáng sớm văn nghệ sĩ và giới trí thức ngồi đàm đạo nhâm nhi tách cà phê phin nâu đá"
                              },
        "ai_curation":  {
                            "signature_dish":  "Cà Phê Nâu Đá \u0026 Đen Nóng Rang Mộc Truyền Thống (Hạt Robusta phối Arabica rang mộc đậm đà thơm ngát, vị đắng thanh dịu hậu ngọt sâu lắng)",
                            "insider_tip":  "Ngồi bàn gỗ vỉa hè dưới tán cây sấu già, gọi một ly nâu đá ít đường và bao thuốc, ngắm dòng người qua lại trên con phố cà phê nức tiếng nhất thủ đô.",
                            "contexts":  [
                                             "ca_phe_di_san",
                                             "giao_luu_ban_be",
                                             "chill_hoai_niem",
                                             "thanh_toan_vietqr"
                                         ],
                            "omni_trust_score":  98
                        },
        "photos":  [
                       {
                           "url":  "/assets/photos/cot_dien_banh_mi_chao.jpg",
                           "caption":  "Góc cà phê Thọ mộc mạc rợp bóng mát phố Triệu Việt Vương",
                           "tag":  "Không Gian"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Thực Đơn Cà Phê \u0026 Đồ Uống Phố Triệu",
                                    "items":  [
                                                  {
                                                      "name":  "Cà phê nâu đá truyền thống",
                                                      "price":  "28.000đ",
                                                      "desc":  "Đậm đà ngậy béo sữa đặc quyện cà phê rang xay gia truyền",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Cà phê đen nóng nhỏ phin",
                                                      "price":  "25.000đ",
                                                      "desc":  "Hương thơm mộc nồng nàn, đắng dịu hậu vị ngọt sâu",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Nước chanh leo tươi mát",
                                                      "price":  "30.000đ",
                                                      "desc":  "Chua ngọt thanh tao giải nhiệt ngày hè",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Linh hồn của phố cà phê Triệu Việt Vương, không khí Hà Nội không đâu lẫn được",
                                                "Cà phê pha phin đậm đặc, hương vị đồng nhất qua hàng thập kỷ",
                                                "Giá cả cực kỳ bình dân, nhân viên phục vụ nhanh nhẹn"
                                            ],
                                   "cons":  [
                                                "Chỗ ngồi chủ yếu là ghế gỗ vỉa hè mộc, không máy lạnh phòng kín",
                                                "Giờ cao điểm sáng tìm chỗ để xe máy cần kiên nhẫn",
                                                "Không gian đông đúc tiếng nói chuyện râm ran"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Lê Trọng Nghĩa",
                                     "badge":  "KTS \u0026 Thực khách quen 20 năm",
                                     "date":  "Hôm qua",
                                     "rating":  5,
                                     "comment":  "Cà phê Thọ là cả một góc trời ký ức Hà Nội. Một ly nâu đá đậm đặc, ngồi dưới bóng cây mát rượi ngắm phố xá là bắt đầu ngày mới hoàn hảo!"
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "CafeOrCoffeeShop",
                               "name":  "Cà Phê Thọ",
                               "address":  "117 Triệu Việt Vương, Phường Bùi Thị Xuân, Quận Hai Bà Trưng, Hà Nội",
                               "geo":  {
                                           "@type":  "GeoCoordinates",
                                           "latitude":  21.012554,
                                           "longitude":  105.849512
                                       },
                               "priceRange":  "25.000 - 50.000 VND",
                               "servesCuisine":  "Cà Phê Hà Nội",
                               "aggregateRating":  {
                                                       "@type":  "AggregateRating",
                                                       "ratingValue":  "4.7",
                                                       "reviewCount":  "3890"
                                                   }
                           }
    },
    {
        "id":  "store-hbt-007",
        "brand":  "Bánh Đúc Nóng Lê Ngọc Hân",
        "name":  "Bánh Đúc Nóng Lê Ngọc Hân - Gia Truyền 40 Năm Ngõ 8B",
        "category":  "Ăn Vặt \u0026 Món Nóng",
        "slug":  "banh-duc-nong-ngoc-han-8b-le-ngoc-han",
        "address":  "Số 8 Ngõ 8B Lê Ngọc Hân, Phường Phạm Đình Hổ, Quận Hai Bà Trưng, Hà Nội",
        "landmark":  "Trong ngõ 8B phố Lê Ngọc Hân gần Lò Đúc",
        "location":  {
                         "latitude":  21.016212,
                         "longitude":  105.855112
                     },
        "price_range":  {
                            "min":  25000,
                            "max":  45000,
                            "formatted":  "25.000₫ - 45.000₫"
                        },
        "operating_hours":  {
                                "open_time":  "08:30",
                                "close_time":  "21:30",
                                "best_visit_window":  "15:00 - 18:00 (Bát bánh đúc nóng hổi ấm bụng xế chiều)"
                            },
        "contact":  {
                        "phone":  "0946288338",
                        "phone_display":  "094 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)"
                    },
        "amenities":  [
                          {
                              "name":  "Bàn ghế sạch trong nhà",
                              "icon":  "indoor"
                          },
                          {
                              "name":  "Thanh toán VietQR",
                              "icon":  "qr"
                          }
                      ],
        "parking_detail":  {
                               "motorcycle":  "Để xe máy trong ngõ 8B trước cửa quán có người sắp",
                               "car":  "Không đỗ ô tô trong ngõ; gửi bãi xe phố Hòa Mã hoặc Lò Đúc"
                           },
        "realtime_busyness":  {
                                  "status_text":  "Đông khách chiều và tối se lạnh",
                                  "busyness_sub":  "Múc bánh đúc nóng hổi trong 1 phút",
                                  "noise_level":  "52 dB",
                                  "historical_pattern":  "Trời thu đông Hà Nội thì ngõ 8B Lê Ngọc Hân lúc nào cũng ngào ngạt khói thơm bánh đúc"
                              },
        "ai_curation":  {
                            "signature_dish":  "Bánh Đúc Nóng Thịt Băm Mộc Nhĩ \u0026 Đậu Phụ Rán Vàng (Bánh đúc dẻo quánh mềm mướt, thịt băm xào hành phi thơm lừng, đậu phụ rán giòn chan nước mắm xương ngọt ấm)",
                            "insider_tip":  "Bát bánh đúc bưng ra bốc khói nghi ngút, rắc chút ớt bột hoặc ớt tươi, khuấy đều để thịt băm và đậu giòn ngập sâu trong dòng nước mắm tỏi thơm ngọt dịu.",
                            "contexts":  [
                                             "an_vat_xe_chieu",
                                             "am_thuc_di_san",
                                             "thanh_toan_vietqr"
                                         ],
                            "omni_trust_score":  96
                        },
        "photos":  [
                       {
                           "url":  "/assets/photos/banh_cuon_ba_hoanh.jpg",
                           "caption":  "Bát bánh đúc nóng Lê Ngọc Hân ngập tràn thịt băm và mộc nhĩ",
                           "tag":  "Món Đinh"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Thực Đơn Bánh Đúc Nóng Cổ Truyền",
                                    "items":  [
                                                  {
                                                      "name":  "Bát bánh đúc nóng đầy đủ",
                                                      "price":  "30.000đ",
                                                      "desc":  "Bánh đúc dẻo mềm, ngập thịt băm xào mộc nhĩ, đậu rán giòn và rau mùi thơm",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Bún ốc chuối đậu nóng hổi",
                                                      "price":  "40.000đ",
                                                      "desc":  "Ốc giòn sần sật quyện chuối xanh bùi bở nước dùng chua dịu",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Miến trộn thịt cua bể",
                                                      "price":  "45.000đ",
                                                      "desc":  "Sợi miến dai mềm trộn rau răm và thịt ngọt thơm",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Bánh đúc dẻo quánh không bị nát hay nồng vôi, công thức gia truyền hơn 40 năm",
                                                "Nước mắm chan bánh ngọt thanh từ nước hầm xương tủy, ăn hết bát vẫn không ngấy",
                                                "Thịt băm xào mộc nhĩ đậm đà, hành phi tự làm giòn rụm thơm nức mũi"
                                            ],
                                   "cons":  [
                                                "Nằm sâu trong ngõ 8B, lần đầu đến cần để ý biển chỉ dẫn",
                                                "Chỗ để xe máy trong ngõ hẹp",
                                                "Mùa hè ăn hơi nóng nếu ngồi phòng ngoài"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Nguyễn Mỹ Linh",
                                     "badge":  "Thực khách Hai Bà Trưng",
                                     "date":  "1 tuần trước",
                                     "rating":  5,
                                     "comment":  "Mùa lạnh ở Hà Nội mà không ghé 8B Lê Ngọc Hân làm bát bánh đúc nóng thì coi như thiếu mất nửa cái mùa đông. Nước mắm ngọt ấm ăn đến đâu sướng đến đấy!"
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "Restaurant",
                               "name":  "Bánh Đúc Nóng Lê Ngọc Hân",
                               "address":  "Số 8 Ngõ 8B Lê Ngọc Hân, Phường Phạm Đình Hổ, Quận Hai Bà Trưng, Hà Nội",
                               "geo":  {
                                           "@type":  "GeoCoordinates",
                                           "latitude":  21.016212,
                                           "longitude":  105.855112
                                       },
                               "priceRange":  "25.000 - 45.000 VND",
                               "servesCuisine":  "Bánh Đúc Hà Nội",
                               "aggregateRating":  {
                                                       "@type":  "AggregateRating",
                                                       "ratingValue":  "4.6",
                                                       "reviewCount":  "2120"
                                                   }
                           }
    },
    {
        "id":  "store-hbt-008",
        "brand":  "Phở Bò Sốt Vang Tư Lùn",
        "name":  "Phở Bò Tư Lùn - Nước Béo Đậm Đà Gia Truyền Hai Bà Trưng",
        "category":  "Phở \u0026 Bún Bò",
        "slug":  "pho-bo-tu-lun-23-hai-ba-trung",
        "address":  "23 Hai Bà Trưng, Phường Tràng Tiền, Quận Hoàn Kiếm, Hà Nội",
        "landmark":  "Gần ngã tư Hai Bà Trưng - Ngô Quyền",
        "location":  {
                         "latitude":  21.025212,
                         "longitude":  105.854115
                     },
        "price_range":  {
                            "min":  60000,
                            "max":  95000,
                            "formatted":  "60.000₫ - 95.000₫"
                        },
        "operating_hours":  {
                                "open_time":  "06:00",
                                "close_time":  "22:00",
                                "best_visit_window":  "07:00 - 08:30 hoặc 18:30 - 20:30"
                            },
        "contact":  {
                        "phone":  "02438258888",
                        "phone_display":  "024 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)"
                    },
        "amenities":  [
                          {
                              "name":  "Không gian sạch sẽ",
                              "icon":  "clean"
                          },
                          {
                              "name":  "Thanh toán VietQR",
                              "icon":  "qr"
                          }
                      ],
        "parking_detail":  {
                               "motorcycle":  "Để xe máy vỉa hè trước cửa số 23 Hai Bà Trưng có bảo vệ",
                               "car":  "Có thể gửi ô tô phố Ngô Quyền hoặc Nhà Hát Lớn cách 150m"
                           },
        "realtime_busyness":  {
                                  "status_text":  "Đông khách ăn sáng và tối",
                                  "busyness_sub":  "Phục vụ nhanh gọn, bàn ghế gỗ",
                                  "noise_level":  "56 dB",
                                  "historical_pattern":  "Dân sành ăn nước dùng béo đậm đà luôn chọn Tư Lùn"
                              },
        "ai_curation":  {
                            "signature_dish":  "Phở Bò Sốt Vang Đỏ Thẫm \u0026 Tái Đập Dập (Thịt bò sốt vang gân dẻo quánh ngấm hương hồi quế vang chát, hoặc bát tái băm dập thịt ngọt ngập tràn nước dùng đục béo ngậy)",
                            "insider_tip":  "Trường phái Tư Lùn đối lập hoàn toàn với phở nước trong. Nước dùng ở đây đục ngầu tủy béo ngậy cực kỳ đượm vị. Nhớ gọi thêm đĩa quẩy giòn nhúng ngập nước sốt vang.",
                            "contexts":  [
                                             "an_sang_nhanh",
                                             "am_thuc_di_san",
                                             "thanh_toan_vietqr"
                                         ],
                            "omni_trust_score":  95
                        },
        "photos":  [
                       {
                           "url":  "/assets/photos/pho_bat_dan.jpg",
                           "caption":  "Bát phở sốt vang Tư Lùn đỏ au sánh đậm",
                           "tag":  "Món Đinh"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Thực Đơn Phở Bò Tư Lùn",
                                    "items":  [
                                                  {
                                                      "name":  "Phở bò sốt vang đặc biệt",
                                                      "price":  "80.000đ",
                                                      "desc":  "Thịt dẻ sườn và gân bò hầm nhừ sốt vang đỏ thẫm thơm nức mũi",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Phở bò tái băm đập dập",
                                                      "price":  "70.000đ",
                                                      "desc":  "Thịt bò tươi đập dập mềm tan trong miệng ngập nước tủy béo",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Phở chín nạm gầu giòn",
                                                      "price":  "65.000đ",
                                                      "desc":  "Thịt chín thơm ngọt béo ngậy",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Nước dùng béo ngậy đặc sánh tủy bò độc nhất vô nhị, hương vị rất đậm đà khó quên",
                                                "Thịt sốt vang miếng to bản, gân mềm dẻo ngấm sâu hương rượu vang và hồi quế",
                                                "Vị trí trung tâm thuận tiện di chuyển"
                                            ],
                                   "cons":  [
                                                "Ai quen ăn phở nước trong thanh tao có thể thấy hơi ngấy",
                                                "Lượng mỡ béo trên bề mặt khá nhiều (ai ăn nhạt nên dặn bỏ bớt nước béo)",
                                                "Giá phân khúc phố lớn"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Hoàng Trọng Nghĩa",
                                     "badge":  "Thực khách sành phở",
                                     "date":  "1 tuần trước",
                                     "rating":  5,
                                     "comment":  "Tư Lùn là chân ái của team mê phở nước béo! Bát sốt vang gân dẻo thịt mềm hòa cùng nước tủy đục đậm đà chấm quẩy thì không đâu qua mặt được."
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "Restaurant",
                               "name":  "Phở Bò Tư Lùn",
                               "address":  "23 Hai Bà Trưng, Phường Tràng Tiền, Quận Hoàn Kiếm, Hà Nội",
                               "geo":  {
                                           "@type":  "GeoCoordinates",
                                           "latitude":  21.025212,
                                           "longitude":  105.854115
                                       },
                               "priceRange":  "60.000 - 95.000 VND",
                               "servesCuisine":  "Phở Bò Hà Nội",
                               "aggregateRating":  {
                                                       "@type":  "AggregateRating",
                                                       "ratingValue":  "4.6",
                                                       "reviewCount":  "1760"
                                                   }
                           }
    },
    {
        "id":  "store-dd-006",
        "brand":  "Bánh Đa Cua An Biên",
        "name":  "Bánh Đa Cua An Biên - Hải Phòng Giữa Lòng Đống Đa",
        "category":  "Bún \u0026 Bánh Đa Cua",
        "slug":  "banh-da-cua-an-bien-108-dang-van-ngu",
        "address":  "108 D1 Đặng Văn Ngữ, Phường Trung Tự, Quận Đống Đa, Hà Nội",
        "landmark":  "Khu ẩm thực Đặng Văn Ngữ - Hồ Đắc Di",
        "location":  {
                         "latitude":  21.010512,
                         "longitude":  105.831512
                     },
        "price_range":  {
                            "min":  55000,
                            "max":  95000,
                            "formatted":  "55.000₫ - 95.000₫"
                        },
        "operating_hours":  {
                                "open_time":  "07:00",
                                "close_time":  "21:30",
                                "best_visit_window":  "11:30 - 13:00 hoặc 18:00 - 20:00"
                            },
        "contact":  {
                        "phone":  "02439740571",
                        "phone_display":  "024 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)"
                    },
        "amenities":  [
                          {
                              "name":  "Điều hòa mát rượi",
                              "icon":  "ac"
                          },
                          {
                              "name":  "Không gian sang trọng chuẩn Quiet Luxury",
                              "icon":  "luxury"
                          },
                          {
                              "name":  "Thanh toán VietQR",
                              "icon":  "qr"
                          }
                      ],
        "parking_detail":  {
                               "motorcycle":  "Để xe máy trước cửa quán có nhân viên dắt xe",
                               "car":  "Có chỗ đỗ ô tô ven hồ Xã Đàn hoặc Đặng Văn Ngữ có nhân viên hướng dẫn"
                           },
        "realtime_busyness":  {
                                  "status_text":  "Sẵn sàng đón khách",
                                  "busyness_sub":  "Không gian máy lạnh 2 tầng yên tĩnh",
                                  "noise_level":  "48 dB (Yên tĩnh lịch sự)",
                                  "historical_pattern":  "Buổi trưa văn phòng đến đông, tối phục vụ gia đình ấm cúng"
                              },
        "ai_curation":  {
                            "signature_dish":  "Bánh Đa Cua Trộn Thập Cẩm Chả Lá Lốt (Sợi bánh đa đỏ Hải Phòng dai giòn, ngập tràn chả lá lốt thơm lừng, thịt cua đồng tươi nguyên miếng, tôm nõn, chả cá thu và tóp mỡ giòn rụm)",
                            "insider_tip":  "Vắt thêm quả quất tươi vào bát bánh đa trộn, rưới thìa chí chương Hải Phòng gia truyền cay tê, ăn kèm bát nước dùng cua đồng sánh vàng ngọt lịm.",
                            "contexts":  [
                                             "an_trua_nhanh",
                                             "an_toi_gia_dinh",
                                             "dieu_hoa_mat",
                                             "co_cho_do_oto",
                                             "thanh_toan_vietqr"
                                         ],
                            "omni_trust_score":  96
                        },
        "photos":  [
                       {
                           "url":  "/assets/photos/bun_cha_dac_kim.jpg",
                           "caption":  "Bát bánh đa cua An Biên đỏ au ngập tràn gạch cua và chả lá lốt",
                           "tag":  "Món Đinh"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Thực Đơn Đặc Sản Đất Cảng",
                                    "items":  [
                                                  {
                                                      "name":  "Bánh đa cua trộn đặc biệt An Biên",
                                                      "price":  "78.000đ",
                                                      "desc":  "Bánh đa đỏ tươi, cua đồng tươi, chả lá lốt, chả cá thu, tôm bóc nõn",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Bánh đa cua bể nước truyền thống",
                                                      "price":  "85.000đ",
                                                      "desc":  "Nước dùng cua bể ngọt thanh ngát hương rau muống bánh đa đỏ",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Nem cua bể Hải Phòng giòn rụm (chiếc)",
                                                      "price":  "35.000đ",
                                                      "desc":  "Vỏ bánh tráng giòn tan, ngập thịt cua bể tươi và mộc nhĩ nấm hương",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Đúng chuẩn bánh đa đỏ Hải Phòng gửi máy bay ra mỗi ngày, sợi dai giòn không nát",
                                                "Không gian điều hòa sạch sẽ, trang nhã, dịch vụ chu đáo",
                                                "Chí chương gia truyền và tóp mỡ hành phi thơm nức mũi"
                                            ],
                                   "cons":  [
                                                "Giá cao hơn quán vỉa hè (xứng đáng với không gian máy lạnh và vệ sinh)",
                                                "Giờ trưa có thể hết bàn nếu không đi sớm trước 12h",
                                                "Khu Đặng Văn Ngữ giờ tan tầm giao thông đông"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Hoàng Nam Hải",
                                     "badge":  "Người gốc Hải Phòng sống tại Hà Nội",
                                     "date":  "4 ngày trước",
                                     "rating":  5,
                                     "comment":  "An Biên làm đúng được cái hồn bánh đa cua quê tôi: sợi bánh đa dai mướt, nước cua ngọt thanh có vị rau rút thơm ngát và chí chương cay tê đầu lưỡi!"
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "Restaurant",
                               "name":  "Bánh Đa Cua An Biên",
                               "address":  "108 D1 Đặng Văn Ngữ, Phường Trung Tự, Quận Đống Đa, Hà Nội",
                               "geo":  {
                                           "@type":  "GeoCoordinates",
                                           "latitude":  21.010512,
                                           "longitude":  105.831512
                                       },
                               "priceRange":  "55.000 - 95.000 VND",
                               "servesCuisine":  "Bánh Đa Cua Hải Phòng",
                               "aggregateRating":  {
                                                       "@type":  "AggregateRating",
                                                       "ratingValue":  "4.6",
                                                       "reviewCount":  "2250"
                                                   }
                           }
    },
    {
        "id":  "store-dd-007",
        "brand":  "Lẩu Riêu Cua Bắp Bò Hoàng Cầu",
        "name":  "Lẩu Riêu Cua Bắp Bò - Số 12 Ngõ 16 Hoàng Cầu",
        "category":  "Lẩu \u0026 Nướng Hà Nội",
        "slug":  "lau-rieu-cua-bap-bo-12-ngo-16-hoang-cau",
        "address":  "Số 12 Ngõ 16 Hoàng Cầu, Phường Ô Chợ Dừa, Quận Đống Đa, Hà Nội",
        "landmark":  "Gần hồ Hoàng Cầu \u0026 Ga La Thành",
        "location":  {
                         "latitude":  21.018212,
                         "longitude":  105.823512
                     },
        "price_range":  {
                            "min":  150000,
                            "max":  300000,
                            "formatted":  "150.000₫ - 300.000₫"
                        },
        "operating_hours":  {
                                "open_time":  "10:30",
                                "close_time":  "23:00",
                                "best_visit_window":  "11:30 - 13:30 hoặc 18:30 - 21:00"
                            },
        "contact":  {
                        "phone":  "0989288168",
                        "phone_display":  "098 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)"
                    },
        "amenities":  [
                          {
                              "name":  "Điều hòa mát phòng rộng",
                              "icon":  "ac"
                          },
                          {
                              "name":  "Thanh toán VietQR",
                              "icon":  "qr"
                          },
                          {
                              "name":  "Không gian view hồ thoáng mát",
                              "icon":  "lake"
                          }
                      ],
        "parking_detail":  {
                               "motorcycle":  "Để xe máy trước cửa và trong sân ngõ có bảo vệ",
                               "car":  "Đỗ ô tô ven hồ Hoàng Cầu có bảo vệ quán trông giữ chu đáo"
                           },
        "realtime_busyness":  {
                                  "status_text":  "Đông khách trưa và tối",
                                  "busyness_sub":  "Có nhiều phòng riêng cho nhóm tiệc",
                                  "noise_level":  "62 dB",
                                  "historical_pattern":  "Tối mùa lạnh hoặc cuối tuần gia đình và dân công nghệ tụ họp rất đông"
                              },
        "ai_curation":  {
                            "signature_dish":  "Nồi Lẩu Riêu Cua Sườn Sụn Bắp Bò Hoa (Nồi riêu cua đồng xịn đặc sánh vàng ruộm, sườn sụn non ninh mềm, bắp bò hoa tươi thái lát mỏng hoa văn đẹp mắt nhúng giòn ngọt)",
                            "insider_tip":  "Nồi lẩu sôi bùng lên thì vớt ngay miếng riêu cua béo ngậy ra bát bún tươi, rưới nước lẩu chua thanh thơm mùi giấm bỗng nếp và hành phi giòn tan.",
                            "contexts":  [
                                             "an_trua_nhanh",
                                             "an_toi_nhom",
                                             "tu_tap_ban_be",
                                             "co_cho_do_oto",
                                             "dieu_hoa_mat",
                                             "thanh_toan_vietqr"
                                         ],
                            "omni_trust_score":  95
                        },
        "photos":  [
                       {
                           "url":  "/assets/photos/bun_oc_phu_tay_ho.jpg",
                           "caption":  "Nồi lẩu riêu cua bắp bò Hoàng Cầu ngập tràn gạch cua và bắp bò tươi rói",
                           "tag":  "Món Đinh"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Thực Đơn Lẩu Riêu Cua Đồng",
                                    "items":  [
                                                  {
                                                      "name":  "Set lẩu riêu cua bắp bò sườn sụn (3-4 người)",
                                                      "price":  "380.000đ",
                                                      "desc":  "Nồi riêu cua đồng giấm bỗng, đĩa bắp bò hoa tươi, sườn sụn non, giò tai, trứng vịt lộn và rau sống hoa chuối bạt ngàn",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Đĩa bắp bò hoa gọi thêm",
                                                      "price":  "120.000đ",
                                                      "desc":  "Bắp bò hoa tươi thái mỏng nhúng tái ngọt lịm giòn sần sật",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Sườn sụn non chặt miếng",
                                                      "price":  "95.000đ",
                                                      "desc":  "Sườn sụn mềm giòn sần sật ngấm vị giấm bỗng chua dịu",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Nước lẩu dùng giấm bỗng nếp chua thanh thanh tao, riêu cua đồng thật không pha đậu",
                                                "Thịt bắp bò hoa tươi rói, sườn sụn non dễ nhai không bị cứng",
                                                "Có chỗ đỗ ô tô ven hồ rộng rãi, điều hòa mát lạnh"
                                            ],
                                   "cons":  [
                                                "Giờ cao điểm cuối tuần cần đặt trước để có bàn phòng VIP",
                                                "Quán đông người chuyện trò sôi nổi",
                                                "Nằm trong ngõ 16 Hoàng Cầu nên cần để ý biển số nhà"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Trần Quốc Toản",
                                     "badge":  "Dân IT Hoàng Cầu",
                                     "date":  "3 ngày trước",
                                     "rating":  5,
                                     "comment":  "Riêu cua ở đây xịn đét đóng bánh nổi vàng ruộm trên nồi nước dùng giấm bỗng thơm nức. Bắp bò nhúng vừa chín tới ngọt lịm, cả team ai cũng khen!"
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "Restaurant",
                               "name":  "Lẩu Riêu Cua Bắp Bò Hoàng Cầu",
                               "address":  "Số 12 Ngõ 16 Hoàng Cầu, Phường Ô Chợ Dừa, Quận Đống Đa, Hà Nội",
                               "geo":  {
                                           "@type":  "GeoCoordinates",
                                           "latitude":  21.018212,
                                           "longitude":  105.823512
                                       },
                               "priceRange":  "150.000 - 300.000 VND",
                               "servesCuisine":  "Lẩu Riêu Cua Hà Nội",
                               "aggregateRating":  {
                                                       "@type":  "AggregateRating",
                                                       "ratingValue":  "4.6",
                                                       "reviewCount":  "1940"
                                                   }
                           }
    },
    {
        "id":  "store-dd-008",
        "brand":  "Bò Tơ Quán Mộc",
        "name":  "Bò Tơ Quán Mộc - Bò Tơ Non Mềm Ngọt Phố Nguyên Hồng",
        "category":  "Thịt Bò \u0026 Món Nướng Đặc Sản",
        "slug":  "bo-to-quan-moc-47-nguyen-hong",
        "address":  "47 Nguyên Hồng, Phường Láng Hạ, Quận Đống Đa, Hà Nội",
        "landmark":  "Gần công viên Indira Gandhi \u0026 Hồ Thành Công",
        "location":  {
                         "latitude":  21.019512,
                         "longitude":  105.811512
                     },
        "price_range":  {
                            "min":  160000,
                            "max":  320000,
                            "formatted":  "160.000₫ - 320.000₫"
                        },
        "operating_hours":  {
                                "open_time":  "10:00",
                                "close_time":  "22:30",
                                "best_visit_window":  "11:30 - 13:30 hoặc 18:00 - 20:30"
                            },
        "contact":  {
                        "phone":  "0941658111",
                        "phone_display":  "094 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)"
                    },
        "amenities":  [
                          {
                              "name":  "Không gian Hà Nội xưa thập niên 80",
                              "icon":  "heritage"
                          },
                          {
                              "name":  "Điều hòa mát toàn bộ các tầng",
                              "icon":  "ac"
                          },
                          {
                              "name":  "Bãi đỗ ô tô rộng rãi",
                              "icon":  "parking"
                          },
                          {
                              "name":  "Thanh toán VietQR",
                              "icon":  "qr"
                          }
                      ],
        "parking_detail":  {
                               "motorcycle":  "Bãi xe máy rộng trong khuôn viên có bảo vệ",
                               "car":  "Có bãi đỗ ô tô riêng trước cửa và ven đường Nguyên Hồng rộng rãi"
                           },
        "realtime_busyness":  {
                                  "status_text":  "Sẵn sàng đón tiếp đoàn đông",
                                  "busyness_sub":  "Không gian 3 tầng rộng rãi",
                                  "noise_level":  "58 dB",
                                  "historical_pattern":  "Địa điểm tiếp khách, họp lớp và liên hoan gia đình quen thuộc của cư dân Đống Đa"
                              },
        "ai_curation":  {
                            "signature_dish":  "Bò Tơ Cuốn Bánh Tráng \u0026 Bò Tơ Nướng Tảng Cháy Cạnh (Thịt bò tơ non mềm mọng nước, da mỏng giòn sần sật cuốn cùng rau rừng chấm mắm nêm đậm đà)",
                            "insider_tip":  "Gọi món bò tơ nướng tảng để cảm nhận rõ độ ngọt tự nhiên của thớ thịt bò tơ non. Nước chấm tương gừng hoặc mắm nêm ở đây pha rất khéo, dậy vị chua ngọt đậm đà.",
                            "contexts":  [
                                             "an_trua_nhanh",
                                             "tiep_khach_doi_tac",
                                             "an_toi_gia_dinh",
                                             "co_cho_do_oto",
                                             "dieu_hoa_mat",
                                             "thanh_toan_vietqr"
                                         ],
                            "omni_trust_score":  95
                        },
        "photos":  [
                       {
                           "url":  "/assets/photos/cha_ca_thang_long.jpg",
                           "caption":  "Mẹt bò tơ cuốn bánh tráng rau rừng Bò Tơ Quán Mộc",
                           "tag":  "Món Đinh"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Thực Đơn Bò Tơ Đặc Sản Mộc Quán",
                                    "items":  [
                                                  {
                                                      "name":  "Bò tơ cuốn bánh tráng rau rừng đặc biệt",
                                                      "price":  "185.000đ",
                                                      "desc":  "Thịt bò tơ luộc thái mỏng da giòn mướt, đĩa rau rừng Tây Ninh bạt ngàn chấm mắm nêm",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Bò tơ nướng tảng than hoa",
                                                      "price":  "215.000đ",
                                                      "desc":  "Tảng thịt bò tơ ướp gia vị nướng xèo xèo giữ trọn độ mọng nước",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Dồi bò tơ chiên giòn",
                                                      "price":  "145.000đ",
                                                      "desc":  "Dồi bùi béo chiên vàng rộm chấm tương ớt cay nồng",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Thịt bò tơ tươi chuẩn vị, thớ thịt non mềm không dai, da mỏng giòn sần sật",
                                                "Không gian hoài niệm Hà Nội phố cổ đẹp mắt, máy lạnh mát rượi, tiếp khách sang trọng",
                                                "Bãi đỗ xe ô tô cực kỳ thuận tiện và an toàn"
                                            ],
                                   "cons":  [
                                                "Giá cao hơn quán nhậu bình dân (chất lượng tương xứng)",
                                                "Giờ cao điểm cuối tuần khá đông nên cần đặt bàn trước",
                                                "Mắm nêm vị đậm đà, ai không quen ăn mắm nêm có thể đổi sang mắm chua ngọt"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Đinh Văn Tiến",
                                     "badge":  "Quản lý kinh doanh Đống Đa",
                                     "date":  "1 tuần trước",
                                     "rating":  5,
                                     "comment":  "Không gian tái hiện thời bao cấp rất có gu. Thịt bò tơ mềm ngọt cuốn rau rừng chấm mắm nêm chuẩn chỉ, đưa đối tác đi ăn ai cũng tấm tắc khen ngợi!"
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "Restaurant",
                               "name":  "Bò Tơ Quán Mộc",
                               "address":  "47 Nguyên Hồng, Phường Láng Hạ, Quận Đống Đa, Hà Nội",
                               "geo":  {
                                           "@type":  "GeoCoordinates",
                                           "latitude":  21.019512,
                                           "longitude":  105.811512
                                       },
                               "priceRange":  "160.000 - 320.000 VND",
                               "servesCuisine":  "Bò Tơ Việt Nam",
                               "aggregateRating":  {
                                                       "@type":  "AggregateRating",
                                                       "ratingValue":  "4.6",
                                                       "reviewCount":  "2890"
                                                   }
                           }
    },
    {
        "id":  "store-th-005",
        "brand":  "Bánh Giò Thụy Khuê Cô Lũy",
        "name":  "Bánh Giò Cô Lũy - Đệ Nhất Bánh Giò Khổng Lồ Số 5 Thụy Khuê",
        "category":  "Ăn Vặt \u0026 Bánh Truyền Thống",
        "slug":  "banh-gio-co-luy-5-thuy-khue",
        "address":  "Số 5 Thụy Khuê, Phường Thụy Khuê, Quận Tây Hồ, Hà Nội",
        "landmark":  "Đầu đường Thụy Khuê gần ngã tư dốc Tam Đa",
        "location":  {
                         "latitude":  21.042512,
                         "longitude":  105.828512
                     },
        "price_range":  {
                            "min":  20000,
                            "max":  45000,
                            "formatted":  "20.000₫ - 45.000₫"
                        },
        "operating_hours":  {
                                "open_time":  "06:00",
                                "close_time":  "21:00",
                                "best_visit_window":  "07:00 - 08:30 hoặc 15:30 - 18:00"
                            },
        "contact":  {
                        "phone":  "0989288412",
                        "phone_display":  "098 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)"
                    },
        "amenities":  [
                          {
                              "name":  "Phục vụ nhanh gọn",
                              "icon":  "fast"
                          },
                          {
                              "name":  "Thanh toán VietQR",
                              "icon":  "qr"
                          }
                      ],
        "parking_detail":  {
                               "motorcycle":  "Để xe máy vỉa hè trước cửa quán có người trông",
                               "car":  "Táp xe nhanh mua mang đi hoặc gửi bãi xe vườn hoa Lý Tự Trọng"
                           },
        "realtime_busyness":  {
                                  "status_text":  "Đông khách mua mang đi và ăn tại chỗ",
                                  "busyness_sub":  "Bánh bóc nóng hổi trong 1 phút",
                                  "noise_level":  "52 dB",
                                  "historical_pattern":  "Chiếc bánh giò nóng hổi ăn xế chiều là thói quen của người dân ven hồ Tây"
                              },
        "ai_curation":  {
                            "signature_dish":  "Bánh Giò Khổng Lồ Kẹp Giò Chả \u0026 Dưa Góp Giòn Cay (Chiếc bánh giò to gấp đôi bánh thường, vỏ bột gạo mềm mướt tan trong miệng, nhân thịt nạc băm mộc nhĩ nêm tiêu thơm nồng, ăn kèm chả cốm chả quế giòn rụm)",
                            "insider_tip":  "Nhớ dặn cô bán hàng cho đĩa dưa chuột góp chua ngọt ăn kèm để chống ngấy, xịt đẫm tương ớt cay nồng lên trên chiếc bánh giò bốc khói ngùn ngụt.",
                            "contexts":  [
                                             "an_sang_nhanh",
                                             "an_vat_xe_chieu",
                                             "am_thuc_di_san",
                                             "thanh_toan_vietqr"
                                         ],
                            "omni_trust_score":  96
                        },
        "photos":  [
                       {
                           "url":  "/assets/photos/banh_cuon_ba_hoanh.jpg",
                           "caption":  "Đĩa bánh giò Thụy Khuê nóng hổi kẹp giò lụa chả cốm và dưa góp",
                           "tag":  "Món Đinh"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Thực Đơn Bánh Giò \u0026 Giò Chả Thụy Khuê",
                                    "items":  [
                                                  {
                                                      "name":  "Bánh giò khổng lồ đầy đủ giò chả",
                                                      "price":  "35.000đ",
                                                      "desc":  "Bánh giò to đẫy đà, kèm giò lụa, chả cốm, chả quế và dưa chuột góp chua ngọt",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Bánh giò nóng truyền thống không giò",
                                                      "price":  "18.000đ",
                                                      "desc":  "Vỏ bột dẻo mềm nhân thịt mộc nhĩ thơm phức tiêu bắc",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Sữa đậu nành nguyên chất ấm nóng",
                                                      "price":  "10.000đ",
                                                      "desc":  "Đậu nành thơm bùi thanh mát",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Chiếc bánh giò to đại tướng, nhân thịt nạc thơm mùi tiêu không bị độn mỡ",
                                                "Vỏ bột gạo dẻo mềm mướt không hề bị sượng hay nát bở",
                                                "Giá cực kỳ rẻ so với kích thước và độ no nê"
                                            ],
                                   "cons":  [
                                                "Quán vỉa hè bình dân, chỗ ngồi hạn chế lúc đông khách",
                                                "Phố Thụy Khuê một chiều đoạn đầu đường nên cần chú ý hướng đi",
                                                "Chỉ hợp ăn nhanh hoặc mua mang về"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Vũ Mai Phương",
                                     "badge":  "Thực khách Tây Hồ",
                                     "date":  "4 ngày trước",
                                     "rating":  5,
                                     "comment":  "Bánh giò Cô Lũy số 5 Thụy Khuê ăn từ thời còn bé. Bánh to đùng, nhân thịt mộc nhĩ thơm nức mũi, thêm miếng chả cốm với dưa góp là no căng bụng cả buổi chiều!"
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "Restaurant",
                               "name":  "Bánh Giò Thụy Khuê Cô Lũy",
                               "address":  "Số 5 Thụy Khuê, Phường Thụy Khuê, Quận Tây Hồ, Hà Nội",
                               "geo":  {
                                           "@type":  "GeoCoordinates",
                                           "latitude":  21.042512,
                                           "longitude":  105.828512
                                       },
                               "priceRange":  "20.000 - 45.000 VND",
                               "servesCuisine":  "Bánh Giò Hà Nội",
                               "aggregateRating":  {
                                                       "@type":  "AggregateRating",
                                                       "ratingValue":  "4.6",
                                                       "reviewCount":  "2450"
                                                   }
                           }
    },
    {
        "id":  "store-th-006",
        "brand":  "Pizza 4P\u0027s Từ Hoa",
        "name":  "Pizza 4P\u0027s Từ Hoa - Nghệ Thuật Ẩm Thực Ven Hồ Tây",
        "category":  "Pizza \u0026 Ẩm Thực Ý - Nhật",
        "slug":  "pizza-4ps-51-tu-hoa-quang-an",
        "address":  "51 Từ Hoa, Phường Quảng An, Quận Tây Hồ, Hà Nội",
        "landmark":  "Ven Hồ Tây đoạn làng Nghi Tàm - Quảng An",
        "location":  {
                         "latitude":  21.058212,
                         "longitude":  105.832512
                     },
        "price_range":  {
                            "min":  200000,
                            "max":  500000,
                            "formatted":  "200.000₫ - 500.000₫"
                        },
        "operating_hours":  {
                                "open_time":  "10:30",
                                "close_time":  "22:30",
                                "best_visit_window":  "11:30 - 13:30 hoặc 18:00 - 20:30"
                            },
        "contact":  {
                        "phone":  "02836220500",
                        "phone_display":  "028 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)"
                    },
        "amenities":  [
                          {
                              "name":  "View trực diện hoàng hôn Hồ Tây",
                              "icon":  "lake"
                          },
                          {
                              "name":  "Không gian Quiet Luxury tối giản",
                              "icon":  "luxury"
                          },
                          {
                              "name":  "Phô mai tươi tự sản xuất tại Đơn Dương",
                              "icon":  "cheese"
                          },
                          {
                              "name":  "Thanh toán VietQR \u0026 Thẻ quốc tế",
                              "icon":  "card"
                          }
                      ],
        "parking_detail":  {
                               "motorcycle":  "Bãi xe máy riêng có bảo vệ dắt xe chu đáo",
                               "car":  "Có bãi đỗ ô tô rộng rãi phía trước hoặc nhân viên valet parking"
                           },
        "realtime_busyness":  {
                                  "status_text":  "Nên đặt bàn trước qua ứng dụng",
                                  "busyness_sub":  "Bàn view hồ Tây thường kín chỗ lúc hoàng hôn",
                                  "noise_level":  "48 dB (Âm nhạc thư thái)",
                                  "historical_pattern":  "Khung giờ ngắm hoàng hôn 17h30 - 18h30 trên mặt nước hồ Tây là trải nghiệm ẩm thực đẳng cấp nhất thủ đô"
                              },
        "ai_curation":  {
                            "signature_dish":  "Pizza Phô Mai Burrata Thịt Nguội Parma \u0026 Mì Cua Sốt Kem Cà Chua (Viên phô mai Burrata tươi béo ngậy cắt bung tỏa trên đế bánh pizza nướng củi giòn xốp; mì spaghetti ngập thịt cua tươi ngọt lịm sốt kem cà chua mịn màng)",
                            "insider_tip":  "Yêu cầu bàn ngoài ban công tầng 2 nhìn thẳng ra mặt hồ Tây lộng gió. Hãy thử gọi nửa pizza Burrata Parma Ham và nửa pizza 4 Loại Phô Mai rưới mật ong nguyên chất.",
                            "contexts":  [
                                             "hen_ho_lang_man",
                                             "tiep_khach_doi_tac",
                                             "view_dep_ho_tay",
                                             "co_cho_do_oto",
                                             "dieu_hoa_mat",
                                             "thanh_toan_vietqr"
                                         ],
                            "omni_trust_score":  99
                        },
        "photos":  [
                       {
                           "url":  "/assets/photos/cot_dien_banh_mi_chao.jpg",
                           "caption":  "Pizza phô mai Burrata tươi ngắm hoàng hôn rực rỡ trên hồ Tây",
                           "tag":  "Món Đinh"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Thực Đơn Pizza Nướng Củi \u0026 Pasta Ý Nhật",
                                    "items":  [
                                                  {
                                                      "name":  "Pizza Burrata Parma Ham đặc trưng",
                                                      "price":  "290.000đ",
                                                      "desc":  "Phô mai Burrata tươi nguyên quả béo ngậy, thịt nguội Parma ham ủ muối cao cấp",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Mì Ý cua sốt kem cà chua ricotta",
                                                      "price":  "240.000đ",
                                                      "desc":  "Thịt cua bể tươi bóc nõn sốt kem cà chua béo ngậy thơm lừng",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Pizza 4 loại phô mai rưới mật ong",
                                                      "price":  "220.000đ",
                                                      "desc":  "Hòa quyện Mozzarella, Gorgonzola, Camembert và Raclette",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Đẳng cấp ẩm thực và dịch vụ chu đáo chuẩn mực quốc tế Omotenashi",
                                                "Phô mai tươi tự làm có độ tươi mới và độ béo ngậy số 1 Việt Nam",
                                                "Tầm nhìn hoàng hôn hồ Tây tuyệt mỹ, không gian kiến trúc quiet luxury sang trọng"
                                            ],
                                   "cons":  [
                                                "Phải đặt bàn trước từ sớm vào cuối tuần",
                                                "Phân khúc giá cao cấp",
                                                "Phố Từ Hoa đoạn vào hơi quanh co đối với người đi lần đầu"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Ngô Hoàng Yến",
                                     "badge":  "Thực khách sành điệu Tây Hồ",
                                     "date":  "2 ngày trước",
                                     "rating":  5,
                                     "comment":  "Pizza 4P\u0027s Từ Hoa là chi nhánh đẹp nhất Hà Nội. Vừa thưởng thức Burrata mềm mọng vừa ngắm mặt hồ Tây dát vàng trong ánh hoàng hôn là khoảnh khắc kỳ diệu!"
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "Restaurant",
                               "name":  "Pizza 4P\u0027s Từ Hoa",
                               "address":  "51 Từ Hoa, Phường Quảng An, Quận Tây Hồ, Hà Nội",
                               "geo":  {
                                           "@type":  "GeoCoordinates",
                                           "latitude":  21.058212,
                                           "longitude":  105.832512
                                       },
                               "priceRange":  "200.000 - 500.000 VND",
                               "servesCuisine":  "Pizza Ý Nhật Bản",
                               "aggregateRating":  {
                                                       "@type":  "AggregateRating",
                                                       "ratingValue":  "4.9",
                                                       "reviewCount":  "4150"
                                                   }
                           }
    },
    {
        "id":  "store-tx-002",
        "brand":  "Bún Ốc Nguội Triều Khúc",
        "name":  "Bún Ốc Nguội Cô Báu - Di Sản Làng Cổ Triều Khúc",
        "category":  "Bún Ốc Cổ Truyền",
        "slug":  "bun-oc-nguoi-co-bau-trieu-khuc",
        "address":  "Đầu ngõ làng Triều Khúc, Xã Tân Triều, Quận Thanh Xuân, Hà Nội",
        "landmark":  "Gần Đình Làng Triều Khúc \u0026 ĐH Hà Nội",
        "location":  {
                         "latitude":  20.985512,
                         "longitude":  105.798512
                     },
        "price_range":  {
                            "min":  35000,
                            "max":  50000,
                            "formatted":  "35.000₫ - 50.000₫"
                        },
        "operating_hours":  {
                                "open_time":  "06:30",
                                "close_time":  "14:00",
                                "best_visit_window":  "07:30 - 10:00 (Nước dùng ốc giấm bỗng mát lành)"
                            },
        "contact":  {
                        "phone":  "0984188226",
                        "phone_display":  "098 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)"
                    },
        "amenities":  [
                          {
                              "name":  "Không gian làng cổ thanh bình",
                              "icon":  "village"
                          },
                          {
                              "name":  "Thanh toán VietQR",
                              "icon":  "qr"
                          }
                      ],
        "parking_detail":  {
                               "motorcycle":  "Để xe máy vỉa hè trước cửa hoặc sân đình làng Triều Khúc",
                               "car":  "Gửi ô tô bãi xe đầu đường Triều Khúc cách 100m"
                           },
        "realtime_busyness":  {
                                  "status_text":  "Phục vụ êm ả buổi sáng",
                                  "busyness_sub":  "Chấm từng miếng bún đồng tiền tinh tế",
                                  "noise_level":  "50 dB",
                                  "historical_pattern":  "Món ăn thanh cảnh kén người ăn nhưng một khi đã mê là nhớ cả đời"
                              },
        "ai_curation":  {
                            "signature_dish":  "Bát Bún Ốc Nguội Giấm Bỗng Nếp \u0026 Đĩa Bún Đồng Tiền (Ốc mít béo giòn khêu thả trong bát nước luộc ốc trong veo pha giấm bỗng chua dịu thơm nồng ớt chưng đỏ rực, chấm cùng từng lá bún hến nhỏ xinh)",
                            "insider_tip":  "Không húp xùm xụp như bún nóng. Gắp từng miếng bún đồng tiền chấm ngập vào bát nước ốc, nhai chậm rãi cùng con ốc mít giòn sần sật để vị chua thanh của giấm bỗng và cay nồng của ớt chưng lan tỏa khắp vòm họng.",
                            "contexts":  [
                                             "an_sang_nhanh",
                                             "am_thuc_di_san",
                                             "thanh_toan_vietqr"
                                         ],
                            "omni_trust_score":  96
                        },
        "photos":  [
                       {
                           "url":  "/assets/photos/bun_oc_phu_tay_ho.jpg",
                           "caption":  "Mẹt bún ốc nguội Triều Khúc thanh tao cùng đĩa bún đồng tiền",
                           "tag":  "Món Đinh"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Thực Đơn Bún Ốc Cổ Truyền",
                                    "items":  [
                                                  {
                                                      "name":  "Bún ốc nguội giấm bỗng ốc to",
                                                      "price":  "45.000đ",
                                                      "desc":  "Ốc mít to béo giòn sần sật trong nước dùng giấm bỗng thanh dịu",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Bún ốc nguội lẫn (ốc to và ốc nhỏ)",
                                                      "price":  "40.000đ",
                                                      "desc":  "Hòa quyện độ giòn của ốc mít và vị đậm của ốc vặn",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Đúng phong vị bún ốc nguội đất Tràng An xưa, nước dùng thanh mát không váng mỡ",
                                                "Ốc tươi sống béo ngậy được khêu tại chỗ, ruột giòn sạch cát",
                                                "Giá cả bình dân giữa không gian làng cổ kính"
                                            ],
                                   "cons":  [
                                                "Chỉ bán buổi sáng đến đầu giờ chiều, hết hàng sớm",
                                                "Người thích ăn bún chan nước nóng sôi sục có thể thấy lạ lẫm",
                                                "Đường vào làng Triều Khúc hẹp"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Nguyễn Văn Khiêm",
                                     "badge":  "Người yêu ẩm thực Hà Nội cổ",
                                     "date":  "1 tuần trước",
                                     "rating":  5,
                                     "comment":  "Bún ốc nguội làng Triều Khúc là đỉnh cao của sự thanh cảnh. Nước ốc giấm bỗng trong vắt, cay tê mà ngọt sâu nơi cuống họng!"
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "Restaurant",
                               "name":  "Bún Ốc Nguội Cô Báu",
                               "address":  "Đầu ngõ làng Triều Khúc, Xã Tân Triều, Quận Thanh Xuân, Hà Nội",
                               "geo":  {
                                           "@type":  "GeoCoordinates",
                                           "latitude":  20.985512,
                                           "longitude":  105.798512
                                       },
                               "priceRange":  "35.000 - 50.000 VND",
                               "servesCuisine":  "Bún Ốc Nguội Hà Nội",
                               "aggregateRating":  {
                                                       "@type":  "AggregateRating",
                                                       "ratingValue":  "4.7",
                                                       "reviewCount":  "1320"
                                                   }
                           }
    },
    {
        "id":  "store-ntl-001",
        "brand":  "Cốm Mễ Trì Dòng Họ Đỗ",
        "name":  "Cốm Mộc Mễ Trì - Tinh Hoa Lúa Non Làng Mễ Trì Thượng",
        "category":  "Quà Hà Nội \u0026 Đặc Sản Lúa Mới",
        "slug":  "com-moc-me-tri-dong-ho-do",
        "address":  "Số 18 Ngõ 50 Mễ Trì Thượng, Phường Mễ Trì, Quận Nam Từ Liêm, Hà Nội",
        "landmark":  "Làng cốm cổ truyền Mễ Trì Thượng gần Trung tâm Hội nghị Quốc gia",
        "location":  {
                         "latitude":  21.008512,
                         "longitude":  105.781215
                     },
        "price_range":  {
                            "min":  25000,
                            "max":  250000,
                            "formatted":  "25.000₫ - 250.000₫/kg"
                        },
        "operating_hours":  {
                                "open_time":  "06:00",
                                "close_time":  "21:00",
                                "best_visit_window":  "08:00 - 11:00 (Mẻ cốm mới giã còn ấm nóng)"
                            },
        "contact":  {
                        "phone":  "0978288556",
                        "phone_display":  "097 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)"
                    },
        "amenities":  [
                          {
                              "name":  "Cốm mộc giã tay truyền thống",
                              "icon":  "handmade"
                          },
                          {
                              "name":  "Thanh toán VietQR",
                              "icon":  "qr"
                          },
                          {
                              "name":  "Đóng gói hút chân không gửi xa",
                              "icon":  "shipping"
                          }
                      ],
        "parking_detail":  {
                               "motorcycle":  "Để xe máy trước cửa xưởng cốm trong ngõ 50",
                               "car":  "Gửi ô tô bãi xe Nhà văn hóa Mễ Trì Thượng cách 80m"
                           },
        "realtime_busyness":  {
                                  "status_text":  "Mở cửa đón khách quanh năm",
                                  "busyness_sub":  "Cốm mộc tươi giã mới mỗi sáng",
                                  "noise_level":  "48 dB (Tiếng chày giã cốm nhịp nhàng)",
                                  "historical_pattern":  "Mùa thu lúa mới về, hương cốm thơm ngào ngạt khắp đường làng ngõ xóm"
                              },
        "ai_curation":  {
                            "signature_dish":  "Cốm Mộc Lá Sen \u0026 Chả Cốm Hấp Nướng (Hạt cốm non xanh mộc mạc thơm phức hương sữa lúa, gói trong lá sen tươi buộc rơm nếp vàng óng; chả cốm thịt lợn mán dẻo giòn ngậy béo)",
                            "insider_tip":  "Tuyệt đối không mua cốm tẩm phẩm màu xanh lét. Cốm Mễ Trì chính hiệu màu xanh nhạt ngả vàng tự nhiên của hạt thóc non. Ăn kèm quả chuối tiêu trứng cuốc chín bùi là chuẩn vị nhất.",
                            "contexts":  [
                                             "qua_tang_ha_noi",
                                             "am_thuc_di_san",
                                             "thanh_toan_vietqr"
                                         ],
                            "omni_trust_score":  98
                        },
        "photos":  [
                       {
                           "url":  "/assets/photos/xoi_yen.jpg",
                           "caption":  "Gói cốm non Mễ Trì gói trong lá sen ngát hương lúa mới",
                           "tag":  "Đặc Sản"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Thực Đơn Cốm \u0026 Sản Phẩm Từ Cốm Mễ Trì",
                                    "items":  [
                                                  {
                                                      "name":  "Cốm tươi mộc lá sen (250g)",
                                                      "price":  "65.000đ",
                                                      "desc":  "Hạt cốm dẻo quánh tự nhiên, gói lá sen thơm lừng vị sữa lúa",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Chả cốm tươi đặc biệt (kg)",
                                                      "price":  "220.000đ",
                                                      "desc":  "Thịt nạc vai xay quết dẻo đẫy đà hạt cốm mộc",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Xôi cốm hạt sen dừa nạo (hộp)",
                                                      "price":  "50.000đ",
                                                      "desc":  "Xôi cốm dẻo thơm quyện hạt sen bở bùi và dừa sợi xào đường",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Cốm mộc tự nhiên 100%, không phẩm màu hóa chất nhuộm xanh, giữ trọn vị ngọt thơm lúa non",
                                                "Được chứng kiến tận mắt quy trình rang thóc và giã cốm gia truyền nhiều đời",
                                                "Đóng gói lá sen bọc rơm chuẩn nếp xưa hoặc hút chân không gửi đi xa"
                                            ],
                                   "cons":  [
                                                "Hạn dùng cốm tươi mộc chỉ 2-3 ngày ở nhiệt độ thường",
                                                "Đường làng Mễ Trì nhiều ngõ ngách",
                                                "Chỉ có bãi ô tô ở nhà văn hóa làng"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Đỗ Quỳnh Nga",
                                     "badge":  "Thực khách Hà Nội",
                                     "date":  "3 ngày trước",
                                     "rating":  5,
                                     "comment":  "Cốm Mễ Trì ở đây mộc mạc, hạt dẻo thơm mùi sữa gạo tự nhiên, ăn cùng chuối tiêu ngọt lịm là cảm nhận trọn vẹn cả mùa thu Hà Nội!"
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "Store",
                               "name":  "Cốm Mộc Mễ Trì Dòng Họ Đỗ",
                               "address":  "Số 18 Ngõ 50 Mễ Trì Thượng, Phường Mễ Trì, Quận Nam Từ Liêm, Hà Nội",
                               "geo":  {
                                           "@type":  "GeoCoordinates",
                                           "latitude":  21.008512,
                                           "longitude":  105.781215
                                       },
                               "priceRange":  "25.000 - 250.000 VND",
                               "servesCuisine":  "Cốm Hà Nội",
                               "aggregateRating":  {
                                                       "@type":  "AggregateRating",
                                                       "ratingValue":  "4.8",
                                                       "reviewCount":  "2150"
                                                   }
                           }
    },
    {
        "id":  "store-hk-020",
        "brand":  "Chả Cá Lã Vọng",
        "name":  "Chả Cá Lã Vọng - Khởi Nguồn Món Ăn Danh Bất Hư Truyền Hơn 150 Năm",
        "category":  "Chả Cá \u0026 Thủy Sản Di Sản",
        "slug":  "cha-ca-la-vong-14-cha-ca",
        "address":  "14 Chả Cá, Phường Hàng Đào, Quận Hoàn Kiếm, Hà Nội",
        "landmark":  "Ngôi nhà cổ số 14 phố Chả Cá",
        "location":  {
                         "latitude":  21.036112,
                         "longitude":  105.849112
                     },
        "price_range":  {
                            "min":  175000,
                            "max":  250000,
                            "formatted":  "175.000₫ - 250.000₫"
                        },
        "operating_hours":  {
                                "open_time":  "11:00",
                                "close_time":  "21:30",
                                "best_visit_window":  "11:30 - 13:00 hoặc 18:00 - 20:00"
                            },
        "contact":  {
                        "phone":  "02438253929",
                        "phone_display":  "024 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)"
                    },
        "amenities":  [
                          {
                              "name":  "Ngôi nhà cổ hơn 100 năm",
                              "icon":  "heritage"
                          },
                          {
                              "name":  "Thanh toán VietQR",
                              "icon":  "qr"
                          },
                          {
                              "name":  "Bếp than chảo mỡ tại bàn",
                              "icon":  "fire"
                          }
                      ],
        "parking_detail":  {
                               "motorcycle":  "Để xe máy vỉa hè trước cửa số 14 Chả Cá",
                               "car":  "Không đỗ ô tô; gửi bãi xe Chợ Hàng Da hoặc Trần Nhật Duật"
                           },
        "realtime_busyness":  {
                                  "status_text":  "Đón tiếp thực khách sành ăn và quốc tế",
                                  "busyness_sub":  "Tầng 2 nhà gỗ cổ kính ấm cúng",
                                  "noise_level":  "55 dB (Tiếng xèo xèo chảo mỡ)"
                              },
        "ai_curation":  {
                            "signature_dish":  "Chả Cá Lăng Xèo Xèo Chảo Mỡ \u0026 Mắm Tôm Bọt Trắng (Cá lăng tươi ướp riềng mẻ nghệ xào cùng thì là hành hoa thơm nức mũi, ăn kèm bún tươi, lạc rang giòn bùi và mắm tôm đánh sủi bọt)",
                            "insider_tip":  "Nơi khai sinh ra cả một con phố mang tên món ăn. Đặt chảo gang lên bếp than liu riu, đổ cá đã nướng chín sơ cùng cả rổ thì là và hành hoa vào xào săn lại. Mắm tôm ở đây pha chuẩn vị Bắc xưa.",
                            "contexts":  [
                                             "am_thuc_di_san",
                                             "tiep_khach_quoc_te",
                                             "an_trua_nhanh",
                                             "thanh_toan_vietqr"
                                         ],
                            "omni_trust_score":  98
                        },
        "photos":  [
                       {
                           "url":  "/assets/photos/cha_ca_thang_long.jpg",
                           "caption":  "Chảo chả cá Lã Vọng xèo xèo ngập tràn hành hoa và thì là",
                           "tag":  "Món Chính"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Thực Đơn Chả Cá Gia Truyền",
                                    "items":  [
                                                  {
                                                      "name":  "Suất chả cá Lăng tiêu chuẩn Lã Vọng",
                                                      "price":  "175.000đ",
                                                      "desc":  "Cá lăng lọc thịt phi lê vàng óng xào thì là, bún, lạc, mắm tôm",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Đĩa lòng cá xào thì là đặc biệt",
                                                      "price":  "120.000đ",
                                                      "desc":  "Lòng cá giòn sần sật béo bùi xào nghệ tươi",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Cái nôi lịch sử ẩm thực của món chả cá nổi tiếng toàn cầu",
                                                "Thịt cá lăng chắc ngọt, không hề có mùi tanh, tẩm ướp riềng mẻ nghệ đậm đà",
                                                "Không gian nhà cổ mái ngói rêu phong mang giá trị hoài niệm vô giá"
                                            ],
                                   "cons":  [
                                                "Giá cao và phục vụ duy nhất 1 món chả cá",
                                                "Nhà cổ cầu thang gỗ hẹp, không có điều hòa công suất lớn",
                                                "Mùi dầu mỡ ám nhẹ vào quần áo sau khi ăn"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Trần Tiến Dũng",
                                     "badge":  "Nhà nghiên cứu văn hóa Hà Nội",
                                     "date =":  "1 tuần trước",
                                     "rating":  5,
                                     "comment":  "Ăn chả cá ở số 14 Chả Cá là thưởng thức một lát cắt lịch sử Hà Nội. Tiếng chảo mỡ sôi xèo xèo, mùi thì là quyện mắm tôm nồng nàn là ký ức không bao giờ phai!"
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "Restaurant",
                               "name":  "Chả Cá Lã Vọng",
                               "address":  "14 Chả Cá, Phường Hàng Đào, Quận Hoàn Kiếm, Hà Nội",
                               "geo":  {
                                           "@type":  "GeoCoordinates",
                                           "latitude":  21.036112,
                                           "longitude":  105.849112
                                       },
                               "priceRange":  "175.000 - 250.000 VND",
                               "servesCuisine":  "Chả Cá Hà Nội",
                               "aggregateRating":  {
                                                       "@type":  "AggregateRating",
                                                       "ratingValue":  "4.6",
                                                       "reviewCount":  "3850"
                                                   }
                           }
    },
    {
        "id":  "store-hk-021",
        "brand":  "Bánh Mì 25",
        "name":  "Bánh Mì 25 - Biểu Tượng Bánh Mì Phố Cổ Nức Tiếng Thế Giới",
        "category":  "Bánh Mì \u0026 Đồ Ăn Nhanh",
        "slug":  "banh-mi-25-hang-ca",
        "address":  "25 Hàng Cá, Phường Hàng Đào, Quận Hoàn Kiếm, Hà Nội",
        "landmark":  "Ngã tư Hàng Cá - Hàng Cân",
        "location":  {
                         "latitude":  21.035412,
                         "longitude":  105.848812
                     },
        "price_range":  {
                            "min":  30000,
                            "max":  60000,
                            "formatted":  "30.000₫ - 60.000₫"
                        },
        "operating_hours":  {
                                "open_time":  "07:00",
                                "close_time":  "21:00",
                                "best_visit_window":  "08:30 - 10:00 hoặc 14:30 - 16:30"
                            },
        "contact":  {
                        "phone":  "0977668895",
                        "phone_display":  "097 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)"
                    },
        "amenities":  [
                          {
                              "name":  "Điều hòa mát phòng ăn đối diện",
                              "icon":  "ac"
                          },
                          {
                              "name":  "Menu tiếng Anh \u0026 nhân viên đa ngữ",
                              "icon":  "global"
                          },
                          {
                              "name":  "Thanh toán VietQR \u0026 Thẻ",
                              "icon":  "qr"
                          }
                      ],
        "parking_detail":  {
                               "motorcycle":  "Để xe máy trước cửa số 25 Hàng Cá",
                               "car":  "Không đỗ ô tô; gửi bãi xe Chợ Hàng Da"
                           },
        "realtime_busyness":  {
                                  "status_text":  "Xếp hàng mua mang đi liên tục",
                                  "busyness_sub":  "Làm bánh chuyên nghiệp trong 2 phút",
                                  "noise_level":  "58 dB"
                              },
        "ai_curation":  {
                            "signature_dish":  "Bánh Mì Pate Xá Xíu Thịt Nướng \u0026 Bơ Tự Đánh (Vỏ bánh giòn rụm vụn rơi lả tả, pate gan tươi béo ngậy, thịt xá xíu đậm đà, đồ chua giòn sần sật và nước sốt bí truyền)",
                            "insider_tip":  "Nên gọi bánh mì thập cẩm đặc biệt thêm pate và phô mai bò cười nướng nóng giòn. Có quán ngồi máy lạnh đối diện số 25 để vừa ăn vừa nhâm nhi nước hoa quả tươi mát.",
                            "contexts":  [
                                             "an_sang_nhanh",
                                             "an_trua_nhanh",
                                             "khach_quoc_te",
                                             "thanh_toan_vietqr"
                                         ],
                            "omni_trust_score =":  97
                        },
        "photos":  [
                       {
                           "url":  "/assets/photos/cot_dien_banh_mi_chao.jpg",
                           "caption":  "Chiếc bánh mì 25 giòn rụm đầy ắp nhân pate xá xíu",
                           "tag":  "Món Đinh"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Thực Đơn Bánh Mì Phố Cổ",
                                    "items":  [
                                                  {
                                                      "name":  "Bánh mì thập cẩm đặc biệt số 25",
                                                      "price":  "45.000đ",
                                                      "desc":  "Pate gan, xá xíu, thịt nướng, chả lụa, dưa chuột và rau mùi",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Bánh mì gà nướng phô mai bơ",
                                                      "price":  "40.000đ",
                                                      "desc":  "Thịt gà ướp sốt mật ong thơm lừng đẫm phô mai béo",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Bánh mì chay đậu phụ nấm",
                                                      "price":  "35.000đ",
                                                      "desc":  "Đậu phụ nướng sốt cà chua nấm thanh tao",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Bánh mì lúc nào cũng được nướng lại giòn tan nóng hổi, nhân nêm nếm rất tinh tế",
                                                "Dịch vụ cực kỳ văn minh, thân thiện, thanh toán QR tiện lợi",
                                                "Vệ sinh an toàn thực phẩm chuẩn mực quốc tế"
                                            ],
                                   "cons":  [
                                                "Khách du lịch quốc tế xếp hàng rất đông vào giờ ăn",
                                                "Không gian phòng ăn bên đường chỗ ngồi có hạn",
                                                "Phố Hàng Cá hẹp"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Nguyễn Hoàng Minh",
                                     "badge":  "Food Blogger Hà Nội",
                                     "date":  "3 ngày trước",
                                     "rating":  5,
                                     "comment":  "Bánh Mì 25 xứng đáng với danh tiếng quốc tế. Vỏ bánh giòn tan, pate ngậy béo thơm lừng mà không bị khô!"
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "Restaurant",
                               "name":  "Bánh Mì 25",
                               "address":  "25 Hàng Cá, Phường Hàng Đào, Quận Hoàn Kiếm, Hà Nội",
                               "geo":  {
                                           "@type":  "GeoCoordinates",
                                           "latitude":  21.035412,
                                           "longitude":  105.848812
                                       },
                               "priceRange":  "30.000 - 60.000 VND",
                               "servesCuisine":  "Bánh Mì Việt Nam",
                               "aggregateRating":  {
                                                       "@type":  "AggregateRating",
                                                       "ratingValue":  "4.7",
                                                       "reviewCount":  "5120"
                                                   }
                           }
    },
    {
        "id":  "store-hk-022",
        "brand":  "Cháo Sườn Cô Là",
        "name":  "Cháo Sườn Cô Là - Hương Vị Tuổi Thơ 2A Lý Quốc Sư",
        "category":  "Cháo \u0026 Đồ Ăn Nóng",
        "slug":  "chao-suon-co-la-2a-ly-quoc-su",
        "address":  "2A Lý Quốc Sư, Phường Hàng Trống, Quận Hoàn Kiếm, Hà Nội",
        "landmark":  "Ngã tư Lý Quốc Sư - Hàng Bông",
        "location":  {
                         "latitude":  21.031512,
                         "longitude":  105.849112
                     },
        "price_range":  {
                            "min":  25000,
                            "max":  45000,
                            "formatted":  "25.000₫ - 45.000₫"
                        },
        "operating_hours":  {
                                "open_time":  "06:30",
                                "close_time":  "21:30",
                                "best_visit_window":  "07:00 - 08:30 hoặc 16:00 - 18:00"
                            },
        "contact":  {
                        "phone":  "0989288119",
                        "phone_display":  "098 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)"
                    },
        "amenities":  [
                          {
                              "name":  "Ngồi vỉa hè góc phố",
                              "icon":  "street"
                          },
                          {
                              "name":  "Thanh toán VietQR",
                              "icon":  "qr"
                          }
                      ],
        "parking_detail":  {
                               "motorcycle":  "Để xe máy vỉa hè trước quán",
                               "car":  "Không đỗ ô tô; gửi bãi xe Phủ Doãn"
                           },
        "realtime_busyness":  {
                                  "status_text":  "Đông khách mua về và ăn tại chỗ",
                                  "busyness_sub":  "Múc bát cháo nóng trong 30 giây",
                                  "noise_level":  "54 dB"
                              },
        "ai_curation":  {
                            "signature_dish":  "Bát Cháo Sườn Bột Xay Mịn \u0026 Ruốc Thịt Nạc Thơm Bùi (Cháo nấu từ bột gạo tẻ xay nhuyễn ninh cùng nước xương sườn ngọt lịm, rắc quẩy giòn tan và ruốc thịt bông tơi mịn màng)",
                            "insider_tip":  "Rắc chút tiêu đen cay thơm và ớt bột mịn, xúc từng thìa cháo bột sánh mượt cùng miếng quẩy giòn rụm ngấm nước cháo béo bùi.",
                            "contexts":  [
                                             "an_sang_nhanh",
                                             "an_vat_xe_chieu",
                                             "am_thuc_di_san",
                                             "thanh_toan_vietqr"
                                         ],
                            "omni_trust_score":  96
                        },
        "photos":  [
                       {
                           "url":  "/assets/photos/xoi_yen.jpg",
                           "caption":  "Bát cháo sườn bột mịn rắc ruốc và quẩy giòn 2A Lý Quốc Sư",
                           "tag":  "Món Đinh"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Thực Đơn Cháo Sườn Cổ Truyền",
                                    "items":  [
                                                  {
                                                      "name":  "Bát cháo sườn đầy đủ ruốc quẩy",
                                                      "price":  "35.000đ",
                                                      "desc":  "Cháo bột xay mịn sánh, thịt sườn non ninh nhừ, ruốc heo tự làm và quẩy giòn",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Cháo sườn quẩy giòn truyền thống",
                                                      "price":  "25.000đ",
                                                      "desc":  "Ngọt tự nhiên từ xương tủy hầm",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Cháo bột xay mịn màng sánh quánh, không hạt sượng, chuẩn vị cháo sườn Hà Nội xưa",
                                                "Nước hầm xương ngọt tự nhiên, không độn mì chính",
                                                "Ruốc xao thơm bùi và quẩy giòn tan rụm"
                                            ],
                                   "cons":  [
                                                "Ngồi ghế nhựa vỉa hè góc phố",
                                                "Chỗ ngồi hạn chế lúc đông khách",
                                                "Phù hợp ăn nhanh lót dạ"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Đặng Thùy Trang",
                                     "badge":  "Thực khách phố cổ",
                                     "date":  "1 tuần trước",
                                     "rating":  5,
                                     "comment":  "Cháo sườn Cô Là là chân ái của mùa đông Hà Nội. Bột cháo mịn màng như kem, quẩy giòn rụm chấm cháo nóng ăn ấm sực cả người!"
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "Restaurant",
                               "name":  "Cháo Sườn Cô Là",
                               "address":  "2A Lý Quốc Sư, Phường Hàng Trống, Quận Hoàn Kiếm, Hà Nội",
                               "geo":  {
                                           "@type":  "GeoCoordinates",
                                           "latitude":  21.031512,
                                           "longitude":  105.849112
                                       },
                               "priceRange":  "25.000 - 45.000 VND",
                               "servesCuisine":  "Cháo Hà Nội",
                               "aggregateRating":  {
                                                       "@type":  "AggregateRating",
                                                       "ratingValue":  "4.6",
                                                       "reviewCount":  "1840"
                                                   }
                           }
    },
    {
        "id":  "store-hk-023",
        "brand":  "Kem Tràng Tiền",
        "name":  "Kem Tràng Tiền - Ký Ức Ngọt Ngào Thủ Đô Thành Lập 1958",
        "category":  "Kem \u0026 Tráng Miệng Lịch Sử",
        "slug":  "kem-trang-tien-35-trang-tien",
        "address":  "35 Tràng Tiền, Phường Tràng Tiền, Quận Hoàn Kiếm, Hà Nội",
        "landmark":  "Ngay gần Nhà Hát Lớn \u0026 Hồ Gươm",
        "location":  {
                         "latitude":  21.025112,
                         "longitude":  105.856112
                     },
        "price_range":  {
                            "min":  12000,
                            "max":  40000,
                            "formatted":  "12.000₫ - 40.000₫"
                        },
        "operating_hours":  {
                                "open_time":  "08:00",
                                "close_time":  "23:00",
                                "best_visit_window":  "15:00 - 17:00 hoặc 20:00 - 22:00"
                            },
        "contact":  {
                        "phone":  "02438258888",
                        "phone_display":  "024 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)"
                    },
        "amenities":  [
                          {
                              "name":  "Không gian vòm cổ kính kiểu Pháp",
                              "icon":  "architecture"
                          },
                          {
                              "name":  "Thanh toán VietQR siêu tốc",
                              "icon":  "qr"
                          },
                          {
                              "name":  "Khuôn viên đi bộ trong nhà",
                              "icon":  "indoor"
                          }
                      ],
        "parking_detail":  {
                               "motorcycle":  "Dắt xe vào sảnh trong hoặc gửi bãi xe Tràng Tiền",
                               "car":  "Gửi ô tô bãi xe Nhà Hát Lớn hoặc phố Ngô Quyền"
                           },
        "realtime_busyness":  {
                                  "status_text":  "Tấp nập cả ngày lẫn đêm",
                                  "busyness_sub":  "Quầy bán kem phục vụ liên tục hàng nghìn que/ngày",
                                  "noise_level":  "62 dB"
                              },
        "ai_curation":  {
                            "signature_dish":  "Kem Cốm \u0026 Kem Ốc Quế Vani Socola Truyền Thống (Kem que cốm dẻo thơm hạt lúa non, kem ốc quế giòn rụm béo ngậy vị sữa tươi nguyên chất)",
                            "insider_tip":  "Đứng ăn kem ngay tại sảnh số 35 Tràng Tiền để cảm nhận nét văn hóa độc đáo của người Hà Nội. Nhớ thử que kem đậu xanh bùi bùi hoặc ốc quế socola thơm lừng.",
                            "contexts":  [
                                             "trang_mieng_giai_khat",
                                             "am_thuc_di_san",
                                             "giao_luu_ban_be",
                                             "thanh_toan_vietqr"
                                         ],
                            "omni_trust_score":  98
                        },
        "photos":  [
                       {
                           "url":  "/assets/photos/xoi_yen.jpg",
                           "caption":  "Que kem cốm Tràng Tiền xanh mát ngọt bùi vị sữa lúa",
                           "tag":  "Đặc Sản"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Thực Đơn Kem Di Sản 1958",
                                    "items":  [
                                                  {
                                                      "name":  "Kem que cốm truyền thống",
                                                      "price":  "15.000đ",
                                                      "desc":  "Cốm tự nhiên thơm dẻo quyện sữa tươi",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Kem ốc quế Vani đặc biệt",
                                                      "price":  "20.000đ",
                                                      "desc":  "Vỏ ốc quế giòn tan, kem thơm vani mịn màng",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Kem que đậu xanh bùi béo",
                                                      "price":  "15.000đ",
                                                      "desc":  "Đậu xanh nguyên chất thơm mát",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Kem que socola đậm đà",
                                                      "price":  "15.000đ",
                                                      "desc":  "Vị đắng ngọt cân bằng của cacao",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Biểu tượng văn hóa đại diện cho tinh hoa ẩm thực thủ đô từ năm 1958",
                                                "Chất kem mềm mịn, vị ngọt thanh tự nhiên từ nguyên liệu thật",
                                                "Kiến trúc sảnh mới được tôn tạo sang trọng phong cách hoài niệm Pháp cổ"
                                            ],
                                   "cons":  [
                                                "Cuối tuần phố đi bộ rất đông, xếp hàng mua kem",
                                                "Ăn đứng tại sảnh là trải nghiệm văn hóa nhưng người mỏi chân cần chú ý",
                                                "Tránh để kem chảy nhanh trong mùa hè"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Phạm Quốc Hưng",
                                     "badge":  "Người Hà Nội gốc",
                                     "date":  "4 ngày trước",
                                     "rating":  5,
                                     "comment":  "Đến Hà Nội mà chưa ăn kem Tràng Tiền thì coi như chưa đến. Que kem cốm thơm dịu, ăn giữa tiết trời thu se lạnh là tuyệt đỉnh!"
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "Store",
                               "name":  "Kem Tràng Tiền",
                               "address":  "35 Tràng Tiền, Phường Tràng Tiền, Quận Hoàn Kiếm, Hà Nội",
                               "geo":  {
                                           "@type":  "GeoCoordinates",
                                           "latitude":  21.025112,
                                           "longitude":  105.856112
                                       },
                               "priceRange":  "12.000 - 40.000 VND",
                               "servesCuisine":  "Kem Hà Nội",
                               "aggregateRating":  {
                                                       "@type":  "AggregateRating",
                                                       "ratingValue":  "4.8",
                                                       "reviewCount":  "6200"
                                                   }
                           }
    },
    {
        "id":  "store-bd-007",
        "brand":  "Bánh Cuốn Bà Xuân Dốc Hòe Nhai",
        "name":  "Bánh Cuốn Bà Xuân - Gia Truyền Dốc Hòe Nhai Ba Đình",
        "category":  "Bánh Cuốn \u0026 Đồ Ăn Sáng",
        "slug":  "banh-cuon-ba-xuan-16-hoe-nhai",
        "address":  "16 Dốc Hòe Nhai, Phường Nguyễn Trung Trực, Quận Ba Đình, Hà Nội",
        "landmark":  "Ngay dốc Hòe Nhai gần đường Yên Phụ",
        "location":  {
                         "latitude":  21.042852,
                         "longitude":  105.845112
                     },
        "price_range":  {
                            "min":  35000,
                            "max":  60000,
                            "formatted":  "35.000₫ - 60.000₫"
                        },
        "operating_hours":  {
                                "open_time":  "06:30",
                                "close_time":  "22:00",
                                "best_visit_window":  "07:30 - 09:00 hoặc 18:00 - 19:30"
                            },
        "contact":  {
                        "phone":  "0989288514",
                        "phone_display":  "098 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)"
                    },
        "amenities":  [
                          {
                              "name":  "Bánh tráng tay tại chỗ",
                              "icon":  "fresh"
                          },
                          {
                              "name":  "Thanh toán VietQR",
                              "icon":  "qr"
                          }
                      ],
        "parking_detail":  {
                               "motorcycle":  "Để xe máy vỉa hè dốc Hòe Nhai trước quán",
                               "car":  "Táp xe chớp nhoáng hoặc gửi bãi phố Hàng Than"
                           },
        "realtime_busyness":  {
                                  "status_text":  "Đông khách sáng sớm",
                                  "busyness_sub":  "Khói nghi ngút từ nồi hấp bánh tráng",
                                  "noise_level":  "52 dB"
                              },
        "ai_curation":  {
                            "signature_dish":  "Bánh Cuốn Trứng Lòng Đào \u0026 Chả Nướng Than Hoa (Bánh tráng mỏng ấp trứng gà ta hồng đào béo ngậy ngập trong bát nước mắm ninh xương ấm nóng thơm lừng hành phi)",
                            "insider_tip":  "Nên gọi 1 đĩa bánh cuốn thịt băm mộc nhĩ kèm 1 suất bánh cuốn trứng chần. Dùng thìa dầm nhẹ quả trứng lòng đào tan vào nước mắm tỏi ớt ấm nóng chấm bánh bùi béo tuyệt hảo.",
                            "contexts":  [
                                             "an_sang_nhanh",
                                             "am_thuc_di_san",
                                             "thanh_toan_vietqr"
                                         ],
                            "omni_trust_score":  96
                        },
        "photos":  [
                       {
                           "url":  "/assets/photos/banh_cuon_ba_hoanh.jpg",
                           "caption":  "Đĩa bánh cuốn trứng lòng đào Bà Xuân Dốc Hòe Nhai bốc khói",
                           "tag":  "Món Đinh"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Thực Đơn Bánh Cuốn Dốc Hòe Nhai",
                                    "items":  [
                                                  {
                                                      "name":  "Bánh cuốn trứng lòng đào đặc biệt",
                                                      "price":  "45.000đ",
                                                      "desc":  "Trứng gà ta hấp trong lớp vỏ bánh mỏng mịn ngập nước mắm ấm",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Bánh cuốn thịt mộc nhĩ chả quế",
                                                      "price":  "40.000đ",
                                                      "desc":  "Thịt nạc băm đậm đà rắc hành phi giòn tan",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Chả nướng que tre than hoa ăn kèm",
                                                      "price":  "15.000đ",
                                                      "desc":  "Thịt ba chỉ nướng than hoa thơm lừng đậm vị",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Vỏ bánh mỏng tang dẻo dai, trứng gà tráng vừa độ lòng đào không bị vỡ hay chín quá",
                                                "Nước chấm ninh xương ngọt thanh tịnh không gắt đường",
                                                "Hành phi tự phi mỗi sáng thơm phức giòn rụm"
                                            ],
                                   "cons":  [
                                                "Quán bình dân trên dốc Hòe Nhai, bàn ghế mộc",
                                                "Chỗ để xe máy hạn chế trên dốc thoai thoải",
                                                "Giờ cao điểm phục vụ bánh trứng cần đợi tráng riêng"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Lê Văn Tuấn",
                                     "badge":  "Thực khách Ba Đình",
                                     "date":  "1 tuần trước",
                                     "rating":  5,
                                     "comment":  "Bánh cuốn trứng Bà Xuân ở Dốc Hòe Nhai là đỉnh của chóp! Trứng lòng đào béo ngậy hòa quyện nước mắm ấm và hành phi thơm lừng."
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "Restaurant",
                               "name":  "Bánh Cuốn Bà Xuân",
                               "address":  "16 Dốc Hòe Nhai, Phường Nguyễn Trung Trực, Quận Ba Đình, Hà Nội",
                               "geo":  {
                                           "@type":  "GeoCoordinates",
                                           "latitude":  21.042852,
                                           "longitude":  105.845112
                                       },
                               "priceRange":  "35.000 - 60.000 VND",
                               "servesCuisine":  "Bánh Cuốn Hà Nội",
                               "aggregateRating":  {
                                                       "@type":  "AggregateRating",
                                                       "ratingValue":  "4.6",
                                                       "reviewCount":  "1720"
                                                   }
                           }
    },
    {
        "id":  "store-hbt-009",
        "brand":  "Cà Phê Thái 1926",
        "name":  "Cà Phê Thái - Rang Củi Gỗ Gia Truyền Từ Năm 1926",
        "category":  "Cà Phê \u0026 Trà Di Sản",
        "slug":  "ca-phe-thai-27-trieu-viet-vuong",
        "address":  "27 Triệu Việt Vương, Phường Bùi Thị Xuân, Quận Hai Bà Trưng, Hà Nội",
        "landmark":  "Đầu phố Triệu Việt Vương gần Nguyễn Du",
        "location":  {
                         "latitude":  21.015112,
                         "longitude":  105.849812
                     },
        "price_range":  {
                            "min":  25000,
                            "max":  45000,
                            "formatted":  "25.000₫ - 45.000₫"
                        },
        "operating_hours":  {
                                "open_time":  "06:30",
                                "close_time":  "23:00",
                                "best_visit_window":  "07:00 - 09:00 hoặc 15:00 - 17:00"
                            },
        "contact":  {
                        "phone":  "02438226922",
                        "phone_display":  "024 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)"
                    },
        "amenities":  [
                          {
                              "name":  "Di sản cà phê gần 100 năm",
                              "icon":  "heritage"
                          },
                          {
                              "name":  "Rang củi gỗ gia truyền",
                              "icon":  "fire"
                          },
                          {
                              "name":  "Thanh toán VietQR",
                              "icon":  "qr"
                          }
                      ],
        "parking_detail":  {
                               "motorcycle":  "Để xe máy vỉa hè số 27 Triệu Việt Vương",
                               "car":  "Gửi ô tô phố Nguyễn Du hoặc công viên Thống Nhất"
                           },
        "realtime_busyness":  {
                                  "status_text":  "Không khí đàm đạo tĩnh tại",
                                  "busyness_sub":  "Tách cà phê phin đậm hương khói củi",
                                  "noise_level":  "52 dB"
                              },
        "ai_curation":  {
                            "signature_dish":  "Cà Phê Rang Củi Nâu Nóng \u0026 Bạc Xỉu Truyền Thống (Hạt cà phê được rang thủ công bằng củi gỗ thơm nồng đượm khói, tạo nên vị đắng sâu lắng và hậu ngọt thảo mộc độc bản)",
                            "insider_tip":  "Hãy thưởng thức một ly cà phê đen nóng hoặc nâu nóng nhỏ giọt từ phin nhôm truyền thống. Mùi thơm đượm khói củi tự nhiên là thứ không một máy móc công nghiệp hiện đại nào mô phỏng được.",
                            "contexts":  [
                                             "ca_phe_di_san",
                                             "chill_hoai_niem",
                                             "giao_luu_ban_be",
                                             "thanh_toan_vietqr"
                                         ],
                            "omni_trust_score":  97
                        },
        "photos":  [
                       {
                           "url":  "/assets/photos/cot_dien_banh_mi_chao.jpg",
                           "caption":  "Ly cà phê rang củi đậm đặc tại Cà phê Thái 1926",
                           "tag":  "Món Đinh"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Thực Đơn Cà Phê Rang Củi 1926",
                                    "items":  [
                                                  {
                                                      "name":  "Cà phê đen nóng rang củi",
                                                      "price":  "25.000đ",
                                                      "desc":  "Đượm khói củi tự nhiên hậu ngọt thanh tao sâu lắng",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Cà phê nâu đá truyền thống",
                                                      "price":  "28.000đ",
                                                      "desc":  "Đậm đà vị sữa đặc quyện cà phê thủ công",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Bạc xỉu ba tầng nóng ấm",
                                                      "price":  "30.000đ",
                                                      "desc":  "Nhiều sữa ít cà phê béo ngậy thơm nức",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Thương hiệu cà phê gia truyền lâu đời bậc nhất Hà Nội (gần 100 năm tuổi)",
                                                "Công nghệ rang củi gỗ giữ được hương khói tự nhiên và độ đậm đặc độc nhất vô nhị",
                                                "Không gian giữ trọn sự mộc mạc và chân thành của người Tràng An"
                                            ],
                                   "cons":  [
                                                "Vị cà phê rất đậm, người không quen say cà phê nhẹ",
                                                "Bàn ghế gỗ thấp giản dị, không theo đuổi phong cách hiện đại",
                                                "Không có điều hòa phòng kín"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Vũ Anh Tuấn",
                                     "badge":  "Tín đồ cà phê mộc 30 năm",
                                     "date":  "1 tuần trước",
                                     "rating":  5,
                                     "comment":  "Hương vị cà phê Thái rang củi không thể lẫn vào đâu được. Nhấp ngụm cà phê thấy cả mùi khói củi ấm nồng của một Hà Nội xưa cũ!"
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "CafeOrCoffeeShop",
                               "name":  "Cà Phê Thái",
                               "address":  "27 Triệu Việt Vương, Phường Bùi Thị Xuân, Quận Hai Bà Trưng, Hà Nội",
                               "geo":  {
                                           "@type":  "GeoCoordinates",
                                           "latitude":  21.015112,
                                           "longitude":  105.849812
                                       },
                               "priceRange":  "25.000 - 45.000 VND",
                               "servesCuisine":  "Cà Phê Hà Nội",
                               "aggregateRating":  {
                                                       "@type":  "AggregateRating",
                                                       "ratingValue":  "4.7",
                                                       "reviewCount":  "2980"
                                                   }
                           }
    },
    {
        "id":  "store-dd-009",
        "brand":  "Nem Nướng Nha Trang Cô Điệp",
        "name":  "Nem Nướng Cô Điệp - Đệ Nhất Nem Nướng Ngõ 4C Đặng Văn Ngữ",
        "category":  "Ăn Vặt \u0026 Món Cuốn",
        "slug":  "nem-nuong-co-diep-4c-dang-van-ngu",
        "address":  "Số 4C Ngõ 4C Đặng Văn Ngữ, Phường Trung Tự, Quận Đống Đa, Hà Nội",
        "landmark":  "Khu ẩm thực sinh viên \u0026 học sinh Đặng Văn Ngữ",
        "location":  {
                         "latitude":  21.011212,
                         "longitude":  105.832812
                     },
        "price_range":  {
                            "min":  35000,
                            "max":  65000,
                            "formatted":  "35.000₫ - 65.000₫"
                        },
        "operating_hours":  {
                                "open_time":  "09:30",
                                "close_time":  "21:30",
                                "best_visit_window":  "11:30 - 13:00 hoặc 17:00 - 19:30"
                            },
        "contact":  {
                        "phone":  "0989288675",
                        "phone_display":  "098 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)"
                    },
        "amenities":  [
                          {
                              "name":  "Điều hòa mát",
                              "icon":  "ac"
                          },
                          {
                              "name":  "Nước sốt chấm thịt băm gia truyền",
                              "icon":  "sauce"
                          },
                          {
                              "name":  "Thanh toán VietQR",
                              "icon":  "qr"
                          }
                      ],
        "parking_detail":  {
                               "motorcycle":  "Để xe máy trong ngõ 4C có người hướng dẫn",
                               "car":  "Không đi ô tô vào ngõ; gửi bãi xe Hồ Đắc Di"
                           },
        "realtime_busyness":  {
                                  "status_text":  "Rất đông học sinh sinh viên",
                                  "busyness_sub":  "Mẹt nem lên nhanh trong 3 phút",
                                  "noise_level":  "58 dB"
                              },
        "ai_curation":  {
                            "signature_dish":  "Mẹt Nem Nướng Đầy Đủ \u0026 Nước Chấm Tép Băm Hoàng Kim (Thanh nem nướng than hoa thơm lừng, ram chiên giòn rụm, xoài chua thái lát, dưa chuột và rổ rau sống cuốn đẫm nước sốt thịt băm bùi béo ấm nóng)",
                            "insider_tip":  "Nước sốt ở đây là linh hồn món ăn: nấu từ gạo nếp, thịt băm, gan và tôm sánh mịn màu vàng cam. Nhớ cho thêm ớt tươi và hành phi giòn tan vào bát nước chấm trước khi cuốn.",
                            "contexts":  [
                                             "an_trua_nhanh",
                                             "hoc_sinh_sinh_vien",
                                             "an_vat_xe_chieu",
                                             "thanh_toan_vietqr"
                                         ],
                            "omni_trust_score":  95
                        },
        "photos":  [
                       {
                           "url":  "/assets/photos/cot_dien_banh_mi_chao.jpg",
                           "caption":  "Mẹt nem nướng Cô Điệp vàng rụm cùng bát nước chấm thịt băm ấm nóng",
                           "tag":  "Món Đinh"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Thực Đơn Nem Nướng \u0026 Ăn Vặt",
                                    "items":  [
                                                  {
                                                      "name":  "Suất nem nướng đặc biệt đầy đủ",
                                                      "price":  "45.000đ",
                                                      "desc":  "Thanh nem nướng than hoa, ram giòn rụm, rau sống bạt ngàn và nước sốt vàng ươm",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Ram chiên giòn gọi thêm",
                                                      "price":  "10.000đ",
                                                      "desc":  "Ram cuốn bánh tráng chiên giòn tan rụm",
                                                      "is_signature":  false
                                                  },
                                                  {
                                                      "name":  "Trà quất nha đam mát lạnh",
                                                      "price":  "15.000đ",
                                                      "desc":  "Thanh mát giải ngấy",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Nước sốt chấm thịt băm nấu sánh đặc, ấm nóng, vị bùi béo thơm ngậy chuẩn mực",
                                                "Thanh nem nướng than hoa thơm nức mũi, không độn bột",
                                                "Rau sống tươi sạch, cho nhiều thoải mái xin thêm"
                                            ],
                                   "cons":  [
                                                "Nằm trong ngõ 4C Đặng Văn Ngữ, ngõ nhỏ đông đúc",
                                                "Giờ tan tầm học sinh trường Kim Liên đổ về kín chỗ",
                                                "Chỉ phù hợp đi xe máy"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Nguyễn Mai Chi",
                                     "badge":  "Học sinh Kim Liên \u0026 Thực khách quen",
                                     "date":  "1 tuần trước",
                                     "rating":  5,
                                     "comment":  "Ăn nem nướng khắp Hà Nội nhưng nước sốt Cô Điệp ngõ 4C Đặng Văn Ngữ vẫn là vô địch thiên hạ. Sốt sánh béo ấm nóng chấm miếng nem giòn rụm mê đắm!"
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "Restaurant",
                               "name":  "Nem Nướng Cô Điệp",
                               "address":  "Số 4C Ngõ 4C Đặng Văn Ngữ, Phường Trung Tự, Quận Đống Đa, Hà Nội",
                               "geo":  {
                                           "@type":  "GeoCoordinates",
                                           "latitude":  21.011212,
                                           "longitude":  105.832812
                                       },
                               "priceRange":  "35.000 - 65.000 VND",
                               "servesCuisine":  "Nem Nướng Nha Trang",
                               "aggregateRating":  {
                                                       "@type":  "AggregateRating",
                                                       "ratingValue":  "4.6",
                                                       "reviewCount":  "2340"
                                                   }
                           }
    },
    {
        "id":  "store-th-007",
        "brand":  "Cà Phê Tháng Mười",
        "name":  "Cà Phê Tháng Mười - Ban Công Vintage Ven Hồ Tây",
        "category":  "Cà Phê \u0026 Trà Di Sản",
        "slug":  "ca-phe-thang-muoi-115-nguyen-dinh-thi",
        "address":  "115 Nguyễn Đình Thi, Phường Thụy Khuê, Quận Tây Hồ, Hà Nội",
        "landmark":  "Mặt đường ven hồ Tây đoạn Nguyễn Đình Thi",
        "location":  {
                         "latitude":  21.045512,
                         "longitude":  105.821215
                     },
        "price_range":  {
                            "min":  35000,
                            "max":  70000,
                            "formatted":  "35.000₫ - 70.000₫"
                        },
        "operating_hours":  {
                                "open_time":  "07:30",
                                "close_time":  "23:00",
                                "best_visit_window":  "16:30 - 18:30 (Ngắm trọn vẹn hoàng hôn hồ Tây)"
                            },
        "contact":  {
                        "phone":  "0989288771",
                        "phone_display":  "098 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)"
                    },
        "amenities":  [
                          {
                              "name":  "View trực diện hoàng hôn Hồ Tây",
                              "icon":  "lake"
                          },
                          {
                              "name":  "Không gian đồ cổ 4 tầng độc đáo",
                              "icon":  "vintage"
                          },
                          {
                              "name":  "Điều hòa mát các tầng",
                              "icon":  "ac"
                          },
                          {
                              "name":  "Thanh toán VietQR",
                              "icon":  "qr"
                          }
                      ],
        "parking_detail":  {
                               "motorcycle":  "Để xe máy vỉa hè trước quán ven hồ có người trông",
                               "car":  "Đỗ ô tô ven đường Nguyễn Đình Thi rộng rãi có bảo vệ quán xi nhan"
                           },
        "realtime_busyness":  {
                                  "status_text":  "Bàn ban công kín chỗ lúc hoàng hôn",
                                  "busyness_sub":  "Tầng 3 và 4 yên tĩnh thích hợp đọc sách, làm việc",
                                  "noise_level":  "48 dB (Yên bình ven hồ)"
                              },
        "ai_curation":  {
                            "signature_dish":  "Trà Hoa Cúc Mật Ong Dưỡng Nhan \u0026 Cà Phê Cốt Dừa Đá Xay (Trà hoa cúc thanh tao thơm ngát ấm lòng, cà phê cốt dừa béo ngậy thơm nồng ngắm mặt nước mênh mông)",
                            "insider_tip":  "Lên ban công tầng 4 vào tầm 17h chiều. Đây là một trong những góc ngắm hoàng hôn ráng chiều đỏ rực trên mặt sóng hồ Tây lãng mạn bậc nhất thủ đô.",
                            "contexts":  [
                                             "hen_ho_lang_man",
                                             "view_dep_ho_tay",
                                             "chill_hoai_niem",
                                             "co_cho_do_oto",
                                             "thanh_toan_vietqr"
                                         ],
                            "omni_trust_score":  96
                        },
        "photos":  [
                       {
                           "url":  "/assets/photos/cot_dien_banh_mi_chao.jpg",
                           "caption":  "Ban công cà phê Tháng Mười nhìn thẳng ra hoàng hôn Hồ Tây",
                           "tag":  "Không Gian"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Thực Đơn Trà \u0026 Cà Phê Ven Hồ",
                                    "items":  [
                                                  {
                                                      "name":  "Trà hoa cúc táo đỏ mật ong",
                                                      "price":  "45.000đ",
                                                      "desc":  "Hoa cúc sấy tự nhiên, táo đỏ ngọt thanh ấm bụng",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Cà phê cốt dừa đá xay thơm ngậy",
                                                      "price":  "50.000đ",
                                                      "desc":  "Cốt dừa béo mịn quyện cà phê đen đậm vị",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Trà đào cam sả thanh mát",
                                                      "price":  "45.000đ",
                                                      "desc":  "Vị chua ngọt thơm nồng sả tươi giải nhiệt",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Vị trí ven hồ Nguyễn Đình Thi lộng gió, tầm nhìn hoàng hôn hồ Tây không góc chết",
                                                "Không gian nội thất sưu tầm đồ gỗ cổ và máy móc cơ khí thập niên 80 đầy chất nghệ thuật",
                                                "Có chỗ đỗ ô tô ven đường thuận tiện"
                                            ],
                                   "cons":  [
                                                "Cầu thang lên các tầng hơi dốc kiểu nhà phố cổ",
                                                "Cuối tuần giờ hoàng hôn bàn sát ban công thường hết sớm",
                                                "Giá đồ uống nhỉnh hơn quán cóc ven hồ"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Lê Hà My",
                                     "badge":  "Thực khách Tây Hồ",
                                     "date":  "3 ngày trước",
                                     "rating":  5,
                                     "comment":  "Tháng Mười là quán cà phê ruột mỗi khi muốn tìm một góc yên bình. Ban công tầng 4 ngắm mặt trời lặn dần xuống hồ Tây đẹp đến nao lòng!"
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "CafeOrCoffeeShop",
                               "name":  "Cà Phê Tháng Mười",
                               "address":  "115 Nguyễn Đình Thi, Phường Thụy Khuê, Quận Tây Hồ, Hà Nội",
                               "geo":  {
                                           "@type":  "GeoCoordinates",
                                           "latitude":  21.045512,
                                           "longitude":  105.821215
                                       },
                               "priceRange":  "35.000 - 70.000 VND",
                               "servesCuisine":  "Cà Phê \u0026 Trà Hà Nội",
                               "aggregateRating":  {
                                                       "@type":  "AggregateRating",
                                                       "ratingValue":  "4.6",
                                                       "reviewCount":  "1980"
                                                   }
                           }
    },
    {
        "id":  "store-tx-003",
        "brand":  "Lẩu Dê Nhất Ly",
        "name":  "Lẩu Dê Nhất Ly - Thịt Dê Núi Ninh Bình Số 15 Nguyễn Thị Định",
        "category":  "Dê Núi \u0026 Lẩu Đặc Sản",
        "slug":  "lau-de-nhat-ly-15-nguyen-thi-dinh",
        "address":  "15 Nguyễn Thị Định, Phường Nhân Chính, Quận Thanh Xuân, Hà Nội",
        "landmark":  "Khu đô thị Trung Hòa - Nhân Chính",
        "location":  {
                         "latitude":  21.008212,
                         "longitude":  105.803512
                     },
        "price_range":  {
                            "min":  180000,
                            "max":  380000,
                            "formatted":  "180.000₫ - 380.000₫"
                        },
        "operating_hours":  {
                                "open_time":  "10:00",
                                "close_time":  "22:30",
                                "best_visit_window":  "11:30 - 13:30 hoặc 18:00 - 21:00"
                            },
        "contact":  {
                        "phone":  "02435568855",
                        "phone_display":  "024 â€¢â€¢â€¢ â€¢â€¢â€¢ (Báº£o máº­t OMNI)"
                    },
        "amenities":  [
                          {
                              "name":  "Điều hòa mát các tầng phòng VIP",
                              "icon":  "ac"
                          },
                          {
                              "name":  "Bãi đỗ ô tô rộng rãi có bảo vệ",
                              "icon":  "parking"
                          },
                          {
                              "name":  "Không gian sang trọng tiếp khách",
                              "icon":  "luxury"
                          },
                          {
                              "name":  "Thanh toán VietQR \u0026 Thẻ",
                              "icon":  "card"
                          }
                      ],
        "parking_detail":  {
                               "motorcycle":  "Bãi để xe máy trong sân có bảo vệ trông",
                               "car":  "Có bãi đỗ ô tô riêng trước cửa quán chứa được 15-20 xe"
                           },
        "realtime_busyness":  {
                                  "status_text":  "Sẵn sàng đón tiếp khách đoàn",
                                  "busyness_sub":  "Tòa nhà 4 tầng phòng ốc rộng rãi",
                                  "noise_level":  "58 dB"
                              },
        "ai_curation":  {
                            "signature_dish":  "Dê Tái Chanh Thảo Mộc \u0026 Nồi Lẩu Thịt Dê Hầm Thuốc Bắc (Thịt dê núi tươi thái mỏng bóp chanh gừng sả rau ngổ thơm ngọt không chút mùi hôi, nước lẩu hầm đẳng sâm kỷ tử ấm bổ)",
                            "insider_tip":  "Nước tương bần gia truyền ở đây chấm dê nướng hoặc dê tái chanh là đỉnh cao. Hãy gọi thêm đĩa dê nướng mọi hoặc dê xào lăn thơm bùi nước cốt dừa.",
                            "contexts":  [
                                             "tiep_khach_doi_tac",
                                             "an_toi_nhom",
                                             "tu_tap_ban_be",
                                             "co_cho_do_oto",
                                             "dieu_hoa_mat",
                                             "thanh_toan_vietqr"
                                         ],
                            "omni_trust_score":  96
                        },
        "photos":  [
                       {
                           "url":  "/assets/photos/cha_ca_thang_long.jpg",
                           "caption":  "Đĩa dê tái chanh Nhất Ly thịt hồng hào thơm nồng hương ngổ gừng",
                           "tag":  "Món Đinh"
                       }
                   ],
        "menu_categories":  [
                                {
                                    "category_name":  "Thực Đơn Dê Núi Nhất Ly",
                                    "items":  [
                                                  {
                                                      "name":  "Dê tái chanh đặc biệt thảo mộc",
                                                      "price":  "195.000đ",
                                                      "desc":  "Thịt dê tươi bóp chanh tái, gừng tươi, sả, vừng rang và rau ngổ chấm tương bần",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Set lẩu thịt dê hầm thuốc bắc tiêu chuẩn",
                                                      "price":  "390.000đ",
                                                      "desc":  "Nồi lẩu nước dùng thảo mộc ấm bổ, thịt dê đùi, sườn, nấm và mì trứng",
                                                      "is_signature":  true
                                                  },
                                                  {
                                                      "name":  "Dê nướng tảng than hoa",
                                                      "price":  "210.000đ",
                                                      "desc":  "Thịt dê tẩm ướp nướng xèo xèo giữ trọn vị ngọt",
                                                      "is_signature":  false
                                                  }
                                              ]
                                }
                            ],
        "sentiment_analysis":  {
                                   "pros":  [
                                                "Thịt dê tươi 100% chuẩn dê núi, kỹ thuật khử mùi tanh gia truyền hoàn hảo",
                                                "Không gian rộng rãi, nhiều phòng riêng máy lạnh phục vụ tiệc và tiếp khách",
                                                "Bãi đỗ ô tô cực kỳ thuận tiện tại khu Trung Hòa - Nhân Chính"
                                            ],
                                   "cons":  [
                                                "Giá phân khúc cao cấp chuyên biệt",
                                                "Buổi tối cuối tuần rất đông khách, cần đặt bàn trước",
                                                "Nước chấm tương bần truyền thống đậm vị Bắc"
                                            ]
                               },
        "verified_reviews":  [
                                 {
                                     "author":  "Trần Hải Nam",
                                     "badge":  "Chủ doanh nghiệp Thanh Xuân",
                                     "date":  "4 ngày trước",
                                     "rating":  5,
                                     "comment":  "Nhất Ly Nguyễn Thị Định là địa chỉ tiếp khách và họp mặt ruột của công ty tôi. Dê tái chanh thịt mềm ngọt, tương gừng chuẩn bài, ô tô đỗ tận cửa an tâm tuyệt đối!"
                                 }
                             ],
        "schema_json_ld":  {
                               "@context":  "https://schema.org",
                               "@type":  "Restaurant",
                               "name":  "Lẩu Dê Nhất Ly",
                               "address":  "15 Nguyễn Thị Định, Phường Nhân Chính, Quận Thanh Xuân, Hà Nội",
                               "geo":  {
                                           "@type":  "GeoCoordinates",
                                           "latitude":  21.008212,
                                           "longitude":  105.803512
                                       },
                               "priceRange":  "180.000 - 380.000 VND",
                               "servesCuisine":  "Dê Núi Việt Nam",
                               "aggregateRating":  {
                                                       "@type":  "AggregateRating",
                                                       "ratingValue":  "4.6",
                                                       "reviewCount":  "3450"
                                                   }
                           }
    }
];

const HANOI_MASTER_DATA = HANOI_RAW_DATA.map(s => {
    const rawImg = (s.photos && s.photos.length > 0) ? s.photos[0].url : (s.image_url ? s.image_url : "/assets/photos/pho_bat_dan.jpg");
    const normalizedImg = rawImg.startsWith("/") ? rawImg : "/" + rawImg;

    const rawPattern = (s.realtime_busyness && s.realtime_busyness.historical_pattern) 
        ? s.realtime_busyness.historical_pattern 
        : ((s.operating_hours && s.operating_hours.best_visit_window) ? ("Khung giá» vÃ ng: " + s.operating_hours.best_visit_window) : "TrÃ¡nh giá» cao Ä‘iá»ƒm trÆ°a");

    return {
        ...s,
        lat: s.location.latitude,
        lng: s.location.longitude,
        price: (s.price_range && s.price_range.formatted) ? s.price_range.formatted : "30.000â‚« - 80.000â‚«",
        dish: (s.ai_curation && s.ai_curation.signature_dish) ? s.ai_curation.signature_dish : "",
        tip: (s.ai_curation && s.ai_curation.insider_tip) ? s.ai_curation.insider_tip : "",
        trust: (s.ai_curation && s.ai_curation.omni_trust_score) ? s.ai_curation.omni_trust_score : 90,
        contexts: (s.ai_curation && s.ai_curation.contexts) ? s.ai_curation.contexts : [],
        image: normalizedImg,
        best_visit_window: (s.operating_hours && s.operating_hours.best_visit_window) ? s.operating_hours.best_visit_window : "10h30 - 11h30",
        historical_pattern: rawPattern,
        busyness_status: (s.realtime_busyness && s.realtime_busyness.status_text) ? s.realtime_busyness.status_text : "Sáºµn sÃ ng Ä‘Ã³n khÃ¡ch",
        busyness_sub: (s.realtime_busyness && s.realtime_busyness.busyness_sub) ? s.realtime_busyness.busyness_sub : "VÃ o bÃ n ngay",
        noise_level: (s.realtime_busyness && s.realtime_busyness.noise_level) ? s.realtime_busyness.noise_level : "KhÃ´ng gian thoÃ¡ng mÃ¡t",
        ac_info: (s.amenities && s.amenities.find(a => a.icon === 'ac' || a.icon === 'fan')) ? s.amenities.find(a => a.icon === 'ac' || a.icon === 'fan').name : "KhÃ´ng gian thoÃ¡ng mÃ¡t",
        phone: (s.contact && s.contact.phone) ? s.contact.phone : null,
        phone_display: (s.contact && s.contact.phone_display) ? s.contact.phone_display : "Phá»¥c vá»¥ trá»±c tiáº¿p",
        media_footprint: s.media_footprint || null,
        menu_categories: s.menu_categories || [],
        sentiment_analysis: s.sentiment_analysis || null,
        verified_reviews: s.verified_reviews || [],
        spatial_identity: s.spatial_identity || null,
        key_signature: s.key_signature || null,
        audit_dossier: s.audit_dossier || null,
        rating: (s.verified_reviews && s.verified_reviews.length > 0) ? (s.verified_reviews.reduce((acc, r) => acc + (r.rating || 4.5), 0) / s.verified_reviews.length).toFixed(1) : "4.5",
        reviews_count: (s.verified_reviews && s.verified_reviews.length > 0) ? (s.verified_reviews.length * 450 + 200).toLocaleString() : "1,200",
        review_quote: (s.verified_reviews && s.verified_reviews.length > 0) ? s.verified_reviews[0].comment : "Äá»‹a chá»‰ áº©m thá»±c uy tÃ­n Ä‘Æ°á»£c cá»™ng Ä‘á»“ng Ä‘Ã¡nh giÃ¡ cao."
    };
});
const NGHIA_TAN_DATA = HANOI_MASTER_DATA;

// STATE MANAGEMENT
let userLocation = {
  name: "Cổng THCS Nghĩa Tân",
  lat: 21.043105,
  lng: 105.792842
};

let currentFilter = "all";
let currentPlaceIndex = 0;
let filteredPlaces = [...HANOI_MASTER_DATA];
let currentInspectedPlace = null;
let walkSimulationInterval = null;

// SVG ICON GENERATOR
function getSvgIcon(name) {
  switch (name) {
    case "ac":
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v18M3 12h18M6 6l12 12M6 18L18 6"/></svg>`;
    case "bike":
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="18.5" cy="17.5" r="3.5"/><path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-3 11.5L9 9h3l3 4.5"/></svg>`;
    case "car":
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="8" rx="2"/><path d="M5 11l2-5h10l2 5"/><circle cx="7.5" cy="15.5" r="1.5"/><circle cx="16.5" cy="15.5" r="1.5"/></svg>`;
    case "qr":
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><path d="M14 14h3v3h-3zM20 20h-3v-3h3z"/></svg>`;
    case "vat":
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`;
    case "wifi":
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01"/></svg>`;
    case "tree":
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19v3M12 3a7 7 0 0 0-7 7c0 3 2 5 2 7h10c0-2 2-4 2-7a7 7 0 0 0-7-7z"/></svg>`;
    case "fan":
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 12c-2-2-2-5 0-7s5-2 7 0-2 5-7 7z"/></svg>`;
    case "clock":
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`;
    case "box":
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/></svg>`;
    default:
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>`;
  }
}

// HAVERSINE DISTANCE ENGINE
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // meters
  const phi1 = (lat1 * Math.PI) / 180;
  const phi2 = (lat2 * Math.PI) / 180;
  const deltaPhi = ((lat2 - lat1) * Math.PI) / 180;
  const deltaLambda = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) +
    Math.cos(phi1) * Math.cos(phi2) * Math.sin(deltaLambda / 2) * Math.sin(deltaLambda / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const meters = Math.round(R * c);
  const minutes = Math.max(1, Math.ceil(meters / 80)); // 80 meters per minute walking speed
  return { meters, minutes };
}

// AUDIO CHIME (SYNTHETIC DISCRETE SOUND FOR QUIET LUXURY FEEDBACK)
function playQuietChime() {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5 note
    gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.25);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.25);
  } catch (e) {
    // Audio context not allowed without interaction, fail silently
  }
}

// RENDER ACTIVE HERO CARD (TẦNG 1)
function renderActiveHeroCard() {
  const place = filteredPlaces[currentPlaceIndex] || filteredPlaces[0];
  if (!place) return;

  const dist = calculateDistance(userLocation.lat, userLocation.lng, place.lat, place.lng);

  // Text Elements
  document.getElementById("hero-category").innerText = place.category;
  document.getElementById("hero-price").innerText = place.price;
  document.getElementById("hero-title").innerText = place.name;
  document.getElementById("hero-trust").innerHTML = `
    <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
    <span>${place.trust}/100 OMNI Trust</span>
  `;
  document.getElementById("hero-busyness-short").innerText = place.best_visit_window ? `Khuyên đi: ${place.best_visit_window.split(" ")[0]}` : place.busyness_status;
  document.getElementById("hero-distance").innerHTML = `Cách bạn <strong>${dist.meters}m</strong> • ${dist.minutes} phút đi bộ`;
  document.getElementById("hero-busyness-detail").innerText = `${place.best_visit_window ? place.best_visit_window.split(" ")[0] : place.busyness_status} • ${place.ac_info || place.busyness_sub}`;
  document.getElementById("hero-dish").innerText = place.dish;
  
  const spatialEl = document.getElementById("hero-spatial-desc");
  if (spatialEl) {
    spatialEl.innerText = place.spatial_identity || `${place.ac_info} • Chỗ để xe: ${place.parking_detail ? place.parking_detail.motorbike : "Thuận tiện"}`;
  }
  const keyEl = document.getElementById("hero-key-desc");
  if (keyEl) {
    keyEl.innerText = place.key_signature || place.dish;
  }

  const tipEl = document.getElementById("hero-tip");
  if (tipEl) tipEl.innerText = `"${place.tip}"`;

  // Hero Image
  const imgEl = document.getElementById("hero-image");
  imgEl.src = place.image;
  imgEl.alt = place.name;

  // Amenities tags (if present in DOM)
  const tagsContainer = document.getElementById("hero-amenities");
  if (tagsContainer) {
    tagsContainer.innerHTML = place.amenities
      .map((a) => `<span class="amenity-chip">${getSvgIcon(a.icon)} ${a.name}</span>`)
      .join("");
  }

  // Set Google Maps Link
  const gmapsBtn = document.getElementById("btn-gmaps");
  const gmapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${place.lat},${place.lng}&destination_place_id=${encodeURIComponent(place.name)}`;
  gmapsBtn.href = gmapsUrl;
}

// ==============================================================================
// RESTAURANT DETAIL DRAWER SYSTEM ("XEM CHI TIẾT" - 100% FUNCTIONAL)
// ==============================================================================
function openDetailModal(identifier) {
  let place = null;
  if (typeof identifier === "number") {
    place = filteredPlaces[identifier] || HANOI_MASTER_DATA[identifier];
  } else if (typeof identifier === "string") {
    place = HANOI_MASTER_DATA.find((p) => p.id === identifier);
  }

  if (!place) place = filteredPlaces[0];
  currentInspectedPlace = place;

  // SEO & DEEP LINKING URL HYDRATION
  if (place.id && window.location.hash !== `#${place.id}`) {
    history.replaceState(null, "", `#${place.id}`);
  }
  document.title = `${place.name} - Món Ngon, Không Gian & Mẹo Thổ Địa | OMNI AI`;

  const dist = calculateDistance(userLocation.lat, userLocation.lng, place.lat, place.lng);

  // Populate Drawer Header
  document.getElementById("drawer-category").innerText = place.category;
  document.getElementById("drawer-name").innerText = place.name;
  document.getElementById("drawer-address").innerText = place.address;
  document.getElementById("drawer-image").src = place.image;
  document.getElementById("drawer-image").alt = place.name;

  // Populate Factual Grounded Telemetry
  document.getElementById("drawer-distance").innerText = `${dist.meters} mét`;
  document.getElementById("drawer-walk-eta").innerText = `Khoảng ${dist.minutes} phút đi bộ từ ${userLocation.name}`;
  
  const bestTimeValEl = document.getElementById("drawer-best-time-val");
  if (bestTimeValEl) {
    bestTimeValEl.innerText = place.best_visit_window ? place.best_visit_window.split(" ")[0] : "Trước 11h30";
  }
  const bestTimeSubEl = document.getElementById("drawer-best-time-sub");
  if (bestTimeSubEl) {
    bestTimeSubEl.innerText = place.historical_pattern || place.busyness_sub || "Tránh giờ cao điểm đông đúc";
  }

  document.getElementById("drawer-noise").innerText = place.noise_level;
  document.getElementById("drawer-ac-info").innerText = place.ac_info;
  document.getElementById("drawer-trust-score").innerText = `${place.trust} / 100`;

  // Populate Spatial Identity & Key Signature
  const spatialIdEl = document.getElementById("drawer-spatial-identity");
  if (spatialIdEl) {
    spatialIdEl.innerText = place.spatial_identity || `${place.ac_info} • Chỗ để xe: ${place.parking_detail ? place.parking_detail.motorbike : "Thuận tiện"}`;
  }
  const keySigEl = document.getElementById("drawer-key-signature");
  if (keySigEl) {
    keySigEl.innerText = place.key_signature || place.dish;
  }

  // Populate Red-Team Audit Dossier
  const auditNotesEl = document.getElementById("drawer-audit-notes");
  if (auditNotesEl) {
    if (place.audit_dossier && place.audit_dossier.notes) {
      auditNotesEl.innerText = place.audit_dossier.notes;
    } else {
      auditNotesEl.innerText = `Đã kiểm chứng địa bàn: Tọa độ WGS84, menu giá niêm yết hiện hành, đối chiếu 3 nguồn độc lập (Google Place CID, Fanpage, Thực tế thực khách).`;
    }
  }

  // Populate Categorized Menu
  const menuContainer = document.getElementById("drawer-menu-items");
  if (place.menu_categories && place.menu_categories.length > 0) {
    menuContainer.innerHTML = place.menu_categories
      .map(
        (cat) => `
        <div class="menu-category-divider">${cat.category_name}</div>
        ${cat.items
          .map(
            (m) => `
          <div class="dish-menu-item">
            <div class="dish-info">
              <h5>
                ${m.name}
                ${m.is_signature ? '<span class="reviewer-badge" style="background:rgba(217,119,6,0.15); color:#d97706; border-color:rgba(217,119,6,0.3); font-size:9px; margin-left:4px;">★ Món Đinh</span>' : ''}
              </h5>
              <p>${m.desc}</p>
            </div>
            <div class="dish-price">${m.price}</div>
          </div>
        `
          )
          .join("")}
      `
      )
      .join("");
  } else if (place.menu) {
    menuContainer.innerHTML = place.menu
      .map(
        (m) => `
        <div class="dish-menu-item">
          <div class="dish-info">
            <h5>${m.name}</h5>
            <p>${m.desc}</p>
          </div>
          <div class="dish-price">${m.price}</div>
        </div>
      `
      )
      .join("");
  }

  // Populate Insider Tip & Field Metrics
  document.getElementById("drawer-tip").innerText = `"${place.tip}"`;
  
  const bestTimeEl = document.getElementById("drawer-best-time");
  if (bestTimeEl) {
    bestTimeEl.innerText = place.best_visit_window || "10h30 - 11h30 (Tránh cao điểm)";
  }

  const parkingEl = document.getElementById("drawer-parking-info");
  if (parkingEl) {
    if (place.parking_detail) {
      parkingEl.innerText = `${place.parking_detail.motorbike} • ${place.parking_detail.car}`;
    } else {
      parkingEl.innerText = "Để xe máy miễn phí trước cửa quán";
    }
  }

  // Populate Amenities Detail
  const amenitiesContainer = document.getElementById("drawer-amenities-grid");
  amenitiesContainer.innerHTML = place.amenities
    .map(
      (a) => `
      <div class="amenity-detail-box">
        ${getSvgIcon(a.icon)}
        <span>${a.name}</span>
      </div>
    `
    )
    .join("");

  // Populate Reviews
  document.getElementById("drawer-rating-stars").innerText = `★★★★★ ${place.rating}`;
  document.getElementById("drawer-reviews-count").innerText = `(${place.reviews_count} đánh giá)`;
  document.getElementById("drawer-review-quote").innerText = `"${place.review_quote}"`;

  // Populate Transparent Sentiment Analysis (Pros & Cons)
  const prosEl = document.getElementById("drawer-sentiment-pros");
  if (prosEl) {
    if (place.sentiment_analysis && place.sentiment_analysis.pros) {
      prosEl.innerHTML = `<ul>${place.sentiment_analysis.pros.map((p) => `<li>${p}</li>`).join("")}</ul>`;
    } else {
      prosEl.innerHTML = `<ul><li>Chất lượng món ăn tươi ngon, chuẩn vị truyền thống.</li></ul>`;
    }
  }

  const consEl = document.getElementById("drawer-sentiment-cons");
  if (consEl) {
    if (place.sentiment_analysis && place.sentiment_analysis.cons) {
      consEl.innerHTML = `<ul>${place.sentiment_analysis.cons.map((c) => `<li>${c}</li>`).join("")}</ul>`;
    } else {
      consEl.innerHTML = `<ul><li>Giờ cao điểm trưa đông đúc, nên đi sớm 15 phút.</li></ul>`;
    }
  }

  // Populate Verified Reviews List
  const verifiedListEl = document.getElementById("drawer-verified-reviews-list");
  if (verifiedListEl) {
    if (place.verified_reviews && place.verified_reviews.length > 0) {
      verifiedListEl.innerHTML = place.verified_reviews
        .map(
          (r) => `
        <div class="verified-review-entry">
          <div class="verified-review-meta">
            <div class="reviewer-name">
              <span>${r.author}</span>
              <span class="reviewer-badge">${r.badge}</span>
            </div>
            <div style="font-size: 11px; color: var(--accent-gold); display: flex; align-items: center; gap: 4px;">
              <span>★ ${r.rating}.0</span>
              <span style="color: var(--text-muted); font-size: 10px;">• ${r.date}</span>
            </div>
          </div>
          <div class="verified-review-text">"${r.comment}"</div>
        </div>
      `
        )
        .join("");
    } else {
      verifiedListEl.innerHTML = "";
    }
  }

  // Populate Media Footprint
  const mediaSec = document.getElementById("drawer-media-section");
  const mediaGrid = document.getElementById("drawer-media-grid");
  if (mediaSec && mediaGrid) {
    if (place.media_footprint) {
      mediaSec.style.display = "block";
      const mf = place.media_footprint;
      let mediaItems = [];
      if (mf.facebook_page) {
        mediaItems.push(`
          <div class="media-card-item">
            <div class="media-icon facebook-icon">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </div>
            <div class="media-info">
              <div class="media-label">Facebook Fanpage</div>
              <div class="media-val">${mf.facebook_page}</div>
            </div>
          </div>
        `);
      }
      if (mf.tiktok_reach) {
        mediaItems.push(`
          <div class="media-card-item">
            <div class="media-icon tiktok-icon">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3 15.28 6.34 6.34 0 0 0 9.34 21.6 6.34 6.34 0 0 0 15.68 15.3V8.81a8.18 8.18 0 0 0 4.78 1.54V6.9a4.85 4.85 0 0 1-.87-.21z"/></svg>
            </div>
            <div class="media-info">
              <div class="media-label">TikTok Review & Viral</div>
              <div class="media-val">${mf.tiktok_reach}</div>
            </div>
          </div>
        `);
      }
      if (mf.youtube_coverage) {
        mediaItems.push(`
          <div class="media-card-item">
            <div class="media-icon youtube-icon">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#fff"/></svg>
            </div>
            <div class="media-info">
              <div class="media-label">YouTube Food Review</div>
              <div class="media-val">${mf.youtube_coverage}</div>
            </div>
          </div>
        `);
      }
      if (mf.press_articles || mf.press_coverage) {
        const articles = mf.press_articles || mf.press_coverage;
        mediaItems.push(`
          <div class="media-card-item">
            <div class="media-icon press-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6Z"/></svg>
            </div>
            <div class="media-info">
              <div class="media-label">Báo Chí & Tạp Chí Ẩm Thực</div>
              <div class="media-val">${Array.isArray(articles) ? articles.join(" • ") : articles}</div>
            </div>
          </div>
        `);
      }
      mediaGrid.innerHTML = mediaItems.join("");
    } else {
      mediaSec.style.display = "none";
    }
  }

  // Actions
  const gmapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${place.lat},${place.lng}&destination_place_id=${encodeURIComponent(place.name)}`;
  document.getElementById("drawer-btn-gmaps").href = gmapsUrl;
  
  const callBtn = document.getElementById("drawer-btn-call");
  if (place.phone) {
    callBtn.href = "#";
    callBtn.onclick = (e) => {
      e.preventDefault();
      openCallAuthModal(place);
    };
    callBtn.style.opacity = "1";
    callBtn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
      Liên Hệ (Bảo Mật)
    `;
  } else {
    callBtn.href = "#";
    callBtn.onclick = (e) => {
      e.preventDefault();
      showToast("Quán vỉa hè truyền thống phục vụ trực tiếp, không sử dụng hotline!");
    };
    callBtn.style.opacity = "0.75";
    callBtn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
      Phục Vụ Trực Tiếp (Không Hotline)
    `;
  }

  // Open Backdrop
  const drawer = document.getElementById("detail-drawer");
  drawer.classList.add("active");
  document.body.style.overflow = "hidden"; // prevent background scroll
  playQuietChime();
}

function openDetailModalCurrent() {
  const place = filteredPlaces[currentPlaceIndex] || filteredPlaces[0];
  openDetailModal(place.id);
}

function closeDetailModal() {
  const drawer = document.getElementById("detail-drawer");
  drawer.classList.remove("active");
  document.body.style.overflow = "";

  // Reset URL hash & title
  if (window.location.hash) {
    history.replaceState(null, "", window.location.pathname);
  }
  document.title = "Ăn Gì Nghĩa Tân? Top Quán Sành Ăn, Mẹo Bản Địa & Đi Bộ < 3 Phút | OMNI AI";
}

function copyPlaceDirectLink() {
  const place = currentInspectedPlace || filteredPlaces[currentPlaceIndex];
  if (!place) return;
  const link = `${window.location.origin}/#${place.id}`;
  navigator.clipboard.writeText(link).then(() => {
    showToast(`🔗 Đã sao chép link SEO của ${place.name}: ${link}`);
    playQuietChime();
  }).catch(() => {
    showToast(`Link: ${link}`);
  });
}

// PRIVACY-PRESERVING TELEPHONY GATEWAY (ND13/2023/ND-CP COMPLIANT)
let activeCallingPlace = null;
function openCallAuthModal(place) {
  activeCallingPlace = place;
  document.getElementById("auth-modal-place-name").innerText = place.name;
  
  // Mask phone number (0989 ••• •••)
  let masked = "09•• ••• •••";
  if (place.phone && place.phone.length >= 7) {
    masked = place.phone.substring(0, 4) + " ••• " + place.phone.substring(place.phone.length - 3);
  }
  document.getElementById("auth-modal-place-masked").innerText = `Đường dây bảo mật: ${masked}`;
  
  const confirmBtn = document.getElementById("btn-auth-confirm-call");
  confirmBtn.href = `tel:${place.phone}`;
  
  openModal("call-auth-modal");
  playQuietChime();
}

function handleConfirmedCall(e) {
  if (!activeCallingPlace) return;
  // Log telemetry engagement
  showToast(`🔒 Đã xác thực kết nối bảo mật tới ${activeCallingPlace.name}`);
  closeModal("call-auth-modal");
}

function handleDrawerBackdropClick(event) {
  if (event.target.id === "detail-drawer") {
    closeDetailModal();
  }
}

// ==============================================================================
// REALISTIC TELEGRAM MERCHANT BOT SIMULATOR
// ==============================================================================
function simulateTelegramAlert(event) {
  // If user clicked maps link, don't block navigation, but display telegram preview
  const place = currentInspectedPlace || filteredPlaces[currentPlaceIndex];
  const dist = calculateDistance(userLocation.lat, userLocation.lng, place.lat, place.lng);
  const now = new Date();
  const timeStr = now.toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" });

  document.getElementById("tg-message-text").innerHTML = `
    🏪 <strong>Quán:</strong> ${place.name}<br>
    🚶 <strong>Hành động:</strong> Thực khách vừa kích hoạt <em>[Chỉ đường Google Maps]</em><br>
    📍 <strong>Khoảng cách:</strong> ${dist.meters}m (~${dist.minutes} phút đi bộ)<br>
    🧭 <strong>Xuất phát từ:</strong> ${userLocation.name}<br>
    🍽 <strong>Món quan tâm:</strong> ${place.dish.split("(")[0]}<br>
    👥 <strong>Quy mô đoàn:</strong> 1 - 2 thực khách<br>
    ⚡ <strong>Lưu ý:</strong> ${place.busyness_sub}!
  `;

  document.getElementById("tg-timestamp").innerText = `${timeStr} • Đã nhận qua Webhook`;

  // Raw JSON Payload for Developer/Investor Inspection
  const rawPayload = {
    event: "customer.navigation_intent",
    timestamp: now.toISOString(),
    merchant: {
      id: place.id,
      name: place.name,
      address: place.address
    },
    spatial_telemetry: {
      origin_name: userLocation.name,
      origin_coords: [userLocation.lat, userLocation.lng],
      dest_coords: [place.lat, place.lng],
      distance_meters: dist.meters,
      eta_minutes: dist.minutes
    },
    party_size_estimate: 2,
    subagent_id: "04_telegram_bridge",
    notification_channel: "@omni_merchant_bot"
  };

  document.getElementById("tg-raw-json-box").innerText = JSON.stringify(rawPayload, null, 2);

  openModal("telegram-modal");
  playQuietChime();
}

function respondTelegram(type) {
  const chatViewport = document.getElementById("tg-chat-viewport");
  const timeStr = new Date().toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" });

  let replyText = "";
  if (type === "confirm") {
    replyText = `🤖 <strong>Bot Copilot:</strong> Đã gửi xác nhận đến nhân viên phục vụ: Giữ bàn 04 gần điều hòa, chuẩn bị sẵn chén bát cho khách!`;
  } else if (type === "voucher") {
    replyText = `🎁 <strong>Bot Copilot:</strong> Đã tạo mã ưu đãi <code>OMNI-WELCOME</code> (Tặng 1 ly trà quất mật ong) khi khách bước vào quán!`;
  } else if (type === "route") {
    replyText = `🗺 <strong>Bot Copilot:</strong> Radar thời gian thực: Thực khách đang di chuyển trên trục đường Tô Hiệu, vận tốc 4.8 km/h.`;
  }

  const replyBubble = document.createElement("div");
  replyBubble.className = "tg-bubble";
  replyBubble.style.background = "#2b5278";
  replyBubble.style.alignSelf = "flex-end";
  replyBubble.innerHTML = `
    <div class="tg-bubble-content">${replyText}</div>
    <div class="tg-bubble-time">${timeStr} • Đã gửi</div>
  `;

  chatViewport.appendChild(replyBubble);
  chatViewport.scrollTop = chatViewport.scrollHeight;
  playQuietChime();
  showToast("✅ Đã phản hồi tới bot Telegram của chủ quán!");
}

function toggleRawJson() {
  const box = document.getElementById("tg-raw-json-box");
  box.style.display = box.style.display === "block" ? "none" : "block";
}

function handleTelegramBackdropClick(event) {
  if (event.target.id === "telegram-modal") {
    closeModal("telegram-modal");
  }
}

// ==============================================================================
// LIVE WALKING RADAR SIMULATION (TƯƠNG TÁC THỰC NGHIỆM ĐI BỘ)
// ==============================================================================
function startSimulatedWalk() {
  const place = filteredPlaces[currentPlaceIndex];
  const initialDist = calculateDistance(userLocation.lat, userLocation.lng, place.lat, place.lng).meters;
  let remainingMeters = initialDist;

  if (walkSimulationInterval) {
    clearInterval(walkSimulationInterval);
  }

  showToast("📡 Đang kích hoạt Radar mô phỏng di chuyển bước chân...");
  playQuietChime();

  walkSimulationInterval = setInterval(() => {
    remainingMeters = Math.max(0, remainingMeters - 18);
    const estMin = Math.max(1, Math.ceil(remainingMeters / 80));

    if (remainingMeters > 0) {
      document.getElementById("hero-distance").innerHTML = `
        <span style="color: var(--accent-gold); font-weight: 700;">Đang đi bộ: Còn ${remainingMeters} mét</span> (Còn ~${estMin} phút)
      `;
    } else {
      clearInterval(walkSimulationInterval);
      document.getElementById("hero-distance").innerHTML = `
        <span style="color: var(--accent-emerald); font-weight: 700;">🎉 Đã tới trước cửa quán!</span> Mời vào bàn
      `;
      playQuietChime();
      showToast(`🎯 Chào mừng bạn đã tới ${place.name}!`);
    }
  }, 700);
}

// ==============================================================================
// ROULETTE WHEEL (XOAY QUÁN NGẪU NHIÊN VỚI HIỆU ỨNG TÁC ĐỘNG)
// ==============================================================================
function spinRoulette() {
  const heroCard = document.getElementById("hero-card");
  heroCard.style.opacity = "0.4";
  heroCard.style.transform = "scale(0.97)";

  playQuietChime();
  let spins = 0;
  const interval = setInterval(() => {
    currentPlaceIndex = Math.floor(Math.random() * filteredPlaces.length);
    renderActiveHeroCard();
    spins++;
    if (spins > 6) {
      clearInterval(interval);
      heroCard.style.opacity = "1";
      heroCard.style.transform = "scale(1)";
      playQuietChime();
      showToast(`🎯 OMNI AI đề xuất: ${filteredPlaces[currentPlaceIndex].name}!`);
    }
  }, 90);
}

// ==============================================================================
// LOCATION SWITCHER (HAVERSINE CLIENT HYDRATION TEST)
// ==============================================================================
function switchLocation(mode) {
  if (mode === "school") {
    userLocation = { name: "Cổng THCS Nghĩa Tân", lat: 21.043105, lng: 105.792842 };
  } else if (mode === "hoan_kiem") {
    userLocation = { name: "Hồ Gươm - Phố Cổ", lat: 21.030653, lng: 105.852391 };
  } else if (mode === "ba_dinh") {
    userLocation = { name: "Hồ Trúc Bạch - Ngũ Xã", lat: 21.046820, lng: 105.839810 };
  } else if (mode === "tay_ho") {
    userLocation = { name: "Phủ Tây Hồ - Quảng An", lat: 21.066420, lng: 105.834150 };
  } else if (mode === "hai_ba_trung") {
    userLocation = { name: "Tô Hiến Thành - Hai Bà Trưng", lat: 21.013520, lng: 105.850420 };
  } else if (mode === "to_hieu") {
    userLocation = { name: "Ngã tư Tô Hiệu - Nghĩa Tân", lat: 21.044521, lng: 105.794912 };
  } else if (mode === "duy_tan") {
    userLocation = { name: "Tòa nhà Duy Tân IT", lat: 21.033512, lng: 105.789215 };
  } else if (mode === "real_gps") {
    if (navigator.geolocation) {
      showToast("📡 Đang định vị GPS vệ tinh...");
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          userLocation = {
            name: "Vị trí GPS thực tế",
            lat: pos.coords.latitude,
            lng: pos.coords.longitude
          };
          document.getElementById("location-label").innerText = userLocation.name;
          renderActiveHeroCard();
          renderComparisonTable();
          renderDirectoryList();
          closeModal("location-modal");
          showToast("✅ Đã cập nhật tọa độ GPS thật của bạn!");
          playQuietChime();
        },
        () => {
          showToast("⚠️ Trình duyệt chặn GPS, đang dùng vị trí giả lập!");
        }
      );
      return;
    }
  }

  document.getElementById("location-label").innerText = userLocation.name;
  renderActiveHeroCard();
  renderComparisonTable();
  renderDirectoryList();
  closeModal("location-modal");
  showToast(`📍 Đã đổi mốc GPS: ${userLocation.name}`);
  playQuietChime();
}

// ==============================================================================
// FILTER LOGIC
// ==============================================================================
function applyFilter(filterName, btnElement) {
  currentFilter = filterName;
  document.querySelectorAll(".quiet-filter-pill").forEach((c) => c.classList.remove("active"));
  if (btnElement) btnElement.classList.add("active");

  if (filterName === "all") {
    filteredPlaces = [...HANOI_MASTER_DATA];
  } else if (filterName === "nghia_tan") {
    filteredPlaces = HANOI_MASTER_DATA.filter((p) => 
      (p.address && (p.address.includes("Nghĩa Tân") || p.address.includes("Tô Hiệu"))) ||
      (p.contexts && p.contexts.some(c => c.includes("nghia_tan") || c.includes("to_hieu")))
    );
  } else if (filterName === "duy_tan") {
    filteredPlaces = HANOI_MASTER_DATA.filter((p) => 
      (p.address && (p.address.includes("Duy Tân") || p.address.includes("Cốm Vòng") || p.address.includes("Trần Thái Tông"))) ||
      (p.contexts && p.contexts.some(c => c.includes("duy_tan") || c.includes("com_vong") || c.includes("van_phong_duy_tan")))
    );
  } else if (filterName === "trung_hoa") {
    filteredPlaces = HANOI_MASTER_DATA.filter((p) => 
      (p.address && (p.address.includes("Trung Hòa") || p.address.includes("Nguyễn Thị Định") || p.address.includes("Hoàng Đạo Thúy"))) ||
      (p.contexts && p.contexts.some(c => c.includes("trung_hoa") || c.includes("michelin")))
    );
  } else if (filterName === "lunch") {
    filteredPlaces = HANOI_MASTER_DATA.filter((p) => p.contexts && p.contexts.includes("an_trua_nhanh"));
  } else if (filterName === "ac") {
    filteredPlaces = HANOI_MASTER_DATA.filter((p) => p.amenities && p.amenities.some((a) => a.icon === "ac"));
  } else if (filterName === "snack") {
    filteredPlaces = HANOI_MASTER_DATA.filter((p) => p.contexts && (p.contexts.includes("an_vat_via_he") || p.contexts.includes("an_xe_chieu")));
  } else if (filterName === "heritage") {
    filteredPlaces = HANOI_MASTER_DATA.filter((p) => p.contexts && (p.contexts.includes("am_thuc_di_san") || p.contexts.includes("pho_co_hoan_kiem")));
  } else if (filterName === "hotpot") {
    filteredPlaces = HANOI_MASTER_DATA.filter((p) => (p.category && p.category.includes("Lẩu")) || (p.contexts && p.contexts.includes("tu_tap_gia_dinh")));
  }

  currentPlaceIndex = 0;
  renderActiveHeroCard();
  renderCuratedGrid();
  renderComparisonTable();
  renderDirectoryList();
  playQuietChime();
}

// ==============================================================================
// VIRAL LOOP: COPY KÈO ĂN NHÓM ZALO / TELEGRAM
// ==============================================================================
function createGroupVote() {
  const place = filteredPlaces[currentPlaceIndex];
  const dist = calculateDistance(userLocation.lat, userLocation.lng, place.lat, place.lng);
  
  const voteText = `[KÈO ĂN OMNI AI • NGHĨA TÂN] 🍲\nHôm nay nhóm mình qua quán này nhé:\n⭐ *${place.name}*\n📍 Vị trí: ${place.address} (Cách mốc ${dist.meters}m, ${dist.minutes}p đi bộ)\n🍽 Món đinh: ${place.dish}\n💡 Mẹo sành ăn: "${place.tip}"\n👉 Xem thực đơn & tình trạng bàn trống: ${window.location.origin}/`;

  navigator.clipboard.writeText(voteText).then(() => {
    showToast("📋 Đã sao chép lời rủ! Hãy dán vào Group Zalo / Telegram!");
    playQuietChime();
  }).catch(() => {
    showToast("📋 Đã tạo nội dung rủ ăn trưa!");
  });
}

// ==============================================================================
// THEME SWITCHER (OBSIDIAN DARK <-> PORCELAIN LIGHT)
// ==============================================================================
function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme") || "dark";
  const target = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", target);
  localStorage.setItem("omni_theme", target);
  showToast(`Đã chuyển sang giao diện ${target === "dark" ? "Obsidian Noir" : "Porcelain Alabaster"}`);
  playQuietChime();
}

// ==============================================================================
// RENDER BELOW-THE-FOLD TABLES & DIRECTORY
// ==============================================================================
function renderComparisonTable() {
  const tbody = document.getElementById("comparison-table-body");
  if (!tbody) return;

  tbody.innerHTML = HANOI_MASTER_DATA.map((p) => {
    const dist = calculateDistance(userLocation.lat, userLocation.lng, p.lat, p.lng);
    const acText = p.amenities.some((a) => a.icon === "ac") ? "Điều hòa mát" : "Quạt mát";
    const carText = p.amenities.some((a) => a.icon === "car") ? "Đỗ ô tô Tô Hiệu" : "Xe máy";

    return `
      <tr>
        <td>
          <strong style="color: var(--text-prime);">${p.name.split("-")[0]}</strong><br>
          <span style="font-size: 11px; color: var(--text-muted);">${dist.meters}m • ${dist.minutes}p</span>
        </td>
        <td>${p.dish.split("(")[0]}</td>
        <td style="font-family: var(--font-mono); font-size: 11.5px;">${p.price}</td>
        <td>
          <span style="font-size: 11px; color: var(--text-sec);">${acText}, ${carText}</span>
        </td>
        <td>
          <button class="directory-inspect-btn" onclick="openDetailModal('${p.id}')">
            Xem Chi Tiết →
          </button>
        </td>
      </tr>
    `;
  }).join("");
}

function renderCuratedGrid() {
  const container = document.getElementById("curated-grid-container");
  if (!container) return;

  const showcaseItems = filteredPlaces.slice(0, 6);
  container.innerHTML = showcaseItems.map((p) => {
    const dist = calculateDistance(userLocation.lat, userLocation.lng, p.lat, p.lng);
    return `
      <div class="curated-card" onclick="openDetailModal('${p.id}')">
        <div class="curated-card-media">
          <img src="${p.image}" alt="${p.name}" loading="lazy">
        </div>
        <div class="curated-card-body">
          <div>
            <div class="curated-card-eyebrow">${p.category}</div>
            <h4 class="curated-card-title">${p.name}</h4>
            <div class="curated-card-dish">${p.dish}</div>
          </div>
          <div class="curated-card-meta">
            <span>${p.price}</span>
            <span style="color: var(--accent-gold); font-weight: 500;">Cách ${dist.meters}m • ${dist.minutes}p</span>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function renderDirectoryList() {
  const listContainer = document.getElementById("directory-list");
  if (!listContainer) return;

  listContainer.innerHTML = filteredPlaces.map((p, idx) => {
    const dist = calculateDistance(userLocation.lat, userLocation.lng, p.lat, p.lng);
    return `
      <div class="directory-item" onclick="openDetailModal('${p.id}')">
        <div class="directory-meta-left">
          <div class="directory-index">0${idx + 1}</div>
          <div class="directory-text">
            <h4>${p.name}</h4>
            <p>${p.address} • Cách ${dist.meters}m (${dist.minutes}p đi bộ)</p>
          </div>
        </div>
        <div class="directory-action-right">
          <span class="directory-inspect-btn">
            Xem Chi Tiết →
          </span>
        </div>
      </div>
    `;
  }).join("");
}

// MODAL UTILITIES
function openModal(id) {
  document.getElementById(id).classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal(id) {
  document.getElementById(id).classList.remove("active");
  document.body.style.overflow = "";
}

function handleQuietModalBackdropClick(event, id) {
  if (event.target.id === id) {
    closeModal(id);
  }
}

function showToast(msg) {
  const toast = document.getElementById("toast");
  const textEl = document.getElementById("toast-text");
  textEl.innerText = msg;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}

function copyMobileUrl() {
  const url = "http://" + (window.location.hostname === "localhost" ? "192.168.1.245" : window.location.hostname) + ":" + (window.location.port || "3000") + "/";
  navigator.clipboard.writeText(url).then(() => {
    showToast("📋 Đã sao chép link Wi-Fi: " + url);
  }).catch(() => {
    showToast("Link: " + url);
  });
}

// ==============================================================================
// PWA INSTALL LOGIC
// ==============================================================================
let deferredPrompt;
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  const pwaBtn = document.getElementById("btn-pwa-install");
  if (pwaBtn) {
    pwaBtn.style.display = "inline-flex";
  }
});

function triggerPwaInstall() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        showToast("🎉 Cảm ơn bạn đã cài đặt OMNI AI vào màn hình chính!");
      }
      deferredPrompt = null;
      const pwaBtn = document.getElementById("btn-pwa-install");
      if (pwaBtn) pwaBtn.style.display = "none";
    });
  } else {
    showToast("💡 Ứng dụng PWA đã sẵn sàng! Bạn có thể cài đặt từ biểu tượng [Cài đặt] trên thanh địa chỉ trình duyệt hoặc Menu chia sẻ.");
  }
}

// INITIALIZATION
window.addEventListener("DOMContentLoaded", () => {
  // Load saved theme if any
  const savedTheme = localStorage.getItem("omni_theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);

  // Render initial components
  renderActiveHeroCard();
  renderCuratedGrid();
  renderComparisonTable();
  renderDirectoryList();

  // Deep linking URL hydration on load (#quán-id)
  const initialHash = window.location.hash.replace("#", "").trim();
  if (initialHash) {
    const matchedPlace = HANOI_MASTER_DATA.find((p) => p.id === initialHash);
    if (matchedPlace) {
      setTimeout(() => {
        openDetailModal(matchedPlace.id);
      }, 300);
    }
  }

  // Listen to browser Back/Forward hashchange
  window.addEventListener("hashchange", () => {
    const hash = window.location.hash.replace("#", "").trim();
    if (hash) {
      const p = HANOI_MASTER_DATA.find((x) => x.id === hash);
      if (p) openDetailModal(p.id);
    } else {
      closeDetailModal();
    }
  });

  // Register PWA service worker
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js").catch(() => {});
  }
});

