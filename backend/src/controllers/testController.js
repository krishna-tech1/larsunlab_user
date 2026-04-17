export const getTestData = (req, res) => {
  res.json({
    success: true,
    data: "This is test data from the backend controller"
  });
};
