import { axios } from "axios";

const API_URL = "https://afd8cb3b-0077-4554-a7be-4ce86d83222c.mock.pstmn.io";

const convertParamsToCategory = (id) => {
  switch (id) {
    case "all":
      return "";
    case "kr":
      return "한식";
    case "cn":
      return "중식";
    case "jp":
      return "일식";
    case "west":
      return "양식";
    case "coffee":
      return "카페";
    default:
      return "all";
  }
};

export const getCategoryApi = async (category) => {
  try {
    const res = await axios.get(`${API_URL}/${category}`);
    console.log(res.data);
    return res.data;
  } catch (e) {
    console.log(e);
    const res =
      category !== "all"
        ? DUMMY_DATA.filter(
            (data) => data.category === convertParamsToCategory(category)
          )
        : DUMMY_DATA;
    console.log(res);
    return res;
  }
};

export const DUMMY_DATA = [
  {
    id: 1,
    name: "촨커",
    category: "중식",
  },

  {
    id: 2,
    name: "돼랑이우랑이",
    category: "일식",
  },

  {
    id: 3,
    name: "고수찜닭",
    category: "한식",
  },

  {
    id: 4,
    name: "파치",
    category: "양식",
  },

  {
    id: 5,
    name: "치보",
    category: "양식",
  },

  {
    id: 6,
    name: "통일 부대찌개",
    category: "한식",
  },

  {
    id: 7,
    name: "이문동 커피집",
    category: "카페",
  },

  {
    id: 8,
    name: "물고기 김밥",
    category: "한식",
  },

  {
    id: 9,
    name: "코코니주방",
    category: "일식",
  },

  {
    id: 10,
    name: "미연 마라탕",
    category: "중식",
  },

  {
    id: 11,
    name: "할머니 보쌈",
    category: "한식",
  },

  {
    id: 12,
    name: "아일랜드비",
    category: "카페",
  },

  {
    id: 13,
    name: "베브릿지",
    category: "카페",
  },

  {
    id: 14,
    name: "마루기",
    category: "일식",
  },

  {
    id: 15,
    name: "아임파이",
    category: "카페",
  },

  {
    id: 16,
    name: "영화장",
    category: "중식",
  },

  {
    id: 17,
    name: "샤로스톤",
    category: "양식",
  },

  {
    id: 18,
    name: "아욱꽃",
    category: "양식",
  },

  {
    id: 19,
    name: "도란도란",
    category: "한식",
  },

  {
    id: 20,
    name: "모코모코",
    category: "일식",
  },

  {
    id: 21,
    name: "고기야 미안해",
    category: "일식",
  },

  {
    id: 22,
    name: "뉴올리언스 버거클럽",
    category: "양식",
  },

  {
    id: 23,
    name: "서울 뼈구이 매운족발",
    category: "한식",
  },

  {
    id: 24,
    name: "회기왕족발보쌈",
    category: "한식",
  },

  {
    id: 25,
    name: "사골 마라탕",
    category: "중식",
  },

  {
    id: 26,
    name: "홍곱창",
    category: "한식",
  },

  {
    id: 27,
    name: "양귀비",
    category: "카페",
  },

  {
    id: 28,
    name: "신보",
    category: "카페",
  },

  {
    id: 29,
    name: "밀플랜비",
    category: "양식",
  },

  {
    id: 30,
    name: "자연밥상",
    category: "한식",
  },
];
